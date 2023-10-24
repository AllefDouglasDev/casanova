import { ReactNode, useEffect, useMemo } from "react";
import { useState } from "react";
import { sortByName } from "@/utils/sort";
import { getItems } from "@/services/itemService";
import { Item } from "@/types/models";
import { FaShower } from "react-icons/fa";
import { BiBed } from "react-icons/bi";
import { GiSofa } from "react-icons/gi";
import { MdKitchen } from "react-icons/md";

const ICON_COLOR = "#064e3b";
const ICON_SIZE = 30; 

function getCategoryIcon(categoryName: string) {
  switch (categoryName) {
    case "cozinha":
      return <MdKitchen size={ICON_SIZE} color={ICON_COLOR} />;
    case "banheiro":
      return <FaShower size={ICON_SIZE} color={ICON_COLOR} />;
    case "quarto":
      return <BiBed size={ICON_SIZE} color={ICON_COLOR} />;
    case "sala":
      return <GiSofa size={ICON_SIZE} color={ICON_COLOR} />;
  }
}

export function useListItems() {
  const [items, setItems] = useState<Item[]>([]);

  const categories = useMemo(() => {
    return items
      .reduce<{ name: string; icon: ReactNode; items: Item[] }[]>(
        (categories, item) => {
          const category = categories.find((c) => c.name === item.category);
          if (category) {
            category.items.push(item);
          } else {
            categories.push({
              name: item.category,
              icon: getCategoryIcon(item.category),
              items: [item],
            });
          }
          return categories;
        },
        []
      )
      .map((category) => ({
        ...category,
        items: category.items.sort(sortByName),
      }));
  }, [items]);

  useEffect(() => {
    getItems((snapshot) => {
      if (!snapshot.val()) {
        return
      }
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

  return { isLoading: items.length === 0, items, categories };
}
