import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
// DiagnosisPage - Diagnosis Management
import { showToast } from "../components/CustomToast";
import { DiagnosisModal } from "../components/DiagnosisModal";
import { CustomSelect } from "../components/CustomSelect";
import { getDiagnosisPlan } from "../mock/schedulePlanMock";
import { Copy, FileText, CalendarDays, Ban, Search } from "lucide-react";
import svgPaginationArrow from "../../imports/svg-4gue8yfe2q";
import svgPaginationArrowRight from "../../imports/svg-zplh3qt6hx";
import svgPagination from "../../imports/svg-19pv0i3uah";
import svgCloseIcon from "../../imports/svg-fx843yhfwi";
import svgReset from "../../imports/svg-18hjbja5pw";
import svgSearchIcon from "../../imports/svg-kyeyr0z9t1";

interface DiagnosisRow {
  id: string;
  studentName: string;
  phone: string;
  grade: string;
  subject: string;
  chapter: string;
  chapterDetail: string;
  creator: string;
  createdAtTs: number;
  result: string;
  finishedAtTs: number | null;
  status: string;
  isUrlDeleted: boolean;
  rawUrl: string;
}

const subjects = ["英语", "数学", "物理"];
const grades = ["初一", "初二", "初三", "高一", "高二", "高三"];
const creators = ["李小明老师", "王晓彤老师", "陈子涵老师", "周嘉宁老师", "赵一帆老师"];
const chapters = [
  { short: "函数专题", detail: "人教版 必修一 · 函数专题 · 基础诊断包A" },
  { short: "阅读理解", detail: "人教版 必修一 · 阅读理解专项 · 进阶包B" },
  { short: "电学综合", detail: "人教版 必修二 · 电学综合 · 综合诊断包C" },
  { short: "文言文", detail: "人教版 必修一 · 文言文专项 · 文本理解包A" },
  { short: "几何证明", detail: "人教版 选择性必修一 · 几何证明 · 证明链路包" },
  { short: "力学基础", detail: "人教版 必修二 · 力学基础 · 受力分析包A" },
];
const statuses = ["未开始", "进行中", "已完成", "已作废"];
const studentNames = [
  "张子涵", "李雨桐", "王梓轩", "赵佳宁", "刘浩然", "陈思远", "黄语彤", "周梓晴",
  "吴嘉豪", "郑诗涵", "孙宇辰", "朱梦瑶", "马子墨", "胡可欣", "郭泽宇", "何欣怡",
  "高一诺", "林子昂", "罗诗雨", "梁嘉乐", "宋佳琪", "谢博文", "唐思语", "邓宇航",
  "冯若涵", "韩子轩", "曹依琳", "彭浩宇", "曾雨菲", "萧子辰",
];

const mockPhones = [
  "138****1234", "139****5678", "136****9012", "137****3456", "135****7890",
  "158****2345", "159****6789", "150****0123", "151****4567", "152****8901",
  "186****3210", "187****7654", "188****0987", "189****4321", "185****8765",
  "166****2109", "176****6543", "177****9876", "178****3210", "170****7654",
  "131****1098", "132****5432", "133****8766", "134****2100", "155****5434",
  "156****8768", "157****2102", "182****5436", "183****8770", "184****2104",
];

const PAGE_SIZE = 15;

function makeTime(offsetDay: number, hour: number) {
  const dt = new Date();
  dt.setDate(dt.getDate() - offsetDay);
  dt.setHours(hour, (offsetDay * 7) % 60, 0, 0);
  return dt;
}

function formatDateTime(ts: number | null) {
  if (!ts) return "-";
  const d = new Date(ts);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const h = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  return `${y}/${m}/${day} ${h}:${min}`;
}

function formatDate(ts: number | null) {
  if (!ts) return "-";
  const d = new Date(ts);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const h = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  return `${y}/${m}/${day} ${h}:${min}`;
}

