import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

/**
 * 输入框：背景/边框使用 `bg-input-background`、`border-input` 等主题 token。
 * `size` 为组件级视觉尺寸，与原生 attribute `size` 区分（已从 Props 中 Omit）。
 */
const inputVariants = cva(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border py-1 bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      size: {
        sm: "h-8 px-2.5 text-sm",
        default: "h-9 px-3 text-base",
        lg: "h-10 px-4 text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export type InputProps = Omit<React.ComponentProps<"input">, "size"> &
  VariantProps<typeof inputVariants>;

function Input({ className, type, size, disabled, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      disabled={disabled}
      className={cn(inputVariants({ size }), className)}
      {...props}
    />
  );
}

export { Input, inputVariants };
