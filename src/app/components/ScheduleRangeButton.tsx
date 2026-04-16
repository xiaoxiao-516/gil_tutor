import type { MouseEventHandler, ReactNode } from "react";
import { ScheduleRangeIcon } from "./ScheduleRangeIcon";

export function ScheduleRangeButton({
  onClick,
  children = "排课范围",
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-[2px] w-[100px] h-[32px] justify-center rounded-[18px] cursor-pointer transition-colors bg-white shrink-0 whitespace-nowrap"
      style={{
        fontSize: "var(--text-base)",
        fontWeight: "var(--font-weight-regular)",
        color: "var(--primary)",
        border: "1px solid #9CB1FC",
        lineHeight: "1.5",
      }}
    >
      <ScheduleRangeIcon />
      {children}
    </button>
  );
}
