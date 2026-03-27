import { useState, useRef, useEffect } from "react";

interface HeaderDropdownProps {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (val: string) => void;
}

export function HeaderDropdown({ label, value, options, onChange }: HeaderDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between h-[36px] w-[102px] px-4 rounded-[6px] cursor-pointer transition-colors hover:bg-[#F5F7FA]"
        style={{
          border: "1px solid #E9ECF5",
          backgroundColor: open ? "#F5F7FA" : "#ffffff",
        }}
      >
        <span
          style={{
            fontSize: "var(--text-base)",
            fontWeight: "var(--font-weight-regular)",
            color: "#101019",
          }}
        >
          {label}
        </span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          style={{
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="#646B8A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 top-[calc(100%+6px)] z-50 rounded-[12px] bg-white p-[4px] flex flex-col gap-[2px] min-w-[120px]"
          style={{ boxShadow: "0px 16px 56px rgba(16, 18, 25, 0.08)" }}
        >
          {options.map((opt) => {
            const isActive = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className="w-full text-left cursor-pointer transition-colors flex items-center"
                style={{
                  height: "40px",
                  padding: "0 16px",
                  fontSize: "var(--text-base)",
                  fontWeight: isActive ? "var(--font-weight-medium)" : "var(--font-weight-regular)",
                  color: isActive ? "var(--sidebar-primary)" : "#444963",
                  backgroundColor: isActive ? "#EBF1FF" : "white",
                  borderRadius: "8px",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.backgroundColor = "#F5F7FA";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.backgroundColor = "white";
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}