function buildDiagnosisUrl({ grade, subject, chapter, type, id }: any) {
  return `https://h5.xiaoluai.com/diagnosis?grade=${encodeURIComponent(
    grade
  )}&subject=${encodeURIComponent(subject)}&chapter=${encodeURIComponent(
    chapter
  )}&type=${encodeURIComponent(type)}&id=${id}`;
}

const initialRows: DiagnosisRow[] = Array.from({ length: 48 }).map((_, idx) => {
  const subject = subjects[idx % subjects.length];
  const status = statuses[idx % statuses.length];
  const baseName = studentNames[idx % studentNames.length];
  const name = idx < studentNames.length ? baseName : `${baseName}${Math.floor(idx / studentNames.length) + 1}`;
  const createdAtTs = makeTime((idx % 15) + 1, 9 + (idx % 8)).getTime();
  const chapter = chapters[idx % chapters.length];

  return {
    id: `seed-${idx + 1}`,
    studentName: name,
    phone: mockPhones[idx % mockPhones.length],
    grade: grades[idx % grades.length],
    subject,
    chapter: chapter.short,
    chapterDetail: chapter.detail,
    creator: creators[idx % creators.length],
    createdAtTs,
    result: status,
    finishedAtTs: status === "已完成" ? makeTime(idx % 10, 14 + (idx % 5)).getTime() : null,
    status,
    isUrlDeleted: status === "已作废",
    rawUrl: status === "已作废"
      ? ""
      : buildDiagnosisUrl({
          grade: grades[idx % grades.length],
          subject,
          chapter: chapter.short,
          type: "基础摸底",
          id: `seed-${idx + 1}`,
        }),
  };
});

const thStyle = {
  height: "40px",
  padding: "10px 10px",
  fontSize: "var(--text-base)",
  fontWeight: "var(--font-weight-regular)" as const,
  color: "var(--table-header-text)",
};

const tdStyle = {
  height: "52px",
  padding: "12px 10px",
  fontSize: "var(--text-base)",
  fontWeight: "var(--font-weight-regular)" as const,
  color: "var(--foreground)",
};

