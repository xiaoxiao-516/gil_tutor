import { useState, useRef, useEffect, useCallback } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import svgPaths from "../../imports/svg-pqmbevi4jn";

// --- Helpers ---
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay(); // 0=Sun
}
function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function formatDate(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}年${m}月${dd}日`;
}
function formatISO(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
}

const WEEKDAYS = ["日", "一", "二", "三", "四", "五", "六"];

interface DatePickerProps {
  value: string; // ISO yyyy-MM-dd
  onChange: (value: string) => void;
  placeholder?: string;
}

export function DatePicker({ value, onChange, placeholder = "请选择日期" }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState(() => {
    if (value) return new Date(value + "T00:00:00");
    return new Date();
  });
  const [tempSelected, setTempSelected] = useState<Date | null>(() => {
    if (value) return new Date(value + "T00:00:00");
    return null;
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const today = new Date();

  // Sync tempSelected when value changes externally
  useEffect(() => {
    if (value) {
      setTempSelected(new Date(value + "T00:00:00"));
    }
  }, [value]);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const leftMonth = viewDate.getMonth();
  const leftYear = viewDate.getFullYear();
  const rightMonth = (leftMonth + 1) % 12;
  const rightYear = leftMonth === 11 ? leftYear + 1 : leftYear;

  const prevMonth = () => setViewDate(new Date(leftYear, leftMonth - 1, 1));
  const nextMonth = () => setViewDate(new Date(leftYear, leftMonth + 1, 1));
  const prevYear = () => setViewDate(new Date(leftYear - 1, leftMonth, 1));
  const nextYear = () => setViewDate(new Date(leftYear + 1, leftMonth, 1));

  const handleConfirm = () => {
    if (tempSelected) {
      onChange(formatISO(tempSelected));
    }
    setOpen(false);
  };
  const handleCancel = () => {
    // Reset temp to current value
    if (value) setTempSelected(new Date(value + "T00:00:00"));
    else setTempSelected(null);
    setOpen(false);
  };

  const handlePreset = (days: number) => {
    const d = new Date();
    d.setDate(d.getDate() + days);
    setTempSelected(d);
    setViewDate(new Date(d.getFullYear(), d.getMonth(), 1));
  };

  const displayText = value
    ? formatDate(new Date(value + "T00:00:00"))
    : placeholder;

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => {
          if (!open && value) {
            const d = new Date(value + "T00:00:00");
            setViewDate(new Date(d.getFullYear(), d.getMonth(), 1));
          }
          setOpen(!open);
        }}
        className={`flex items-center gap-2 px-3 py-[7px] bg-input-background border rounded-[6px] transition-colors cursor-pointer w-[200px] ${
          open ? "border-primary" : "border-border hover:border-primary/40"
        }`}
        style={{
          fontSize: "var(--text-base)",
          fontWeight: "var(--font-weight-regular)",
          color: value ? "var(--card-foreground)" : "var(--muted-foreground)",
        }}
      >
        <span className="flex-1 text-left">{displayText}</span>
        <CalendarIcon size={14} className="shrink-0 text-muted-foreground" />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute top-full left-0 mt-1 bg-white rounded-[12px] shadow-lg border border-border/60 z-50 flex overflow-hidden w-[520px] lg:w-[600px] xl:w-[640px]"
        >
          {/* Left preset sidebar */}
          <div
            className="shrink-0 flex flex-col gap-4 lg:gap-5 p-5 lg:p-8"
            style={{ width: 110, backgroundColor: "#F4F7FE" }}
          >
            {[
              { label: "今天", days: 0 },
              { label: "明天", days: 1 },
              { label: "后天", days: 2 },
            ].map((preset) => (
              <button
                key={preset.label}
                onClick={() => handlePreset(preset.days)}
                className="text-left rounded-[4px] py-1 hover:text-primary transition-colors"
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-regular)",
                  color: "var(--card-foreground)",
                }}
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Calendar body */}
          <div className="flex-1 flex flex-col">
            {/* Two months side by side */}
            <div className="flex flex-1">
              {/* Left month */}
              <div className="flex-1 flex flex-col">
                <MonthHeader
                  year={leftYear}
                  month={leftMonth}
                  onPrevMonth={prevMonth}
                  onPrevYear={prevYear}
                  showNav="left"
                />
                <MonthGrid
                  year={leftYear}
                  month={leftMonth}
                  today={today}
                  selected={tempSelected}
                  onSelect={setTempSelected}
                />
              </div>
              {/* Right month */}
              <div className="flex-1 flex flex-col">
                <MonthHeader
                  year={rightYear}
                  month={rightMonth}
                  onNextMonth={nextMonth}
                  onNextYear={nextYear}
                  showNav="right"
                />
                <MonthGrid
                  year={rightYear}
                  month={rightMonth}
                  today={today}
                  selected={tempSelected}
                  onSelect={setTempSelected}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-border/40">
              <span
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-regular)",
                  color: "var(--card-foreground)",
                }}
              >
                {tempSelected ? formatDate(tempSelected) : "未选择"}
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCancel}
                  className="px-4 py-1.5 rounded-[6px] hover:bg-muted/30 transition-colors"
                  style={{
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-regular)",
                    color: "var(--primary)",
                  }}
                >
                  取消
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-5 py-1.5 bg-primary text-primary-foreground rounded-[6px] hover:opacity-90 transition-opacity"
                  style={{
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-medium)",
                  }}
                >
                  确定
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Month Header ---
function MonthHeader({
  year,
  month,
  onPrevMonth,
  onNextMonth,
  onPrevYear,
  onNextYear,
  showNav,
}: {
  year: number;
  month: number;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
  onPrevYear?: () => void;
  onNextYear?: () => void;
  showNav: "left" | "right";
}) {
  return (
    <div className="flex items-center justify-between px-5 py-4">
      <div className="flex items-center gap-2">
        {showNav === "left" && (
          <>
            <NavButton onClick={onPrevYear} pathD={svgPaths.p3f689400} pathD2={svgPaths.p1df14e80} double />
            <NavButton onClick={onPrevMonth} pathD={svgPaths.p38acaf00} />
          </>
        )}
      </div>
      <div className="flex items-center gap-1">
        <span
          style={{
            fontSize: "16px",
            fontWeight: "var(--font-weight-semibold)",
            color: "#101019",
            fontFamily: "'Alibaba PuHuiTi 3.0', sans-serif",
          }}
        >
          {year}年
        </span>
        <span
          style={{
            fontSize: "var(--text-base)",
            color: "#101019",
          }}
        >
          –
        </span>
        <span
          style={{
            fontSize: "16px",
            fontWeight: "var(--font-weight-semibold)",
            color: "#101019",
            fontFamily: "'Alibaba PuHuiTi 3.0', sans-serif",
          }}
        >
          {String(month + 1).padStart(2, "0")}月
        </span>
      </div>
      <div className="flex items-center gap-2">
        {showNav === "right" && (
          <>
            <NavButton onClick={onNextMonth} pathD={svgPaths.p180e7c00} />
            <NavButton onClick={onNextYear} pathD={svgPaths.p356ace80} pathD2={svgPaths.p363968b2} double />
          </>
        )}
      </div>
    </div>
  );
}

function NavButton({
  onClick,
  pathD,
  pathD2,
  double,
}: {
  onClick?: () => void;
  pathD: string;
  pathD2?: string;
  double?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-[20px] h-[20px] rounded hover:bg-muted/40 transition-colors"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d={pathD} fill="#646B8A" />
        {double && pathD2 && <path d={pathD2} fill="#646B8A" />}
      </svg>
    </button>
  );
}

// --- Month Grid ---
function MonthGrid({
  year,
  month,
  today,
  selected,
  onSelect,
}: {
  year: number;
  month: number;
  today: Date;
  selected: Date | null;
  onSelect: (d: Date) => void;
}) {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);

  // Previous month fill
  const prevMonthDays = getDaysInMonth(year, month - 1);
  const prevFill = Array.from({ length: firstDay }, (_, i) => ({
    day: prevMonthDays - firstDay + i + 1,
    isOtherMonth: true,
    date: new Date(year, month - 1, prevMonthDays - firstDay + i + 1),
  }));

  // Current month
  const currentDays = Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    isOtherMonth: false,
    date: new Date(year, month, i + 1),
  }));

  // Next month fill
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
  const nextFill = Array.from({ length: totalCells - firstDay - daysInMonth }, (_, i) => ({
    day: i + 1,
    isOtherMonth: true,
    date: new Date(year, month + 1, i + 1),
  }));

  const allDays = [...prevFill, ...currentDays, ...nextFill];
  const weeks: typeof allDays[] = [];
  for (let i = 0; i < allDays.length; i += 7) {
    weeks.push(allDays.slice(i, i + 7));
  }

  return (
    <div className="px-5 pb-3">
      {/* Weekday header */}
      <div className="grid grid-cols-7 mb-1">
        {WEEKDAYS.map((wd) => (
          <div
            key={wd}
            className="flex items-center justify-center h-[36px]"
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-regular)",
              color: "var(--muted-foreground)",
              fontFamily: "'Alibaba PuHuiTi 3.0', sans-serif",
            }}
          >
            {wd}
          </div>
        ))}
      </div>
      {/* Day grid */}
      {weeks.map((week, wi) => (
        <div key={wi} className="grid grid-cols-7">
          {week.map((cell, ci) => {
            const isToday = isSameDay(cell.date, today);
            const isSelected = selected ? isSameDay(cell.date, selected) : false;
            return (
              <div key={ci} className="flex flex-col items-center justify-center h-[36px] relative">
                <button
                  onClick={() => onSelect(cell.date)}
                  className={`flex items-center justify-center rounded-full transition-colors relative ${
                    isSelected
                      ? "bg-[#6574FC] text-white"
                      : cell.isOtherMonth
                      ? "text-[#ABB4D1] hover:bg-muted/30"
                      : "text-[#646B8A] hover:bg-muted/30"
                  }`}
                  style={{
                    width: isSelected ? 28 : 36,
                    height: isSelected ? 28 : 36,
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-regular)",
                    fontFamily: "'Alibaba PuHuiTi 3.0', sans-serif",
                    fontFeatureSettings: "'lnum', 'pnum'",
                  }}
                >
                  {cell.day}
                </button>
                {/* Today dot */}
                {isToday && !isSelected && (
                  <div className="absolute bottom-[2px]">
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none">
                      <circle cx="2" cy="2" r="2" fill="#6574FC" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}