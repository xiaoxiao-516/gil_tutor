import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** 合并 Tailwind 类名（与 `app/components/ui/utils` 逻辑一致，供 `@/components/ui` 使用） */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
