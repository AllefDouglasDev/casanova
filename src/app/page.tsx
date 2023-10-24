import { ItemList } from "@/components/ItemList";

export default function Home() {
  return (
    <div className="w-full h-full overflow-x-auto overflow-y-hidden flex flex-col bg-gray-100">
      <p className="w-full py-4 text-2xl text-center text-gray-600">Lista de presentes</p>
      <div className="w-full h-full flex justify-center">
        <ItemList />
      </div>
    </div>
  );
}
