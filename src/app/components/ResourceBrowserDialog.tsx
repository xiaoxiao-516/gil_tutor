import { useState, useMemo, useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import svgPaths from "../../imports/svg-4u36ajrmto";
import { showToast } from "./CustomToast";

/* ─── File type icons ─── */
function PdfIcon() {
  return (
    <div className="relative shrink-0 w-[20px] h-[24px]">
      <svg width="20" height="24" viewBox="0 0 16 20" fill="none">
        <path d={svgPaths.p284f6980} fill="#E85B5B" />
        <path d={svgPaths.p2dd3a480} fill="#C44444" transform="translate(11, 0)" />
        <text x="8" y="15" textAnchor="middle" fill="white" fontSize="6" fontFamily="Alibaba PuHuiTi 3.0, sans-serif" fontWeight="600">PDF</text>
      </svg>
    </div>
  );
}

function FolderIcon() {
  return (
    <div className="relative shrink-0 w-[20px] h-[20px]">
      <svg width="20" height="20" viewBox="0 0 18 19" fill="none">
        <path d={svgPaths.p6a1ce00} fill="url(#folder_top)" />
        <path d={svgPaths.p34e15300} fill="url(#folder_bottom)" />
        <defs>
          <linearGradient id="folder_top" x1="9" y1="0" x2="9" y2="7" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFB800" /><stop offset="1" stopColor="#FF9E00" />
          </linearGradient>
          <linearGradient id="folder_bottom" x1="9" y1="6.5" x2="9" y2="19" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFCD38" /><stop offset="1" stopColor="#FFCD38" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function XlsIcon() {
  return (
    <div className="relative shrink-0 w-[20px] h-[24px]">
      <svg width="20" height="24" viewBox="0 0 16 20" fill="none">
        <path d={svgPaths.p284f6980} fill="#4CAF50" />
        <path d={svgPaths.p2dd3a480} fill="#388E3C" transform="translate(11, 0)" />
        <text x="8" y="15" textAnchor="middle" fill="white" fontSize="5" fontFamily="Alibaba PuHuiTi 3.0, sans-serif" fontWeight="600">XLS</text>
      </svg>
    </div>
  );
}

function PngIcon() {
  return (
    <div className="relative shrink-0 w-[20px] h-[24px]">
      <svg width="20" height="24" viewBox="0 0 16 20" fill="none">
        <path d={svgPaths.p284f6980} fill="#7B61FF" />
        <path d={svgPaths.p2dd3a480} fill="#5B3FD4" transform="translate(11, 0)" />
        <text x="8" y="15" textAnchor="middle" fill="white" fontSize="5" fontFamily="Alibaba PuHuiTi 3.0, sans-serif" fontWeight="600">PNG</text>
      </svg>
    </div>
  );
}

function Mp3Icon() {
  return (
    <div className="relative shrink-0 w-[20px] h-[24px]">
      <svg width="20" height="24" viewBox="0 0 16 20" fill="none">
        <path d={svgPaths.p284f6980} fill="#FF9800" />
        <path d={svgPaths.p2dd3a480} fill="#E68A00" transform="translate(11, 0)" />
        <text x="8" y="15" textAnchor="middle" fill="white" fontSize="5" fontFamily="Alibaba PuHuiTi 3.0, sans-serif" fontWeight="600">MP3</text>
      </svg>
    </div>
  );
}

/* ─── Star icons ─── */
function StarFilled() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 cursor-pointer">
      <path clipRule="evenodd" d={svgPaths.p1d713300} fill="#FA9524" fillRule="evenodd" />
    </svg>
  );
}

function StarOutline() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 cursor-pointer">
      <path clipRule="evenodd" d={svgPaths.p2072d200} fill="#838BAB" fillRule="evenodd" />
    </svg>
  );
}

/* ─── More icon ─── */
function MoreIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 cursor-pointer">
      <g transform="translate(0.583, 5.833)">
        <path d={svgPaths.pb889000} fill="#4A4FED" />
        <path d={svgPaths.p18e20380} fill="#4A4FED" />
        <path d={svgPaths.p1c48d200} fill="#4A4FED" />
      </g>
    </svg>
  );
}

/* ─── Data types ─── */
interface ResourceItem {
  id: string;
  name: string;
  type: "pdf" | "folder" | "xls" | "png" | "mp3";
  grade: string;
  updateDate: string;
  starred: boolean;
  actions: ("打开" | "加入" | "分享" | "操作2")[];
}

