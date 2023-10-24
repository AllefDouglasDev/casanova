import { ComponentProps, ComponentRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "h-[40px] active:text-white font-medium hover:opacity-80 bg-emerald-900 hover:bg-emerald-800 text-white rounded",
  variants: {
    kind: {
      info: "bg-blue-700 hover:bg-blue-600",
      danger: "bg-red-700 hover:bg-red-600",
    },
    outlined: {
      true: "border bg-white text-emerald-900 border-emerald-900 hover:border-emerald-800 focus:bg-white active:bg-white",
    },
  },
  compoundVariants: [
    {
      kind: "info",
      outlined: true,
      class:
        "border bg-white text-blue-700 border-blue-700 hover:border-blue-600",
    },
    {
      kind: "danger",
      outlined: true,
      class: "border bg-white focus:bg-red-600 hover:bg-white text-red-700 border-red-700 hover:border-red-600",
    },
  ],
});

type ButtonRef = ComponentRef<'button'>
type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

export const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ kind, outlined, className, children, ...props }, ref) => {
    return (
      <button
        {...props}
        className={twMerge(button({ kind, outlined }), className)}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
