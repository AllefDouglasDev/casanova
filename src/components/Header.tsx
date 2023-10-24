import { BiHomeHeart } from "react-icons/bi";
import { GiBeveledStar } from "react-icons/gi";
import { GoHeart } from "react-icons/go";

export function Header() {
  return (
    <div className="w-full h-[200px] flex flex-col gap-2 items-center justify-center bg-emerald-900 py-2">
      <div className="text-white font-semibold text-2xl flex flex-nowrap gap-2">
        Brena <GoHeart /> Sérgio
      </div>
      <BiHomeHeart size={80} color="#cecece" />
      <div className="flex gap-3">
        <GiBeveledStar size={14} color="white" />
        <GiBeveledStar size={16} color="white" />
        <GiBeveledStar size={18} color="white" />
        <GiBeveledStar size={22} color="white" />
        <GiBeveledStar size={18} color="white" />
        <GiBeveledStar size={16} color="white" />
        <GiBeveledStar size={14} color="white" />
      </div>
    </div>
  );
}