const mockResources: ResourceItem[] = [
  { id: "r1", name: "高三数学复习单元试卷集", type: "pdf", grade: "高一，高二，高三", updateDate: "2025-01-30", starred: true, actions: ["打开", "分享"] },
  { id: "r2", name: "高三数学复习单元试卷集", type: "folder", grade: "高二，高三", updateDate: "2025-01-30", starred: false, actions: ["打开", "分享"] },
  { id: "r3", name: "高三数学复习单元试卷集", type: "xls", grade: "高一", updateDate: "2025-01-30", starred: false, actions: ["加入", "分享"] },
  { id: "r4", name: "高三数学复习单元试卷集", type: "png", grade: "高二", updateDate: "2025-01-30", starred: false, actions: ["加入", "分享"] },
  { id: "r5", name: "高三数学复习单元试卷集", type: "mp3", grade: "高一", updateDate: "2025-01-30", starred: false, actions: ["加入", "分享"] },
  { id: "r6", name: "高三数学复习单元试卷集", type: "pdf", grade: "高一", updateDate: "2020-01-30", starred: false, actions: ["加入", "操作2"] },
  { id: "r7", name: "高三数学复习单元试卷集", type: "pdf", grade: "", updateDate: "2020-01-30", starred: false, actions: ["加入", "分享"] },
  { id: "r8", name: "高三数学复习单元试卷集", type: "pdf", grade: "", updateDate: "", starred: false, actions: ["加入", "分享"] },
];

const gradeOptions = ["全部", "高一", "高二", "高三"];
const subjectOptions = ["全部", "数学", "英语", "物理"];

const fileTypeIcon: Record<string, React.ReactNode> = {
  pdf: <PdfIcon />,
  folder: <FolderIcon />,
  xls: <XlsIcon />,
  png: <PngIcon />,
  mp3: <Mp3Icon />,
};

