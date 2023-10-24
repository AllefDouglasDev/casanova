import { ComponentProps, ComponentRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type InputRef = ComponentRef<"input">;
type InputProps = ComponentProps<"input"> & {
  label?: string;
};

export const Input = forwardRef<InputRef, InputProps>(
  ({ id, label, name, className, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-2">
        {label && <label htmlFor={id || name}>{label}</label>}
        <input
          {...props}
          ref={ref}
          id={id || name}
          className={twMerge(
            [
              "shadow h-[40px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
              "focus:ring-1 focus:border-emerald-900 focus:ring-emerald-700",
            ],
            className
          )}
        />
      </div>
    );
  }
);

Input.displayName = "input";
