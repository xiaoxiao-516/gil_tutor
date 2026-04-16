/**
 * 原子 UI 组件统一出口。
 * 样式基于项目 Tailwind v4 + `src/styles/theme.css` 中的 CSS Variables（如 `--primary`、`--card`）。
 *
 * @example
 * import { Button, Input, Card, CardContent, Badge, cn } from "@/components/ui";
 */

export { cn } from "./utils";

export { Button, buttonVariants, type ButtonProps } from "./button";

export { Input, inputVariants, type InputProps } from "./input";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  type CardProps,
} from "./card";

export { Badge, badgeVariants, type BadgeProps } from "./badge";