export function DiagnosisPage() {
  const navigate = useNavigate();
  const [rows, setRows] = useState<DiagnosisRow[]>(initialRows);
  const [filteredRows, setFilteredRows] = useState<DiagnosisRow[]>(initialRows);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [searchSubject, setSearchSubject] = useState("");
  const [searchPeriod, setSearchPeriod] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [voidConfirmId, setVoidConfirmId] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipContent, setTooltipContent] = useState("");
  const [editPhoneRow, setEditPhoneRow] = useState<DiagnosisRow | null>(null);
  const [editPhoneValue, setEditPhoneValue] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Auto-filter whenever any search criteria or rows change
  useEffect(() => {
    const filtered = rows.filter((item) => {
      const nameMatch = !searchName || item.studentName.includes(searchName);
      const subjectMatch = !searchSubject || item.subject === searchSubject;
      const resultMatch = !searchResult || item.status === searchResult;
      const periodMatch = !searchPeriod || item.status === "已完成";
      return nameMatch && subjectMatch && resultMatch && periodMatch;
    });
    setFilteredRows(filtered);
    setCurrentPage(1);
  }, [searchName, searchSubject, searchPeriod, searchResult, rows]);

  const resetSearch = () => {
    setSearchName("");
    setSearchSubject("");
    setSearchPeriod("");
    setSearchResult("");
    setFilteredRows(rows);
    setCurrentPage(1);
  };

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / PAGE_SIZE));
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageRows = filteredRows.slice(start, start + PAGE_SIZE);

  const statusBadge = (status: string) => {
    const colors: Record<string, string> = {
      未开始: "bg-[#f2f4f9] text-[#646B8A]",
      进行中: "bg-[#fff5e6] text-[#fa9524]",
      已完成: "bg-[#eaf7e6] text-[#2dc01f]",
      已作废: "bg-[#ffecec] text-[#f35757]",
    };
    return (
      <span
        className={`inline-flex items-center rounded-[3px] whitespace-nowrap ${colors[status] || "bg-muted text-muted-foreground"} px-[4px] py-[0px]`}
        style={{
          fontSize: "var(--text-sm)",
          fontWeight: "var(--font-weight-regular)",
          lineHeight: "1.5",
        }}
      >
        {status}
      </span>
    );
  };

  const handleShowChapterTooltip = (e: React.MouseEvent<HTMLButtonElement>, detail: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipContent(detail);
    setTooltipPosition({ x: rect.left, y: rect.bottom + 8 });
    setShowTooltip(true);
  };

  const handleAddRow = (newRow: DiagnosisRow) => {
    const rowWithPhone = { ...newRow, phone: newRow.phone || "-" };
    setRows([rowWithPhone, ...rows]);
    setFilteredRows([rowWithPhone, ...filteredRows]);
  };

  const handleCopyLink = async (row: DiagnosisRow) => {
    if (!row.rawUrl) return;
    try {
      await navigator.clipboard.writeText(row.rawUrl);
      showToast("链接已复制到剪贴板", "success");
    } catch {
      showToast("复制失败，请手动复制", "error");
    }
  };

  const handleVoidRow = (rowId: string) => {
    const update = (list: DiagnosisRow[]) =>
      list.map((r) =>
        r.id === rowId
          ? { ...r, status: "已作废", result: "已废", isUrlDeleted: true, rawUrl: "" }
          : r
      );
    setRows(update(rows));
    setFilteredRows(update(filteredRows));
    showToast("已作废该诊断", "success");
  };

  const actionLinkStyle = {
    fontSize: "var(--text-sm)",
    fontWeight: "var(--font-weight-regular)" as const,
  };

  return (
    <>
      <div className="flex flex-col flex-1 min-h-0 pb-6">
      {/* Page title + primary action */}
      <div className="flex h-[68px] shrink-0 items-center justify-between">
        <h2
          style={{
            fontSize: "var(--text-lg)",
            fontWeight: "var(--font-weight-medium)",
            lineHeight: "30px",
            color: "var(--page-title-muted)",
          }}
        >
          诊断管理
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="relative w-[108px] h-[36px] rounded-[36px] flex items-center justify-center gap-[2px] cursor-pointer hover:opacity-90 transition-opacity"
          style={{
            background: "var(--primary-gradient)",
          }}
        >
          <div className="relative shrink-0 size-[16px]">
            <svg className="block size-full" fill="none" viewBox="0 0 16 16" opacity="0.8">
              <path d="M8.02016 3.3333L8.00796 12.6666" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
              <path d="M3.33333 8H12.6667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            </svg>
          </div>
          <span
            className="whitespace-nowrap text-center text-white"
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-medium)",
              lineHeight: "22px",
            }}
          >
            新建诊断
          </span>
        </button>
      </div>

      <div className="dashboard-page-panel flex flex-col flex-1 min-h-0 p-4 gap-5">
        {/* Search filters */}
        <div className="flex gap-4 items-center shrink-0">
          <div className="grid grid-cols-4 gap-4 flex-1">
            <div className="relative">
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                    <path d={svgSearchIcon.p2b997400} stroke="var(--stroke-0, #646B8A)" strokeLinejoin="round" strokeWidth="1.2" />
                    <path d={svgSearchIcon.p8200a00} stroke="var(--stroke-0, #646B8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  placeholder="请输入学生姓名"
                  className="w-full h-10 pl-9 pr-3 bg-input-background border focus:outline-none focus:border-primary focus:ring-0 rounded-[8px] placeholder:text-[#838bab]"
                  style={{
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-regular)",
                    color: "var(--card-foreground)",
                    borderColor: "var(--input-border-soft)",
                  }}
                />
              </div>
            </div>
            <div>
              
              <CustomSelect
                value={searchSubject}
                onChange={(val) => setSearchSubject(val)}
                options={[
                  { label: "全部", value: "" },
                  { label: "英语", value: "英语" },
                  { label: "数学", value: "数学" },
                  { label: "物理", value: "物理" },
                ]}
                placeholder="请选择科目"
              />
            </div>
            <div>
              
              <CustomSelect
                value={searchPeriod}
                onChange={(val) => setSearchPeriod(val)}
                options={[
                  { label: "全部", value: "" },
                  { label: "近七天", value: "近7天" },
                  { label: "近30天", value: "近30天" },
                  { label: "本月", value: "本月" },
                ]}
                placeholder="测评完成时间周期"
              />
            </div>
            <div>
              
              <CustomSelect
                value={searchResult}
                onChange={(val) => setSearchResult(val)}
                options={[
                  { label: "全部", value: "" },
                  { label: "未开始", value: "未开始" },
                  { label: "进行中", value: "进行中" },
                  { label: "已完成", value: "已完成" },
                  { label: "已作废", value: "已作废" },
                ]}
                placeholder="测评状态"
              />
            </div>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={resetSearch}
              className="flex items-center justify-center gap-1 shrink-0 self-stretch rounded-full hover:bg-[#f4f7fe] transition-colors px-1"
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                  <path d="M14 2.66667V8" stroke="var(--accent)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M2 8V13.3333" stroke="var(--accent)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgReset.p2c2b0280} stroke="var(--accent)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
              <span style={{ color: "var(--accent)" }}>重置</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-tl-[8px] rounded-tr-[8px] overflow-clip flex-1 min-h-0 overflow-y-auto">
          <table className="w-full border-collapse table-fixed">
            <colgroup><col style={{ width: "8%" }} /><col style={{ width: "13%" }} /><col style={{ width: "5%" }} /><col style={{ width: "5%" }} /><col style={{ width: "10%" }} /><col style={{ width: "8%" }} /><col style={{ width: "14%" }} /><col style={{ width: "15%" }} /><col style={{ width: "9%" }} /><col style={{ width: "13%" }} /></colgroup>
            <thead className="sticky top-0 z-10" style={{ backgroundColor: "var(--dashboard-canvas)" }}>
              <tr>
                <th className="text-left first:rounded-tl-[8px] whitespace-nowrap" style={thStyle}>学生姓名</th>
                <th className="text-left whitespace-nowrap" style={thStyle}>家长手机号</th>
                <th className="text-left whitespace-nowrap" style={thStyle}>年级</th>
                <th className="text-left whitespace-nowrap" style={thStyle}>科目</th>
                <th className="text-left whitespace-nowrap" style={thStyle}>测评章节</th>
                <th className="text-left whitespace-nowrap" style={thStyle}>测评状态</th>
                <th className="whitespace-nowrap text-center" style={thStyle}>完成时间</th>
                <th className="whitespace-nowrap text-center" style={thStyle}>操作项</th>
                <th className="text-left whitespace-nowrap" style={thStyle}>创建人</th>
                <th className="text-left last:rounded-tr-[8px] whitespace-nowrap" style={thStyle}>创建日期</th>
              </tr>
            </thead>
            <tbody>
              {pageRows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-[#f8f9fc] transition-colors"
                  style={{
                    backgroundColor: "var(--card)",
                  }}
                >
                  {/* 学生姓名 */}
                  <td style={tdStyle}>{row.studentName}</td>

                  {/* 家长手机号 */}
                  <td className="whitespace-nowrap" style={tdStyle}>
                    <div className="flex items-center gap-[6px]">
                      <span>{row.phone}</span>
                      <button
                        type="button"
                        className="flex shrink-0 cursor-pointer items-center justify-center rounded-[4px] p-[2px] opacity-0 transition-opacity hover:bg-[#f0f4ff] group-hover:opacity-100 [tr:hover_&]:opacity-100"
                        style={{ color: "#838bab" }}
                        onClick={() => { setEditPhoneRow(row); setEditPhoneValue(row.phone); }}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M8.5 2.5L11.5 5.5M1.5 12.5L2.1 9.9L9.8 2.2C10.2 1.8 10.8 1.8 11.2 2.2L11.8 2.8C12.2 3.2 12.2 3.8 11.8 4.2L4.1 11.9L1.5 12.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </td>

                  {/* 年级 */}
                  <td style={tdStyle}>{row.grade}</td>

                  {/* 科目 */}
                  <td style={tdStyle}>{row.subject}</td>

                  {/* 测评章节 */}
                  <td style={{ height: "52px", padding: "12px 10px" }}>
                    <div className="flex items-center gap-[2px]">
                      <span
                        className="whitespace-nowrap"
                        style={{
                          fontSize: "var(--text-base)",
                          fontWeight: "var(--font-weight-regular)",
                          color: "#101019",
                        }}
                      >
                        {row.chapter}
                      </span>
                      <button
                        onMouseEnter={(e) => handleShowChapterTooltip(e, row.chapterDetail)}
                        onMouseLeave={() => setShowTooltip(false)}
                        className="flex items-center justify-center cursor-pointer shrink-0"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6 11.02C8.7725 11.02 11.02 8.7725 11.02 6C11.02 3.2275 8.7725 0.979954 6 0.979954C3.2275 0.979954 0.979954 3.2275 0.979954 6C0.979954 8.7725 3.2275 11.02 6 11.02ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="var(--gray-3)" />
                          <path d="M5.10622 4.81409V4.69622C5.10685 4.53892 5.16148 4.36548 5.28238 4.23563C5.3948 4.11489 5.60323 3.99 5.998 3.99C6.37339 3.99 6.64207 4.17453 6.78263 4.39529C6.93143 4.62901 6.91254 4.8458 6.82578 4.96616C6.74072 5.08416 6.63617 5.19171 6.51285 5.30579C6.47408 5.34165 6.42739 5.38339 6.37779 5.42774C6.29063 5.50565 6.19449 5.59161 6.11652 5.66784C5.84045 5.93777 5.55427 6.30175 5.55427 6.8615L5.55589 7.11954C5.55743 7.36623 5.75866 7.56496 6.00535 7.56342C6.25204 7.56188 6.45077 7.36065 6.44922 7.11396L6.44764 6.86027C6.44798 6.65494 6.53447 6.50861 6.74108 6.3066C6.80999 6.23922 6.87317 6.18303 6.94458 6.11952C6.99668 6.07318 7.05321 6.02291 7.11949 5.96159C7.2602 5.83143 7.41454 5.67714 7.55048 5.48855C7.90572 4.99574 7.8259 4.37051 7.53621 3.9155C7.23827 3.44755 6.69089 3.09665 5.998 3.09665C5.39574 3.09665 4.93573 3.29696 4.62857 3.62685C4.33005 3.94746 4.21394 4.34979 4.21286 4.69403V4.81409C4.21286 5.06078 4.41285 5.26076 4.65954 5.26076C4.90624 5.26076 5.10622 5.06078 5.10622 4.81409Z" fill="var(--gray-3)" />
                          <path d="M5.99958 9.1268C6.30794 9.1268 6.55792 8.87682 6.55792 8.56845C6.55792 8.26009 6.30794 8.01011 5.99958 8.01011C5.69121 8.01011 5.44123 8.26009 5.44123 8.56845C5.44123 8.87682 5.69121 9.1268 5.99958 9.1268Z" fill="var(--gray-3)" />
                        </svg>
                      </button>
                    </div>
                  </td>

                  {/* 测评状态 */}
                  <td style={{ height: "52px", padding: "12px 10px" }}>
                    {statusBadge(row.status)}
                  </td>

                  {/* 完成时间 */}
                  <td className="whitespace-nowrap text-center" style={tdStyle}>
                    {formatDateTime(row.finishedAtTs)}
                  </td>

                  {/* 操作项 */}
                  <td style={{ height: "52px", padding: "12px 10px" }}>
                    {(row.status === "未开始" || row.status === "进行中") && (
                      <div className="flex gap-2 whitespace-nowrap justify-center">
                        <button
                          onClick={() => handleCopyLink(row)}
                          className="relative inline-flex items-center justify-center gap-1 h-[24px] min-w-[60px] px-2 rounded-[18px] bg-[#ebf1ff] text-primary hover:opacity-85 transition-opacity whitespace-nowrap shrink-0"
                          style={{
                            fontSize: "12px",
                            fontWeight: "var(--font-weight-regular)",
                          }}
                        >
                          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[18px] border border-[#e0eaff]" />
                          复制链接
                        </button>
                        <button
                          onClick={() => setVoidConfirmId(row.id)}
                          className="relative inline-flex items-center justify-center gap-1 h-[24px] min-w-[60px] px-2 rounded-[18px] bg-[#ebf1ff] text-primary hover:opacity-85 transition-opacity whitespace-nowrap shrink-0"
                          style={{
                            fontSize: "12px",
                            fontWeight: "var(--font-weight-regular)",
                          }}
                        >
                          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[18px] border border-[#e0eaff]" />
                          作废
                        </button>
                      </div>
                    )}
                    {row.status === "已完成" && (
                      <div className="flex gap-2 whitespace-nowrap justify-center">
                        <button
                          className="relative inline-flex items-center justify-center gap-1 h-[24px] min-w-[60px] px-2 rounded-[18px] bg-[#ebf1ff] text-primary hover:opacity-85 transition-opacity whitespace-nowrap shrink-0"
                          style={{
                            fontSize: "12px",
                            fontWeight: "var(--font-weight-regular)",
                          }}
                          onClick={() => showToast("诊断报告功能待完善", "info")}
                        >
                          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[18px] border border-[#e0eaff]" />
                          诊断报告
                        </button>
                        {(() => {
                          const hasSchedulePlan = !!getDiagnosisPlan(row.id);
                          return (
                            <button
                              className="relative inline-flex items-center justify-center gap-1 h-[24px] min-w-[60px] px-2 rounded-[18px] bg-[#ebf1ff] text-primary hover:opacity-85 transition-opacity whitespace-nowrap shrink-0"
                              style={{
                                fontSize: "12px",
                                fontWeight: "var(--font-weight-regular)",
                              }}
                              onClick={() =>
                                navigate(`/dashboard/schedule-plan/${row.id}`, {
                                  state: {
                                    studentName: row.studentName,
                                    grade: row.grade,
                                    subject: row.subject,
                                  },
                                })
                              }
                            >
                              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[18px] border border-[#e0eaff]" />
                              {hasSchedulePlan ? "查看排课" : "去排课"}
                            </button>
                          );
                        })()}
                      </div>
                    )}
                    {row.status === "已作废" && (
                      <span className="block text-center w-full"
                        style={{
                          fontSize: "var(--text-sm)",
                          fontWeight: "var(--font-weight-regular)",
                          color: "var(--muted-foreground)",
                        }}
                      >
                        -
                      </span>
                    )}
                  </td>

                  {/* 创建人 */}
                  <td className="whitespace-nowrap" style={tdStyle}>{row.creator}</td>

                  {/* 创建期 */}
                  <td className="whitespace-nowrap" style={tdStyle}>{formatDate(row.createdAtTs)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="shrink-0 mt-auto px-0 pt-1 pb-0 flex items-center justify-center">
          <div className="flex gap-[8px] items-center">
            {/* Left arrow */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center justify-center p-[6px] rounded-[28px] size-[28px] cursor-pointer disabled:cursor-not-allowed transition-colors"
            >
              <div className="overflow-clip relative shrink-0 size-[12px]">
                <div className="absolute flex items-center justify-center" style={{ inset: "18.71% 35.42% 15.59% 33.33%" }}>
                  <svg className="block" style={{ width: "4.375px", height: "9.198px", transform: "scaleY(-1)" }} fill="none" preserveAspectRatio="none" viewBox="0 0 3.75003 7.88443">
                    <path clipRule="evenodd" d={svgPagination.p35c2f200} fill={currentPage === 1 ? "#ABB4D1" : "#444963"} fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </button>

            {/* Page numbers */}
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let page: number;
              if (totalPages <= 5) {
                page = i + 1;
              } else if (currentPage <= 3) {
                page = i + 1;
              } else if (currentPage >= totalPages - 2) {
                page = totalPages - 4 + i;
              } else {
                page = currentPage - 2 + i;
              }
              const isActive = page === currentPage;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className="flex items-center justify-center p-[2px] rounded-[28px] size-[28px] cursor-pointer transition-colors"
                  style={isActive ? { backgroundColor: "#ebf1ff" } : undefined}
                >
                  <span
                    className="whitespace-nowrap text-center"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.5",
                      color: isActive ? "#4a4fed" : "#444963",
                      fontFeatureSettings: "'lnum', 'pnum'",
                    }}
                  >
                    {page}
                  </span>
                </button>
              );
            })}

            {/* Right arrow */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center p-[6px] rounded-[28px] size-[28px] cursor-pointer disabled:cursor-not-allowed transition-colors"
            >
              <div className="overflow-clip relative shrink-0 size-[12px]">
                <div className="absolute flex items-center justify-center" style={{ inset: "18.71% 33.33% 15.59% 35.42%" }}>
                  <svg className="block" style={{ width: "4.375px", height: "9.198px", transform: "scaleY(-1)" }} fill="none" preserveAspectRatio="none" viewBox="0 0 3.75003 7.88443">
                    <path clipRule="evenodd" d={svgPagination.p12537a00} fill={currentPage === totalPages ? "#ABB4D1" : "#444963"} fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div
          className="fixed z-50 bg-card px-4 py-2 max-w-sm"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            borderRadius: "var(--radius)",
            border: "1px solid var(--border)",
            boxShadow: "0px 4px 8px rgba(16,18,25,0.08)",
            fontSize: "var(--text-sm)",
            fontWeight: "var(--font-weight-regular)",
            color: "var(--card-foreground)",
          }}
        >
          {tooltipContent}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <DiagnosisModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddRow}
          buildDiagnosisUrl={buildDiagnosisUrl}
        />
      )}

      {/* Void Confirmation Dialog */}
      {voidConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setVoidConfirmId(null)}
          />
          <div className="relative bg-white rounded-[16px] w-[384px]">
            <div className="flex flex-col gap-[24px] items-end justify-center overflow-clip pb-[20px] pt-[24px] px-[24px] rounded-[inherit]">
              {/* Title + Content */}
              <div className="flex flex-col gap-[8px] items-start w-full">
                <div className="flex gap-[8px] items-center w-full">
                  {/* Warning icon */}
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="11" fill="#FA9524" />
                      <path d="M12 7v5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 15v0.5" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "var(--font-weight-semibold)",
                      color: "#101019",
                    }}
                  >
                    确认作废
                  </span>
                </div>
                <div className="pl-[32px] w-full">
                  <p
                    style={{
                      fontSize: "var(--text-base)",
                      fontWeight: "var(--font-weight-regular)",
                      color: "#444963",
                      lineHeight: "1.5",
                    }}
                  >
                    作废后该诊断链接将失效，且无法恢复，确定要作废吗？
                  </p>
                </div>
              </div>
              {/* Footer */}
              <div className="flex items-center justify-end w-full gap-[12px]">
                <button
                  onClick={() => setVoidConfirmId(null)}
                  className="relative h-[36px] px-[20px] py-[8px] rounded-[18px] bg-white hover:bg-muted transition-colors cursor-pointer"
                  style={{
                    fontSize: "14px",
                    fontWeight: "var(--font-weight-medium)",
                    color: "#444963",
                  }}
                >
                  <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[18px] border border-[#dfe3f0]" />
                  取消
                </button>
                <button
                  onClick={() => {
                    handleVoidRow(voidConfirmId);
                    setVoidConfirmId(null);
                  }}
                  className="h-[36px] px-[20px] py-[8px] rounded-[18px] bg-[#6574fc] text-white hover:opacity-90 transition-opacity cursor-pointer"
                  style={{
                    fontSize: "14px",
                    fontWeight: "var(--font-weight-medium)",
                  }}
                >
                  确认
                </button>
              </div>
            </div>
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px] border border-[#e9ecf5]" style={{ boxShadow: "0px 8px 32px 0px rgba(16,18,25,0.1)" }} />
          </div>
        </div>
      )}
      {/* 编辑手机号弹窗 */}
      {editPhoneRow && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          onClick={() => setEditPhoneRow(null)}
        >
          <div
            className="flex w-full max-w-[440px] flex-col overflow-hidden rounded-[16px] bg-white"
            style={{ boxShadow: "0px 8px 32px 0px rgba(16,18,25,0.1)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-[52px] shrink-0 items-center px-[24px]">
              <span style={{ fontSize: 16, fontWeight: 600, color: "#101019" }}>编辑手机号</span>
            </div>
            <div className="flex flex-col gap-[16px] px-[24px] py-[20px]">
              <div className="flex items-center gap-[12px]">
                <label className="shrink-0" style={{ fontSize: 14, color: "#444963" }}>学生姓名</label>
                <span style={{ fontSize: 14, color: "#101019" }}>{editPhoneRow.studentName}</span>
              </div>
              <div className="flex items-center gap-[12px]">
                <label className="shrink-0" style={{ fontSize: 14, color: "#444963" }}>手机号码</label>
                <input
                  className="h-[40px] min-w-0 flex-1 rounded-[8px] border border-solid border-[#e9ecf5] bg-white px-[12px] outline-none focus:border-[#6574fc]"
                  style={{ fontSize: 14, color: "#101019" }}
                  value={editPhoneValue}
                  onChange={(e) => {
                    const v = e.target.value.replace(/[^\d]/g, "");
                    if (v.length <= 11) setEditPhoneValue(v);
                  }}
                  placeholder="请输入手机号"
                  maxLength={11}
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-[12px] px-[24px] py-[16px]">
              <button
                type="button"
                onClick={() => setEditPhoneRow(null)}
                className="flex h-[36px] w-[88px] cursor-pointer items-center justify-center rounded-[18px] bg-white transition-colors hover:bg-[#f8f9fc]"
                style={{ border: "1px solid #dfe3f0" }}
              >
                <span style={{ fontSize: 14, fontWeight: 500, color: "#444963" }}>取消</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  if (!editPhoneValue.trim()) {
                    showToast("请输入手机号", "warning");
                    return;
                  }
                  if (editPhoneValue.length !== 11) {
                    showToast("请输入正确的11位手机号", "warning");
                    return;
                  }
                  setRows(rows.map((r) => r.id === editPhoneRow.id ? { ...r, phone: editPhoneValue } : r));
                  setFilteredRows(filteredRows.map((r) => r.id === editPhoneRow.id ? { ...r, phone: editPhoneValue } : r));
                  showToast("手机号修改成功", "success");
                  setEditPhoneRow(null);
                }}
                className="flex h-[36px] w-[88px] cursor-pointer items-center justify-center rounded-[18px] border-none transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#6574fc" }}
              >
                <span style={{ fontSize: 14, fontWeight: 500, color: "white" }}>确认</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}