/* ─── Filter dropdown ─── */
function FilterDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="flex items-center gap-[4px] cursor-pointer bg-transparent border-none px-0 py-0"
        style={{
          fontSize: "14px",
          fontWeight: "var(--font-weight-regular)",
          color: "#444963",
        }}
        onClick={() => setOpen(!open)}
      >
        {value === "全部" ? label : value}
        <svg width="14" height="14" viewBox="0 0 9.2 4.4" fill="none" className="shrink-0">
          <path clipRule="evenodd" d={svgPaths.p1adb3300} fill="#444963" fillRule="evenodd" />
        </svg>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div
            className="absolute top-full mt-1 left-0 bg-white flex flex-col gap-[2px] p-[4px] rounded-[12px] z-20 min-w-[100px]"
            style={{ boxShadow: "0px 16px 56px 0px rgba(16,18,25,0.08)" }}
          >
            {options.map((opt) => (
              <button
                key={opt}
                className="w-full px-[16px] py-[10px] text-left bg-white rounded-[10px] cursor-pointer border-none transition-colors hover:bg-[#ebf1ff]"
                style={{
                  fontSize: "14px",
                  fontWeight: opt === value ? "var(--font-weight-medium)" : "var(--font-weight-regular)",
                  color: opt === value ? "#4a4fed" : "#444963",
                }}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ─── Main dialog ─── */
export function ResourceBrowserDialog({
  open,
  onClose,
  onAddResource,
  pickPublicMode = false,
  onPickPublicConfirm,
}: {
  open: boolean;
  onClose: () => void;
  onAddResource?: (resource: { id: string; name: string; type: string }) => void;
  /** 布置页「手动添加 → 资源」：仅公共资源列表，底部「确认」加入清单（侧栏进资源中心仍为整页，不用此模式） */
  pickPublicMode?: boolean;
  onPickPublicConfirm?: (items: { id: string; name: string; type: string }[]) => void;
}) {
  const [activeTab, setActiveTab] = useState<"my" | "public">("my");
  const [searchQuery, setSearchQuery] = useState("");
  const [gradeFilter, setGradeFilter] = useState("全部");
  const [subjectFilter, setSubjectFilter] = useState("全部");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [starredMap, setStarredMap] = useState<Record<string, boolean>>(
    Object.fromEntries(mockResources.map((r) => [r.id, r.starred]))
  );

  useEffect(() => {
    if (open) {
      setSelectedIds(new Set());
      setSearchQuery("");
      setGradeFilter("全部");
      setSubjectFilter("全部");
      if (!pickPublicMode) setActiveTab("my");
    }
  }, [open, pickPublicMode]);

  const filteredResources = useMemo(() => {
    return mockResources.filter((r) => {
      if (searchQuery && !r.name.includes(searchQuery)) return false;
      if (gradeFilter !== "全部" && !r.grade.includes(gradeFilter)) return false;
      return true;
    });
  }, [searchQuery, gradeFilter]);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (selectedIds.size === filteredResources.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredResources.map((r) => r.id)));
    }
  };

  const toggleStar = (id: string) => {
    setStarredMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAdd = (resource: ResourceItem) => {
    onAddResource?.({ id: resource.id, name: resource.name, type: resource.type });
    showToast(`已加入「${resource.name}」`, "success");
  };

  const handlePickPublicConfirm = () => {
    if (selectedIds.size === 0) {
      showToast("请先选择资源", "warning");
      return;
    }
    const items = mockResources
      .filter((r) => selectedIds.has(r.id))
      .map((r) => ({ id: r.id, name: r.name, type: r.type }));
    onPickPublicConfirm?.(items);
    onClose();
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="flex max-h-[80vh] min-h-0 w-[860px] flex-col rounded-[16px] bg-white"
            style={{ boxShadow: "0px 8px 32px rgba(0,0,0,0.12)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pb-4 pt-5" style={{ borderBottom: "1px solid var(--border)" }}>
              <div className="flex items-center gap-6">
                {pickPublicMode ? (
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "var(--font-weight-semibold)",
                      color: "var(--foreground)",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    公共资源
                  </p>
                ) : (
                  <>
                    <button
                      className="relative cursor-pointer border-none bg-transparent px-0 pb-1"
                      style={{
                        fontSize: "16px",
                        fontWeight: activeTab === "my" ? "var(--font-weight-semibold)" : "var(--font-weight-regular)",
                        color: activeTab === "my" ? "var(--foreground)" : "var(--muted-foreground)",
                      }}
                      type="button"
                      onClick={() => setActiveTab("my")}
                    >
                      我的资源
                      {activeTab === "my" && (
                        <div className="absolute bottom-0 left-1/2 h-[4px] w-[12px] -translate-x-1/2 rounded-[2px] bg-[#4a4fed]" />
                      )}
                    </button>
                    <button
                      className="relative cursor-pointer border-none bg-transparent px-0 pb-1"
                      style={{
                        fontSize: "16px",
                        fontWeight: activeTab === "public" ? "var(--font-weight-semibold)" : "var(--font-weight-regular)",
                        color: activeTab === "public" ? "var(--sidebar-primary)" : "var(--muted-foreground)",
                      }}
                      type="button"
                      onClick={() => setActiveTab("public")}
                    >
                      公共资源
                      {activeTab === "public" && (
                        <div className="absolute bottom-0 left-1/2 h-[4px] w-[12px] -translate-x-1/2 rounded-[2px] bg-[#4a4fed]" />
                      )}
                    </button>
                  </>
                )}
              </div>

              {/* Search */}
              <div className="flex items-center gap-4">
                <div
                  className="flex h-[32px] items-center gap-[6px] rounded-[16px] bg-white px-3"
                  style={{ border: "1px solid #cfd5e8" }}
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={pickPublicMode ? "在公共资源中搜索" : "在我的资源中搜索"}
                    className="w-[160px] border-none bg-transparent outline-none"
                    style={{
                      fontSize: "14px",
                      fontWeight: "var(--font-weight-regular)",
                      color: "var(--foreground)",
                    }}
                  />
                  <svg width="20" height="20" viewBox="0 0 15.4 15.4" fill="none" className="shrink-0">
                    <path clipRule="evenodd" d={svgPaths.p38519180} fill="#838BAB" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p2c8387f0} fill="#838BAB" fillRule="evenodd" />
                  </svg>
                </div>
                <button
                  className="flex items-center justify-center w-[28px] h-[28px] rounded-full bg-transparent border-none cursor-pointer hover:bg-[#f4f7fe] transition-colors"
                  onClick={onClose}
                >
                  <X size={18} style={{ color: "var(--muted-foreground)" }} />
                </button>
              </div>
            </div>

            {/* Filter bar */}
            <div className="flex items-center gap-5 px-6 py-3" style={{ borderBottom: "0.5px solid #e1e5f2" }}>
              <FilterDropdown label="年级" options={gradeOptions} value={gradeFilter} onChange={setGradeFilter} />
              <FilterDropdown label="来源" options={["全部", "自创", "共享"]} value="全部" onChange={() => {}} />
              <FilterDropdown label="学科" options={subjectOptions} value={subjectFilter} onChange={setSubjectFilter} />
            </div>

            {/* Table */}
            <div className="min-h-0 flex-1 overflow-y-auto">
              {/* Table header */}
              <div className="sticky top-0 z-10 flex items-center bg-[#f4f7fe]">
                <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center">
                  <div
                    className="w-[16px] h-[16px] rounded-[3px] flex items-center justify-center cursor-pointer"
                    style={{
                      backgroundColor: selectedIds.size === filteredResources.length && filteredResources.length > 0 ? "var(--sidebar-primary)" : "white",
                      border: selectedIds.size === filteredResources.length && filteredResources.length > 0 ? "none" : "1px solid #cfd5e8",
                    }}
                    onClick={toggleAll}
                  >
                    {selectedIds.size === filteredResources.length && filteredResources.length > 0 && (
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M0.75001 4.17867L3.00001 6.7501L6.75001 0.7501" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="flex-1 min-w-0 px-4 py-3">
                  <span style={{ fontSize: "14px", fontWeight: "var(--font-weight-regular)", color: "#444963" }}>名称</span>
                </div>
                <div className="w-[120px] shrink-0 px-4 py-3">
                  <span style={{ fontSize: "14px", fontWeight: "var(--font-weight-regular)", color: "#444963" }}>年级</span>
                </div>
                <div className="w-[120px] shrink-0 px-4 py-3">
                  <span style={{ fontSize: "14px", fontWeight: "var(--font-weight-regular)", color: "#444963" }}>更新日期</span>
                </div>
                {!pickPublicMode ? (
                  <div className="w-[200px] shrink-0 px-4 py-3">
                    <span style={{ fontSize: "14px", fontWeight: "var(--font-weight-regular)", color: "#444963" }}>操作</span>
                  </div>
                ) : null}
              </div>

              {/* Table body */}
              {filteredResources.map((item, idx) => {
                const isSelected = selectedIds.has(item.id);
                const rowBg = idx % 2 === 0 ? "white" : "#f4f7fe";
                return (
                  <div
                    key={item.id}
                    className="flex items-center relative transition-colors hover:bg-[#eef1fb]"
                    style={{ backgroundColor: rowBg }}
                  >
                    {/* Checkbox */}
                    <div className="flex items-center justify-center w-[44px] h-[52px] shrink-0">
                      <div
                        className="w-[14px] h-[14px] rounded-[3px] flex items-center justify-center cursor-pointer"
                        style={{
                          backgroundColor: isSelected ? "var(--sidebar-primary)" : "white",
                          border: isSelected ? "none" : "1px solid #cfd5e8",
                        }}
                        onClick={() => toggleSelect(item.id)}
                      >
                        {isSelected && (
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M0.75001 4.17867L3.00001 6.7501L6.75001 0.7501" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Name */}
                    <div className="flex-1 min-w-0 flex items-center gap-2 px-4 py-3">
                      {fileTypeIcon[item.type]}
                      <span style={{ fontSize: "14px", fontWeight: "var(--font-weight-regular)", color: "#101019" }}>
                        {item.name}
                      </span>
                    </div>

                    {/* Grade */}
                    <div className="w-[120px] shrink-0 px-4 py-3">
                      <span style={{ fontSize: "14px", fontWeight: "var(--font-weight-regular)", color: "#101019" }}>
                        {item.grade}
                      </span>
                    </div>

                    {/* Update date */}
                    <div className="w-[120px] shrink-0 px-4 py-3">
                      <span style={{ fontSize: "14px", fontWeight: "var(--font-weight-regular)", color: "#101019" }}>
                        {item.updateDate}
                      </span>
                    </div>

                    {!pickPublicMode ? (
                      <div className="flex w-[200px] shrink-0 items-center gap-6 px-4 py-3">
                        <span className="cursor-pointer" onClick={() => toggleStar(item.id)}>
                          {starredMap[item.id] ? <StarFilled /> : <StarOutline />}
                        </span>
                        {item.actions.map((action) => (
                          <span
                            key={action}
                            className="cursor-pointer"
                            style={{ fontSize: "14px", fontWeight: "var(--font-weight-regular)", color: "#4a4fed" }}
                            onClick={() => {
                              if (action === "加入") handleAdd(item);
                              else showToast(`${action}功能开发中`, "info");
                            }}
                          >
                            {action}
                          </span>
                        ))}
                        <MoreIcon />
                      </div>
                    ) : null}

                    {/* Bottom border */}
                    <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0px -0.5px 0px 0px #e1e5f2" }} />
                  </div>
                );
              })}
            </div>

            {pickPublicMode ? (
              <div
                className="flex shrink-0 items-center justify-end gap-3 border-t border-solid px-6 py-4"
                style={{ borderColor: "#e9ecf5" }}
              >
                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-9 w-[96px] cursor-pointer items-center justify-center rounded-[18px] bg-white transition-colors hover:bg-[#f8f9fc]"
                  style={{ border: "1px solid #dfe3f0" }}
                >
                  <span style={{ fontSize: "14px", fontWeight: "var(--font-weight-medium)", color: "#444963", lineHeight: "1.5" }}>
                    取消
                  </span>
                </button>
                <button
                  type="button"
                  onClick={handlePickPublicConfirm}
                  className="flex h-9 min-w-[96px] cursor-pointer items-center justify-center rounded-[18px] border-none px-5 transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#6574fc" }}
                >
                  <span style={{ fontSize: "14px", fontWeight: "var(--font-weight-medium)", color: "white", lineHeight: "1.5" }}>
                    确认
                  </span>
                </button>
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}