import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import svgPaths from "../../imports/svg-ddgyf9plgq";
import publishSvgPaths from "../../imports/svg-gl0as5wg90";

interface DateTimePickerProps {
  value: string; // "YYYY-MM-DD HH:mm"
  onChange: (value: string) => void;
  placeholder?: string;
  /** Show a shortcut button at bottom-left of the dropdown */
  showNowButton?: boolean;
  /** Label for the shortcut button */
  nowButtonLabel?: string;
  /** Callback when the shortcut button is clicked */
  onNowClick?: () => void;
  /** Display text override (shown in the trigger instead of value) */
  displayText?: string;
  /** Control open state externally */
  externalOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Hide the trigger button (for external control) */
  hideTrigger?: boolean;
  /** Cancel callback */
  onCancel?: () => void;
}

// Sunday-first weekday headers (matching Figma)
const WEEKDAYS = ["日", "一", "二", "三", "四", "五", "六"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getCalendarDays(year: number, month: number) {
  // Sunday-first: getDay() already returns 0=Sun
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = getDaysInMonth(year, month);
  const prevMonthDays = getDaysInMonth(year, month - 1);
  const rows: { day: number; currentMonth: boolean }[][] = [];
  let row: { day: number; currentMonth: boolean }[] = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    row.push({ day: prevMonthDays - i, currentMonth: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    row.push({ day: d, currentMonth: true });
    if (row.length === 7) {
      rows.push(row);
      row = [];
    }
  }
  if (row.length > 0) {
    let nextDay = 1;
    while (row.length < 7) {
      row.push({ day: nextDay++, currentMonth: false });
    }
    rows.push(row);
  }
  return rows;
}

function TimeScrollColumn({
  items,
  selected,
  onSelect,
}: {
  items: string[];
  selected: string;
  onSelect: (v: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const el = itemRefs.current.get(selected);
    if (el && containerRef.current) {
      el.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [selected]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-[6px] items-center overflow-y-auto scrollbar-thin pt-[8px] px-[4px] w-[48px]"
      style={{ height: "240px" }}
    >
      {items.map((item) => {
        const isSelected = item === selected;
        return (
          <div
            key={item}
            ref={(el) => {
              if (el) itemRefs.current.set(item, el);
            }}
            onClick={() => onSelect(item)}
            className="shrink-0 w-full h-[28px] flex items-center justify-center rounded-[14px] cursor-pointer transition-colors"
            style={{
              backgroundColor: isSelected ? "#6574fc" : "transparent",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: isSelected ? "600" : "400",
                color: isSelected ? "white" : "#444963",
                fontFamily: "'Avenir', sans-serif",
                fontFeatureSettings: "'lnum', 'pnum'",
                lineHeight: "1.5",
              }}
            >
              {item}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function DateTimePicker({
  value,
  onChange,
  placeholder = "请选择日期时间",
  showNowButton = false,
  nowButtonLabel = "立即发布",
  onNowClick,
  displayText,
  externalOpen,
  onOpenChange,
  hideTrigger = false,
  onCancel,
}: DateTimePickerProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = externalOpen !== undefined;
  const open = isControlled ? externalOpen : internalOpen;
  const setOpen = useCallback((v: boolean) => {
    if (!isControlled) setInternalOpen(v);
    onOpenChange?.(v);
  }, [isControlled, onOpenChange]);

  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number } | null>(null);

  // Calculate dropdown position when open (for non-hideTrigger mode)
  useEffect(() => {
    if (!open || hideTrigger || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setDropdownPos({ top: rect.bottom + 4, left: rect.left });
  }, [open, hideTrigger]);

  // Parse value
  const parsedDate = value ? value.split(" ")[0] : "";
  const parsedTime = value ? value.split(" ")[1] || "" : "";
  const [selYear, setSelYear] = useState(() => {
    if (parsedDate) return parseInt(parsedDate.split("-")[0]);
    return new Date().getFullYear();
  });
  const [selMonth, setSelMonth] = useState(() => {
    if (parsedDate) return parseInt(parsedDate.split("-")[1]) - 1;
    return new Date().getMonth();
  });
  const [selDay, setSelDay] = useState(() => {
    if (parsedDate) return parseInt(parsedDate.split("-")[2]);
    return new Date().getDate();
  });
  const [selHour, setSelHour] = useState(() => {
    if (parsedTime) return parsedTime.split(":")[0];
    return String(new Date().getHours()).padStart(2, "0");
  });
  const [selMinute, setSelMinute] = useState(() => {
    if (parsedTime) return parsedTime.split(":")[1];
    return String(new Date().getMinutes()).padStart(2, "0");
  });

  // Sync when value changes externally
  useEffect(() => {
    if (value) {
      const [d, t] = value.split(" ");
      const [y, m, day] = d.split("-");
      setSelYear(parseInt(y));
      setSelMonth(parseInt(m) - 1);
      setSelDay(parseInt(day));
      if (t) {
        const [h, min] = t.split(":");
        setSelHour(h);
        setSelMinute(min);
      }
    }
  }, [value]);

  const today = new Date();
  const isToday = (day: number, currentMonth: boolean) =>
    currentMonth &&
    selYear === today.getFullYear() &&
    selMonth === today.getMonth() &&
    day === today.getDate();

  const calendarDays = getCalendarDays(selYear, selMonth);
  const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
  const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));

  const prevMonth = () => {
    if (selMonth === 0) { setSelYear((y) => y - 1); setSelMonth(11); }
    else setSelMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (selMonth === 11) { setSelYear((y) => y + 1); setSelMonth(0); }
    else setSelMonth((m) => m + 1);
  };
  const prevYear = () => setSelYear((y) => y - 1);
  const nextYear = () => setSelYear((y) => y + 1);

  const handleConfirm = useCallback(() => {
    const dateStr = `${selYear}-${String(selMonth + 1).padStart(2, "0")}-${String(selDay).padStart(2, "0")}`;
    const timeStr = `${selHour}:${selMinute}`;
    onChange(`${dateStr} ${timeStr}`);
    setOpen(false);
  }, [selYear, selMonth, selDay, selHour, selMinute, onChange, setOpen]);

  const handleNowClick = useCallback(() => {
    if (onNowClick) {
      onNowClick();
    }
    setOpen(false);
  }, [onNowClick, setOpen]);

  const handleCancel = useCallback(() => {
    if (onCancel) {
      onCancel();
    }
    setOpen(false);
  }, [onCancel, setOpen]);

  // Close on outside click - only when not in hideTrigger mode
  useEffect(() => {
    if (!open || hideTrigger) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        triggerRef.current && triggerRef.current.contains(target)
      ) return;
      if (
        dropdownRef.current && dropdownRef.current.contains(target)
      ) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, setOpen, hideTrigger]);

  const shownText = displayText !== undefined ? displayText : (value || "");

  // Footer date display
  const footerDateStr = `${selYear}年${String(selMonth + 1).padStart(2, "0")}月${String(selDay).padStart(2, "0")}日  ${selHour}:${selMinute}`;

  const dropdownContent = open && (
    <div
      ref={dropdownRef}
      className="z-[70] flex flex-col rounded-[16px] bg-white"
      style={{
        boxShadow: "0px 12px 60px 0px rgba(171,180,209,0.3)",
        overflow: "clip",
        borderRadius: "16px",
      }}
    >
      <div className="flex">
        {/* Calendar side */}
        <div className="flex flex-col" style={{ width: "310px" }}>
          {/* Header */}
          <div
            className="flex items-center justify-between px-[20px] py-[14px]"
            style={{ borderBottom: "1px solid #e1e5f2" }}
          >
            <div className="flex gap-[8px] items-center shrink-0">
              <button onClick={prevYear} className="bg-transparent border-none cursor-pointer p-0 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d={svgPaths.p3f689400} fill="#444963" />
                  <path d={svgPaths.p1df14e80} fill="#444963" />
                </svg>
              </button>
              <button onClick={prevMonth} className="bg-transparent border-none cursor-pointer p-0 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path clipRule="evenodd" d={svgPaths.p38acaf00} fill="#444963" fillRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="flex items-center">
              <span style={{ fontSize: "16px", fontWeight: "var(--font-weight-semibold)", color: "#202224", lineHeight: "1.5", fontFamily: "'Alibaba PuHuiTi 3.0', sans-serif" }}>
                {selYear}年
              </span>
              <span style={{ fontSize: "14px", color: "#838bab", fontFamily: "'Alibaba PuHuiTi 3.0', sans-serif", margin: "0 4px" }}>-</span>
              <span style={{ fontSize: "16px", fontWeight: "var(--font-weight-semibold)", color: "#202224", lineHeight: "1.5", fontFamily: "'Alibaba PuHuiTi 3.0', sans-serif" }}>
                {String(selMonth + 1).padStart(2, "0")}月
              </span>
            </div>
            <div className="flex gap-[8px] items-center shrink-0">
              <button onClick={nextMonth} className="bg-transparent border-none cursor-pointer p-0 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path clipRule="evenodd" d={svgPaths.p180e7c00} fill="#444963" fillRule="evenodd" />
                </svg>
              </button>
              <button onClick={nextYear} className="bg-transparent border-none cursor-pointer p-0 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d={svgPaths.p356ace80} fill="#444963" />
                  <path d={svgPaths.p363968b2} fill="#444963" />
                </svg>
              </button>
            </div>
          </div>

          {/* Calendar body */}
          <div className="flex flex-col gap-[4px] px-[16px] py-[16px]">
            {/* Weekday headers */}
            <div className="flex">
              {WEEKDAYS.map((wd) => (
                <div key={wd} className="flex-1 h-[36px] flex items-center justify-center">
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "var(--font-weight-regular)",
                      color: "#838bab",
                      fontFamily: "'Alibaba PuHuiTi 3.0', sans-serif",
                    }}
                  >
                    {wd}
                  </span>
                </div>
              ))}
            </div>

            {/* Day rows */}
            {calendarDays.map((row, ri) => (
              <div key={ri} className="flex">
                {row.map((cell, ci) => {
                  const isSelected = cell.currentMonth && cell.day === selDay;
                  const isTodayCell = isToday(cell.day, cell.currentMonth);
                  return (
                    <div key={ci} className="flex-1 flex items-center justify-center relative" style={{ height: "36px" }}>
                      <button
                        onClick={() => {
                          if (cell.currentMonth) setSelDay(cell.day);
                        }}
                        className="w-[28px] h-[28px] flex items-center justify-center rounded-full border-none cursor-pointer transition-colors p-0"
                        style={{
                          backgroundColor: isSelected ? "#6574fc" : "transparent",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            fontFamily: "'Avenir', sans-serif",
                            fontFeatureSettings: "'lnum', 'pnum'",
                            color: isSelected ? "white" : cell.currentMonth ? "#444963" : "#abb4d1",
                            lineHeight: "1.5",
                          }}
                        >
                          {cell.day}
                        </span>
                      </button>
                      {/* Today dot */}
                      {isTodayCell && !isSelected && (
                        <div className="absolute" style={{ bottom: "2px", left: "50%", transform: "translateX(-50%)" }}>
                          <svg width="4" height="4" viewBox="0 0 4 4" fill="none">
                            <circle cx="2" cy="2" r="2" fill="#6574fc" />
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Time side */}
        <div className="flex flex-col" style={{ borderLeft: "1px solid #e9ecf5" }}>
          {/* Time header */}
          <div
            className="flex items-center justify-center px-[16px] py-[14px]"
            style={{ borderBottom: "1px solid #dfe3f0" }}
          >
            <span
              style={{
                fontSize: "16px",
                fontWeight: "var(--font-weight-semibold)",
                color: "#101019",
                fontFamily: "'Avenir', sans-serif",
                fontFeatureSettings: "'lnum', 'pnum'",
                lineHeight: "1.5",
              }}
            >
              {selHour}：{selMinute}
            </span>
          </div>
          {/* Scroll columns */}
          <div className="flex flex-1">
            <div style={{ borderRight: "1px solid #e9ecf5" }}>
              <TimeScrollColumn items={hours} selected={selHour} onSelect={setSelHour} />
            </div>
            <TimeScrollColumn items={minutes} selected={selMinute} onSelect={setSelMinute} />
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div
        className="flex items-center justify-between px-[20px] py-[12px]"
        style={{ borderTop: "1px solid #e9ecf5" }}
      >
        {/* Left: Cancel button as rounded outline */}
        <button
          onClick={handleCancel}
          className="cursor-pointer rounded-[18px] px-[20px] py-[5px] bg-white transition-colors hover:bg-[#f8f9fc]"
          style={{ border: "1px solid #dfe3f0" }}
        >
          <span style={{ fontSize: "14px", fontWeight: "var(--font-weight-medium)", color: "#444963", lineHeight: "1.5", fontFamily: "'Alibaba PuHuiTi 3.0', sans-serif" }}>
            取消
          </span>
        </button>

        {/* Right: Now button + Confirm */}
        <div className="flex items-center gap-[12px]">
          {showNowButton && (
            <button
              onClick={handleNowClick}
              className="cursor-pointer rounded-[18px] px-[20px] py-[5px] bg-white transition-colors hover:bg-[#f8f9fc]"
              style={{ border: "1px solid #6574fc" }}
            >
              <span style={{ fontSize: "14px", fontWeight: "var(--font-weight-medium)", color: "#6574fc", lineHeight: "1.5", fontFamily: "'Alibaba PuHuiTi 3.0', sans-serif" }}>
                {nowButtonLabel}
              </span>
            </button>
          )}
          <button
            onClick={handleConfirm}
            className="border-none cursor-pointer rounded-[18px] px-[24px] py-[6px] transition-colors hover:opacity-90"
            style={{ backgroundColor: "#6574fc" }}
          >
            <span style={{ fontSize: "14px", fontWeight: "var(--font-weight-medium)", color: "white", lineHeight: "1.5", fontFamily: "'Alibaba PuHuiTi 3.0', sans-serif" }}>
              确定
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  if (hideTrigger) {
    return <>{dropdownContent}</>;
  }

  return (
    <div className="relative" ref={ref}>
      {/* Input trigger */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full relative bg-white rounded-[6px] cursor-pointer flex items-center"
        style={{ border: "none", padding: 0 }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none rounded-[6px]"
          style={{ border: "1px solid #cfd5e8" }}
        />
        <div className="flex items-center px-[12px] py-[5px] w-full">
          <span
            className="flex-1 text-left"
            style={{
              fontSize: "14px",
              fontWeight: "var(--font-weight-regular)",
              color: shownText ? "#101019" : "#abb4d1",
              lineHeight: "1.5",
              fontFamily: "'Alibaba PuHuiTi 3.0', sans-serif",
            }}
          >
            {shownText || placeholder}
          </span>
          <div className="shrink-0 w-[14px] h-[14px]">
            <svg className="block w-full h-full" fill="none" viewBox="0 0 14 14">
              <g clipPath="url(#clip_dt_cal)">
                <path clipRule="evenodd" d={publishSvgPaths.p36936200} fill="#646B8A" fillRule="evenodd" />
              </g>
              <defs>
                <clipPath id="clip_dt_cal"><rect fill="white" height="14" width="14" /></clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </button>

      {open && createPortal(
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.15)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          {dropdownContent}
        </div>,
        document.body
      )}
    </div>
  );
}