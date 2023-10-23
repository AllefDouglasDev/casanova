import { useEffect, useMemo } from "react";
import { getItems } from "services/item.service";
import { Item } from "core/types";
import { useState } from "react";

function byName(a: Item, b: Item) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }

  return 0;
}

export function useListItems() {
  const [items, setItems] = useState<Item[]>([]);

  const {
    kitchenItems,
    bathroomItems,
    bedroomItems,
    roomItems,
  } = useMemo(() => {
    const kitchenItems = items
      .filter((item) => item.category === "cozinha")
      .sort(byName);
    const bathroomItems = items
      .filter((item) => item.category === "banheiro")
      .sort(byName);
    const bedroomItems = items
      .filter((item) => item.category === "quarto")
      .sort(byName);
    const roomItems = items
      .filter((item) => item.category === "sala")
      .sort(byName);
    return { kitchenItems, bathroomItems, bedroomItems, roomItems };
  }, [items]);

  useEffect(() => {
    getItems((snapshot) => {
      if (!snapshot.val()) return;

      const itemList: Item[] = [];

      Object.keys(snapshot.val()).forEach((key) => {
        const currentItem = snapshot.val()[key] as Item;

        itemList.push({
          id: key,
          name: currentItem.name,
          owner: currentItem.owner,
          category: currentItem.category,
        });
      });

      setItems(itemList);
    });
  }, []);

  return { items, kitchenItems, bathroomItems, bedroomItems, roomItems };
}
