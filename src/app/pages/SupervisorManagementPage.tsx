import { useState, useEffect } from "react";
import { CustomSelect } from "../components/CustomSelect";
import svgPagination from "../../imports/svg-19pv0i3uah";
import svgReset from "../../imports/svg-18hjbja5pw";
import svgSearchIcon from "../../imports/svg-kyeyr0z9t1";

interface SupervisorRow {
  id: string;
  name: string;
  roleType: string;
  studentCount: number;
  joinedAtTs: number;
}

const supervisorRowsSeed: SupervisorRow[] = [
  { id: "1", name: "李小明老师", roleType: "试听课", studentCount: 18, joinedAtTs: new Date("2025-08-01").getTime() },
  { id: "2", name: "王晓彤老师", roleType: "正价课", studentCount: 26, joinedAtTs: new Date("2024-11-15").getTime() },
  { id: "3", name: "陈子涵老师", roleType: "正价课", studentCount: 22, joinedAtTs: new Date("2025-02-20").getTime() },
  { id: "4", name: "周嘉宁老师", roleType: "试听课", studentCount: 14, joinedAtTs: new Date("2025-05-09").getTime() },
  { id: "5", name: "赵一帆老师", roleType: "正价课", studentCount: 20, joinedAtTs: new Date("2024-09-03").getTime() },
];

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

const DEFAULT_PAGE_SIZE = 15;

const actionBtnClass =
  "relative inline-flex items-center justify-center gap-1 h-[24px] min-w-[60px] px-2 rounded-[18px] bg-[#ebf1ff] text-primary hover:opacity-85 transition-opacity whitespace-nowrap shrink-0";

