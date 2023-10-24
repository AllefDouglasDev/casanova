"use client";

import { useListItems } from "@/hooks/useListItems";
import { removeItem } from "@/services/itemService";
import { Item } from "@/types/models";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { EditItem } from "./EditItem";
import { BsGiftFill } from "react-icons/bs";

export const AdminItemList = () => {
  const { categories } = useListItems();
  const [editingItem, setEditingItem] = useState<Item | undefined>();

  const editItem = (item: Item) => {
    setEditingItem(item);
  };

  const cancelEdit = () => {
    setEditingItem(undefined);
  };

  return (
    <div className="px-2">
      {categories.map((category) => (
        <details key={category.name} open>
          <summary className="text-emerald-700 gap-2 capitalize text-lg font-semibold py-2 cursor-pointer">
            {category.name}
          </summary>
          {category.items.length === 0 ? (
            <span className="empty">Nenhum item...</span>
          ) : (
            <ul>
              {category.items.map((item) =>
                editingItem?.id === item.id ? (
                  <li key={item.id}>
                    <EditItem item={item} onClose={cancelEdit} />
                  </li>
                ) : (
                  <li key={item.id} className="flex justify-between px-1 py-2">
                    <span className="flex gap-2 items-center">
                      <BsGiftFill size={20} color="#F25565" />
                      {item.name}
                      {item.owner && (
                        <span className="text-sm text-sky-600">
                          ({item.owner})
                        </span>
                      )}
                    </span>
                    <div className="flex gap-2">
                      <button type="button" onClick={() => editItem(item)}>
                        <MdEdit color="gray" size={25} />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id || "")}
                      >
                        <MdDelete color="gray" size={25} />
                      </button>
                    </div>
                  </li>
                )
              )}
            </ul>
          )}
        </details>
      ))}
    </div>
  );
};
