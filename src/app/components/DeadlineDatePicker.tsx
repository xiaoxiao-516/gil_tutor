import { useState, useMemo } from "react";
import calendarSvgPaths from "../../imports/svg-aid51fiwv2";

const WEEKDAYS = ["日", "一", "二", "三", "四", "五", "六"];
const PRESETS = [
  { label: "最近7天", days: 7 },
  { label: "最近两周", days: 14 },
  { label: "1个月内", days: 30 },
];

function getMonthData(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevDays = new Date(year, month, 0).getDate();

  const cells: { day: number; currentMonth: boolean }[] = [];
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: prevDays - i, currentMonth: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, currentMonth: true });
  }
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, currentMonth: false });
  }
  return cells;
}

function formatDate(d: Date) {
  return `${d.getFullYear()}年${String(d.getMonth() + 1).padStart(2, "0")}月${String(d.getDate()).padStart(2, "0")}日`;
}

interface Props {
  onConfirm: (dateStr: string) => void;
  onCancel: () => void;
  initialDate?: string;
}

export function DeadlineDatePicker({ onConfirm, onCancel, initialDate }: Props) {
  const today = new Date();
  const todayKey = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

  const [baseYear, setBaseYear] = useState(today.getFullYear());
  const [baseMonth, setBaseMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    initialDate ? (() => {
      // try parse "YYYY年MM月DD日"
      const m = initialDate.match(/(\d{4})年(\d{2})月(\d{2})日/);
      return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null;
    })() : null
  );

  const nextYear = baseMonth === 11 ? baseYear + 1 : baseYear;
  const nextMonth = baseMonth === 11 ? 0 : baseMonth + 1;

  const leftCells = useMemo(() => getMonthData(baseYear, baseMonth), [baseYear, baseMonth]);
  const rightCells = useMemo(() => getMonthData(nextYear, nextMonth), [nextYear, nextMonth]);

  const goBackMonth = () => {
    if (baseMonth === 0) { setBaseYear(baseYear - 1); setBaseMonth(11); }
    else setBaseMonth(baseMonth - 1);
  };
  const goForwardMonth = () => {
    if (baseMonth === 11) { setBaseYear(baseYear + 1); setBaseMonth(0); }
    else setBaseMonth(baseMonth + 1);
  };
  const goBackYear = () => setBaseYear(baseYear - 1);
  const goForwardYear = () => setBaseYear(baseYear + 1);

  const handlePreset = (days: number) => {
    const d = new Date();
    d.setDate(d.getDate() + days);
    setSelectedDate(d);
    setBaseYear(d.getFullYear());
    setBaseMonth(d.getMonth() === 0 ? 11 : d.getMonth() - 1);
    if (d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear()) {
      setBaseYear(today.getFullYear());
      setBaseMonth(today.getMonth());
    }
  };

  const isSelected = (year: number, month: number, day: number) => {
    if (!selectedDate) return false;
    return selectedDate.getFullYear() === year && selectedDate.getMonth() === month && selectedDate.getDate() === day;
  };

  const isToday = (year: number, month: number, day: number) => {
    return todayKey === `${year}-${month}-${day}`;
  };

  const renderMonth = (year: number, month: number, cells: { day: number; currentMonth: boolean }[]) => {
    const rows: { day: number; currentMonth: boolean }[][] = [];
    for (let i = 0; i < cells.length; i += 7) {
      rows.push(cells.slice(i, i + 7));
    }
    // Trim trailing empty rows
    while (rows.length > 0 && rows[rows.length - 1].every(c => !c.currentMonth)) {
      // keep at least one trailing row if it has next month days
      break;
    }

    return (
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Month grid */}
        <div className="px-[16px] py-[16px] flex flex-col gap-[4px]" style={{ borderRight: "0.5px solid #e9ecf5" }}>
          {/* Weekday header */}
          <div className="flex">
            {WEEKDAYS.map((w) => (
              <div key={w} className="flex-1 h-[36px] flex items-center justify-center">
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "var(--font-weight-heavy, 900)",
                    color: "#838bab",
                    lineHeight: "1.5",
                    fontFamily: "'Avenir', 'Noto Sans JP', sans-serif",
                    fontFeatureSettings: "'lnum', 'pnum'",
                  }}
                >
                  {w}
                </span>
              </div>
            ))}
          </div>
          {/* Day rows */}
          {rows.map((row, ri) => (
            <div key={ri} className="flex">
              {row.map((cell, ci) => {
                const cellMonth = cell.currentMonth ? month : (cell.day > 15 ? (month === 0 ? 11 : month - 1) : (month === 11 ? 0 : month + 1));
                const cellYear = cell.currentMonth ? year : (cell.day > 15 ? (month === 0 ? year - 1 : year) : (month === 11 ? year + 1 : year));
                const selected = isSelected(cellYear, cellMonth, cell.day);
                const isTodayCell = isToday(cellYear, cellMonth, cell.day);

                return (
                  <div
                    key={ci}
                    className="flex-1 h-[36px] flex items-center justify-center cursor-pointer"
                    onClick={() => {
                      if (cell.currentMonth) {
                        setSelectedDate(new Date(year, month, cell.day));
                      }
                    }}
                  >
                    <div className="relative flex flex-col items-center justify-center">
                      <div
                        className="flex items-center justify-center rounded-[16px] transition-colors"
                        style={{
                          width: "28px",
                          height: "28px",
                          backgroundColor: selected ? "#6574fc" : undefined,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            fontWeight: "var(--font-weight-heavy, 900)",
                            color: selected ? "white" : cell.currentMonth ? "#444963" : "#abb4d1",
                            lineHeight: "1.5",
                            fontFamily: "'Avenir', sans-serif",
                            fontFeatureSettings: "'lnum', 'pnum'",
                          }}
                        >
                          {cell.day}
                        </span>
                      </div>
                      {/* Today dot */}
                      {isTodayCell && cell.currentMonth && (
                        <div className="absolute" style={{ bottom: "-2px" }}>
                          <svg width="4" height="4" viewBox="0 0 4 4" fill="none">
                            <circle cx="2" cy="2" r="2" fill="#6574fc" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className="flex overflow-hidden rounded-[24px]"
      style={{ boxShadow: "0px 12px 60px 0px rgba(171,180,209,0.3)" }}
    >
      {/* Left sidebar - presets */}
      <div
        className="shrink-0 w-[131px] flex flex-col gap-[20px] p-[32px]"
        style={{ backgroundColor: "#f4f7fe" }}
      >
        {PRESETS.map((preset) => (
          <button
            key={preset.label}
            onClick={() => handlePreset(preset.days)}
            className="bg-transparent border-none cursor-pointer p-0 text-left transition-colors hover:opacity-70"
            style={{
              fontSize: "14px",
              fontWeight: "var(--font-weight-regular)",
              color: "#444963",
              lineHeight: "1.5",
              fontFamily: "var(--font-family-base, 'DFP King Gothic GB Medium', sans-serif)",
            }}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Calendar area */}
      <div className="flex flex-col bg-white">
        <div className="flex">
          {/* Left month */}
          <div className="flex flex-col w-[320px]">
            {/* Header */}
            <div className="flex items-center justify-between p-[20px]">
              <div className="flex gap-[8px] items-center shrink-0">
                {/* Double left arrow (year back) */}
                <button onClick={goBackYear} className="shrink-0 flex items-center justify-center cursor-pointer bg-transparent border-none p-0 rounded-[3px] hover:bg-[#f4f7fe] transition-colors">
                  <div className="relative shrink-0 w-[12px] h-[12px]">
                    <svg className="block w-full h-full" fill="none" viewBox="0 0 12 12">
                      <path d={calendarSvgPaths.p3f689400} fill="#444963" />
                      <path d={calendarSvgPaths.p1df14e80} fill="#444963" />
                    </svg>
                  </div>
                </button>
                {/* Single left arrow (month back) */}
                <button onClick={goBackMonth} className="shrink-0 flex items-center justify-center cursor-pointer bg-transparent border-none p-0 rounded-[3px] hover:bg-[#f4f7fe] transition-colors">
                  <div className="relative shrink-0 w-[12px] h-[12px]">
                    <svg className="block w-full h-full" fill="none" viewBox="0 0 12 12">
                      <path clipRule="evenodd" d={calendarSvgPaths.p38acaf00} fill="#444963" fillRule="evenodd" />
                    </svg>
                  </div>
                </button>
              </div>
              <div className="flex gap-[4px] items-center">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "var(--font-weight-semibold)",
                    color: "#202224",
                    lineHeight: "1.5",
                  }}
                >
                  {baseYear}年
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "var(--font-weight-medium)",
                    color: "#101019",
                    lineHeight: "22px",
                  }}
                >
                  –
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "var(--font-weight-semibold)",
                    color: "#202224",
                    lineHeight: "1.5",
                  }}
                >
                  {String(baseMonth + 1).padStart(2, "0")}月
                </span>
              </div>
              <div className="w-[32px]" />
            </div>
            {renderMonth(baseYear, baseMonth, leftCells)}
          </div>

          {/* Right month */}
          <div className="flex flex-col w-[320px]">
            {/* Header */}
            <div className="flex items-center justify-between p-[20px]">
              <div className="w-[32px]" />
              <div className="flex gap-[4px] items-center">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "var(--font-weight-semibold)",
                    color: "#202224",
                    lineHeight: "1.5",
                  }}
                >
                  {nextYear}年
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "var(--font-weight-medium)",
                    color: "#101019",
                    lineHeight: "22px",
                  }}
                >
                  –
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "var(--font-weight-semibold)",
                    color: "#202224",
                    lineHeight: "1.5",
                  }}
                >
                  {String(nextMonth + 1).padStart(2, "0")}月
                </span>
              </div>
              <div className="flex gap-[8px] items-center shrink-0">
                {/* Single right arrow (month forward) */}
                <button onClick={goForwardMonth} className="shrink-0 flex items-center justify-center cursor-pointer bg-transparent border-none p-0 rounded-[3px] hover:bg-[#f4f7fe] transition-colors">
                  <div className="relative shrink-0 w-[12px] h-[12px]">
                    <svg className="block w-full h-full" fill="none" viewBox="0 0 12 12">
                      <path clipRule="evenodd" d={calendarSvgPaths.p180e7c00} fill="#444963" fillRule="evenodd" />
                    </svg>
                  </div>
                </button>
                {/* Double right arrow (year forward) */}
                <button onClick={goForwardYear} className="shrink-0 flex items-center justify-center cursor-pointer bg-transparent border-none p-0 rounded-[3px] hover:bg-[#f4f7fe] transition-colors">
                  <div className="relative shrink-0 w-[12px] h-[12px]">
                    <svg className="block w-full h-full" fill="none" viewBox="0 0 12 12">
                      <path d={calendarSvgPaths.p356ace80} fill="#444963" />
                      <path d={calendarSvgPaths.p363968b2} fill="#444963" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            {renderMonth(nextYear, nextMonth, rightCells)}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex items-center justify-between px-[20px] py-[16px]"
          style={{ borderTop: "1px solid #e9ecf5" }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: "var(--font-weight-regular)",
              color: "#444963",
              lineHeight: "1.5",
            }}
          >
            {selectedDate ? formatDate(selectedDate) : "请选择日期"}
          </span>
          <div className="flex gap-[16px] items-center">
            <button
              onClick={onCancel}
              className="bg-transparent border-none cursor-pointer p-0 transition-colors hover:opacity-70"
              style={{
                fontSize: "14px",
                fontWeight: "var(--font-weight-regular)",
                color: "#838bab",
                lineHeight: "1.5",
              }}
            >
              取消
            </button>
            <button
              onClick={() => {
                if (selectedDate) {
                  onConfirm(formatDate(selectedDate));
                }
              }}
              className="flex h-[32px] px-[20px] items-center justify-center rounded-[18px] border-none cursor-pointer transition-colors hover:opacity-90"
              style={{
                fontSize: "14px",
                fontWeight: "var(--font-weight-medium)",
                color: "white",
                backgroundColor: "#6574fc",
              }}
            >
              确定
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