export function SupervisorManagementPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredRows, setFilteredRows] = useState<SupervisorRow[]>(supervisorRowsSeed);
  const [searchName, setSearchName] = useState("");
  const [searchRoleType, setSearchRoleType] = useState("");
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [showPageSizeDropdown, setShowPageSizeDropdown] = useState(false);

  useEffect(() => {
    const filtered = supervisorRowsSeed.filter((item) => {
      const nameMatch = !searchName || item.name.includes(searchName);
      const typeMatch = !searchRoleType || item.roleType === searchRoleType;
      return nameMatch && typeMatch;
    });
    setFilteredRows(filtered);
    setCurrentPage(1);
  }, [searchName, searchRoleType]);

  const formatTenure = (ts: number) => {
    const days = Math.max(0, Math.floor((Date.now() - ts) / (24 * 60 * 60 * 1000)));
    const months = Math.floor(days / 30);
    const remainDays = days % 30;
    return `${months}个月${remainDays}天`;
  };

  const roleTypeBadge = (type: string) => {
    const isPaid = type === "正价课";
    return (
      <span
        className={`inline-flex items-center rounded-[3px] whitespace-nowrap px-[4px] py-[0px] ${
          isPaid ? "bg-[#eaf7e6] text-[#2dc01f]" : "bg-[#fff5e6] text-[#fa9524]"
        }`}
        style={{
          fontSize: "var(--text-sm)",
          fontWeight: "var(--font-weight-regular)",
          lineHeight: "1.5",
        }}
      >
        {type}
      </span>
    );
  };

  const resetSearch = () => {
    setSearchName("");
    setSearchRoleType("");
    setFilteredRows(supervisorRowsSeed);
    setCurrentPage(1);
  };

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / pageSize));
  const start = (currentPage - 1) * pageSize;
  const pageRows = filteredRows.slice(start, start + pageSize);

  const dangerBtnClass =
    "relative inline-flex items-center justify-center gap-1 h-[24px] min-w-[60px] px-2 rounded-[18px] bg-[#fff0eb] text-[#e0443f] hover:opacity-85 transition-opacity whitespace-nowrap shrink-0";

  return (
    <>
      <div className="flex flex-col flex-1 min-h-0">
        <div className="flex h-[68px] shrink-0 items-center justify-between">
          <h2
            style={{
              fontSize: "var(--text-lg)",
              fontWeight: "var(--font-weight-medium)",
              lineHeight: "30px",
              color: "var(--page-title-muted)",
            }}
          >
            老师管理
          </h2>
          <button
            type="button"
            className="relative h-[36px] min-w-[108px] px-4 rounded-[36px] flex items-center justify-center gap-[2px] cursor-pointer hover:opacity-90 transition-opacity"
            style={{
              background: "var(--primary-gradient)",
            }}
          >
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" viewBox="0 0 16 16" opacity="0.8">
                <path
                  d="M8.02016 3.3333L8.00796 12.6666"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                />
                <path
                  d="M3.33333 8H12.6667"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                />
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
              创建督学老师
            </span>
          </button>
        </div>

        <div className="dashboard-page-panel flex flex-col flex-1 min-h-0 p-4 gap-5">
          <div className="flex gap-4 items-center shrink-0">
            <div className="grid grid-cols-2 gap-4 flex-1 max-w-2xl">
              <div className="relative">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                      <path
                        d={svgSearchIcon.p2b997400}
                        stroke="var(--stroke-0, #646B8A)"
                        strokeLinejoin="round"
                        strokeWidth="1.2"
                      />
                      <path
                        d={svgSearchIcon.p8200a00}
                        stroke="var(--stroke-0, #646B8A)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.2"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    placeholder="请输入老师姓名"
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
                  value={searchRoleType}
                  onChange={(val) => setSearchRoleType(val)}
                  options={[
                    { label: "全部类型", value: "" },
                    { label: "试听课", value: "试听课" },
                    { label: "正价课", value: "正价课" },
                  ]}
                  placeholder="全部类型"
                />
              </div>
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                type="button"
                onClick={resetSearch}
                className="flex items-center justify-center gap-1 shrink-0 self-stretch rounded-full hover:bg-[#f4f7fe] transition-colors px-1"
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                <div className="relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                    <path
                      d="M14 2.66667V8"
                      stroke="var(--accent)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.33333"
                    />
                    <path
                      d="M2 8V13.3333"
                      stroke="var(--accent)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.33333"
                    />
                    <path
                      d={svgReset.p2c2b0280}
                      stroke="var(--accent)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.33333"
                    />
                  </svg>
                </div>
                <span style={{ color: "var(--accent)" }}>重置</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto rounded-tl-[8px] rounded-tr-[8px] overflow-clip flex-1 min-h-0 overflow-y-auto">
            <table className="w-full border-collapse table-fixed">
              <colgroup>
                <col style={{ width: "22%" }} />
                <col style={{ width: "14%" }} />
                <col style={{ width: "16%" }} />
                <col style={{ width: "18%" }} />
                <col style={{ width: "30%" }} />
              </colgroup>
              <thead className="sticky top-0 z-10" style={{ backgroundColor: "var(--dashboard-canvas)" }}>
                <tr>
                  <th className="text-left first:rounded-tl-[8px] whitespace-nowrap" style={thStyle}>
                    姓名（老师）
                  </th>
                  <th className="text-left whitespace-nowrap" style={thStyle}>
                    类型
                  </th>
                  <th className="text-left whitespace-nowrap" style={thStyle}>
                    履约中
                  </th>
                  <th className="text-left whitespace-nowrap" style={thStyle}>
                    在职时长
                  </th>
                  <th className="text-left last:rounded-tr-[8px] whitespace-nowrap" style={thStyle}>
                    操作项
                  </th>
                </tr>
              </thead>
              <tbody>
                {pageRows.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-[#f8f9fc] transition-colors"
                    style={{ backgroundColor: "var(--card)" }}
                  >
                    <td className="whitespace-nowrap" style={tdStyle}>
                      {row.name}
                    </td>
                    <td style={{ height: "52px", padding: "12px 10px" }}>{roleTypeBadge(row.roleType)}</td>
                    <td style={{ height: "52px", padding: "12px 10px" }}>
                      <button
                        type="button"
                        className={actionBtnClass}
                        style={{
                          fontSize: "12px",
                          fontWeight: "var(--font-weight-regular)",
                        }}
                      >
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 pointer-events-none rounded-[18px] border border-[#e0eaff]"
                        />
                        {row.studentCount} 人
                      </button>
                    </td>
                    <td className="whitespace-nowrap" style={tdStyle}>
                      {formatTenure(row.joinedAtTs)}
                    </td>
                    <td style={{ height: "52px", padding: "12px 10px" }}>
                      <div className="flex gap-2 flex-wrap">
                        <button
                          type="button"
                          className={actionBtnClass}
                          style={{
                            fontSize: "12px",
                            fontWeight: "var(--font-weight-regular)",
                          }}
                        >
                          <div
                            aria-hidden="true"
                            className="absolute inset-0 pointer-events-none rounded-[18px] border border-[#e0eaff]"
                          />
                          调整角色
                        </button>
                        <button
                          type="button"
                          className={dangerBtnClass}
                          style={{
                            fontSize: "12px",
                            fontWeight: "var(--font-weight-regular)",
                          }}
                        >
                          <div
                            aria-hidden="true"
                            className="absolute inset-0 pointer-events-none rounded-[18px] border border-[#fca5a2]"
                          />
                          操作离职
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="shrink-0 mt-auto px-0 pt-1 pb-0 flex items-center justify-center">
            <div className="flex gap-[8px] items-center">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center justify-center p-[6px] rounded-[28px] size-[28px] cursor-pointer disabled:cursor-not-allowed transition-colors"
              >
                <div className="overflow-clip relative shrink-0 size-[12px]">
                  <div
                    className="absolute flex items-center justify-center"
                    style={{ inset: "18.71% 35.42% 15.59% 33.33%" }}
                  >
                    <svg
                      className="block"
                      style={{ width: "4.375px", height: "9.198px", transform: "scaleY(-1)" }}
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 3.75003 7.88443"
                    >
                      <path
                        clipRule="evenodd"
                        d={svgPagination.p35c2f200}
                        fill={currentPage === 1 ? "#ABB4D1" : "#444963"}
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </button>

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
                    type="button"
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

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center p-[6px] rounded-[28px] size-[28px] cursor-pointer disabled:cursor-not-allowed transition-colors"
              >
                <div className="overflow-clip relative shrink-0 size-[12px]">
                  <div
                    className="absolute flex items-center justify-center"
                    style={{ inset: "18.71% 33.33% 15.59% 35.42%" }}
                  >
                    <svg
                      className="block"
                      style={{ width: "4.375px", height: "9.198px", transform: "scaleY(-1)" }}
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 3.75003 7.88443"
                    >
                      <path
                        clipRule="evenodd"
                        d={svgPagination.p12537a00}
                        fill={currentPage === totalPages ? "#ABB4D1" : "#444963"}
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowPageSizeDropdown(!showPageSizeDropdown)}
                  className="relative flex gap-[4px] h-[28px] items-center justify-center px-[16px] py-[2px] rounded-[28px] cursor-pointer"
                  style={{ backgroundColor: "rgba(255,255,255,0)" }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none rounded-[28px]"
                    style={{ border: "1px solid #e9ecf5" }}
                  />
                  <span
                    className="whitespace-nowrap"
                    style={{
                      fontSize: "12px",
                      lineHeight: "1.5",
                      color: "#101019",
                    }}
                  >
                    {pageSize}条/页
                  </span>
                  <svg className="shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3.5 5.25L7 8.75L10.5 5.25"
                      stroke="#646B8A"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {showPageSizeDropdown && (
                  <div
                    className="absolute bottom-full mb-1 left-0 bg-white rounded-[8px] py-[4px] z-10"
                    style={{
                      border: "1px solid #e9ecf5",
                      boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                    }}
                  >
                    {[10, 15, 20, 30].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => {
                          setPageSize(size);
                          setCurrentPage(1);
                          setShowPageSizeDropdown(false);
                        }}
                        className="block w-full px-[16px] py-[4px] text-left hover:bg-[#f4f7fe] transition-colors cursor-pointer whitespace-nowrap"
                        style={{
                          fontSize: "12px",
                          lineHeight: "1.5",
                          color: size === pageSize ? "#4A4FED" : "#101019",
                        }}
                      >
                        {size}条/页
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
