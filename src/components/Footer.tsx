import { twMerge } from "tailwind-merge";

export const Footer = () => {
  return (
    <footer
      className={twMerge([
        "w-full h-[60px] flex gap-2 items-center justify-center flex-wrap",
        "border-t border-emerald-900 bg-gray-100 text-gray-900",
      ])}
    >
      <span>Copyright © 2023 - </span>
      <span>Allef Douglas</span>
      <a
        className="text-sky-700 underline"
        href="mailto:allef.douglas.dev@gmail.com"
      >
        (allef.douglas.dev@gmail.com)
      </a>
    </footer>
  );
};
