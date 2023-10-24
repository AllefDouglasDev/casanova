"use client";

import { useListItems } from "@/hooks/useListItems";
import { ItemCard } from "./ItemCard";

export const ItemList = () => {
  const { categories, isLoading } = useListItems();

  return (
    <div className="w-full h-full max-w-lg flex flex-col gap-2 p-2">
      {isLoading && <span className="w-full text-center text-xl text-gray-600 text-semibold animate-pulse">Carregando...</span>}
      {categories.map((category) => (
        <details key={category.name} open className="mb-2">
          <summary className="flex gap-2 capitalize text-2xl font-semibold pb-2 text-emerald-900 border-b border-b-emerald-800">
            {category.icon}
            <span>{category.name}</span>
          </summary>
          <div className="flex flex-col gap-2">
            {category.items.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </details>
      ))}
    </div>
  );
};
