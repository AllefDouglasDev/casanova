import { Item } from "@/types/models";
import { BsGiftFill } from "react-icons/bs";
import { AssignOwnerModal } from "./AssignOwnerModal";
import { setItem } from "@/services/itemService";

type ItemCardProps = {
  item: Item;
};

export const ItemCard = ({ item }: ItemCardProps) => {
  const handleAddOwner = (owner: string) => {
    if (!owner) return;
    setItem({ ...item, owner });
  };

  return (
    <div className="w-full flex flex-col p-3 gap-4 rounded bg-white first-of-type:mt-2 shadow">
      <p className="text-xl font-semibold">{item.name}</p>
      <div>
        {item.owner ? (
          <div className="flex items-center gap-4">
            <BsGiftFill size={24} color="#F25565" />
            <span>{item.owner}</span>
          </div>
        ) : (
          <AssignOwnerModal
            title={item.name}
            onName={handleAddOwner}
            onAnonymous={() => handleAddOwner("Anônimo")}
          />
        )}
      </div>
    </div>
  );
};
