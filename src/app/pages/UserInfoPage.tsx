import { useState, useEffect } from "react";
import { CustomSelect } from "../components/CustomSelect";
import svgPagination from "../../imports/svg-19pv0i3uah";
import svgReset from "../../imports/svg-18hjbja5pw";
import svgSearchIcon from "../../imports/svg-kyeyr0z9t1";

interface UserInfoRow {
  name: string;
  stage: string;
  province: string;
  city: string;
  subjects: string[];
  activatedAt: number;
  expiredAt: number;
  teacher: string;
}

const userInfoRows: UserInfoRow[] = [
  {
    name: "张子涵",
    stage: "高一",
    province: "广东省",
    city: "深圳市",
    subjects: ["数学", "英语"],
    activatedAt: new Date("2026-01-10 10:30").getTime(),
    expiredAt: new Date("2026-07-10 23:59").getTime(),
    teacher: "李小明老师",
  },
  {
    name: "李雨桐",
    stage: "高一",
    province: "广东省",
    city: "广州市",
    subjects: ["语文"],
    activatedAt: new Date("2026-02-02 09:20").getTime(),
    expiredAt: new Date("2026-08-02 23:59").getTime(),
    teacher: "王晓彤老师",
  },
  {
    name: "王梓轩",
    stage: "初三",
    province: "浙江省",
    city: "杭州市",
    subjects: ["数学", "物理", "英语"],
    activatedAt: new Date("2025-12-18 14:40").getTime(),
    expiredAt: new Date("2026-03-08 23:59").getTime(),
    teacher: "陈子涵老师",
  },
  {
    name: "赵佳宁",
    stage: "初二",
    province: "江苏省",
    city: "南京市",
    subjects: ["英语"],
    activatedAt: new Date("2026-01-25 16:10").getTime(),
    expiredAt: new Date("2026-07-25 23:59").getTime(),
    teacher: "周嘉宁老师",
  },
  {
    name: "刘浩然",
    stage: "高二",
    province: "四川省",
    city: "成都市",
    subjects: ["数学", "物理"],
    activatedAt: new Date("2026-02-14 11:00").getTime(),
    expiredAt: new Date("2026-03-10 23:59").getTime(),
    teacher: "赵一帆老师",
  },
  {
    name: "陈思远",
    stage: "初一",
    province: "湖北省",
    city: "武汉市",
    subjects: ["语文", "英语"],
    activatedAt: new Date("2026-01-08 08:50").getTime(),
    expiredAt: new Date("2026-07-08 23:59").getTime(),
    teacher: "李小明老师",
  },
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

export function UserInfoPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredRows, setFilteredRows] = useState<UserInfoRow[]>(userInfoRows);
  const [searchName, setSearchName] = useState("");
  const [searchStage, setSearchStage] = useState("");
  const [searchTeacher, setSearchTeacher] = useState("");
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [showPageSizeDropdown, setShowPageSizeDropdown] = useState(false);

  useEffect(() => {
    const filtered = userInfoRows.filter((item) => {
      const nameMatch = !searchName || item.name.includes(searchName);
      const stageMatch = !searchStage || item.stage === searchStage;
      const teacherMatch = !searchTeacher || item.teacher === searchTeacher;
      return nameMatch && stageMatch && teacherMatch;
    });
    setFilteredRows(filtered);
    setCurrentPage(1);
  }, [searchName, searchStage, searchTeacher]);

  const formatDateOnly = (ts: number) => {
    return new Date(ts).toLocaleDateString("zh-CN");
  };

  const getDaysToExpire = (expiredAt: number) => {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.floor((expiredAt - Date.now()) / oneDay);
  };

  const expiryBadge = (expiredAt: number) => {
    const days = getDaysToExpire(expiredAt);
    if (days < 0)
      return (
        <span
          className="inline-flex items-center rounded-[3px] whitespace-nowrap bg-[#ffecec] text-[#f35757] px-[4px] py-[0px] ml-2"
          style={{
            fontSize: "var(--text-sm)",
            fontWeight: "var(--font-weight-regular)",
            lineHeight: "1.5",
          }}
        >
          已到期
        </span>
      );
    if (days <= 15)
      return (
        <span
          className="inline-flex items-center rounded-[3px] whitespace-nowrap bg-[#fff5e6] text-[#fa9524] px-[4px] py-[0px] ml-2"
          style={{
            fontSize: "var(--text-sm)",
            fontWeight: "var(--font-weight-regular)",
            lineHeight: "1.5",
          }}
        >
          {days}天内到期
        </span>
      );
    return null;
  };

  const resetSearch = () => {
    setSearchName("");
    setSearchStage("");
    setSearchTeacher("");
    setFilteredRows(userInfoRows);
    setCurrentPage(1);
  };

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / pageSize));
  const start = (currentPage - 1) * pageSize;
  const pageRows = filteredRows.slice(start, start + pageSize);

  const actionBtnClass =
    "relative inline-flex items-center justify-center gap-1 h-[24px] min-w-[60px] px-2 rounded-[18px] bg-[#ebf1ff] text-primary hover:opacity-85 transition-opacity whitespace-nowrap shrink-0";

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
            用户信息
          </h2>
        </div>

        <div className="dashboard-page-panel flex flex-col flex-1 min-h-0 p-4 gap-5">
          <div className="flex gap-4 items-center shrink-0">
            <div className="grid grid-cols-3 gap-4 flex-1">
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
                    placeholder="请输入用户姓名"
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
                  value={searchStage}
                  onChange={(val) => setSearchStage(val)}
                  options={[
                    { label: "全部学段", value: "" },
                    { label: "初一", value: "初一" },
                    { label: "初二", value: "初二" },
                    { label: "初三", value: "初三" },
                    { label: "高一", value: "高一" },
                    { label: "高二", value: "高二" },
                    { label: "高三", value: "高三" },
                  ]}
                  placeholder="全部学段"
                />
              </div>
              <div>
                <CustomSelect
                  value={searchTeacher}
                  onChange={(val) => setSearchTeacher(val)}
                  options={[
                    { label: "全部老师", value: "" },
                    { label: "李小明老师", value: "李小明老师" },
                    { label: "王晓彤老师", value: "王晓彤老师" },
                    { label: "陈子涵老师", value: "陈子涵老师" },
                    { label: "周嘉宁老师", value: "周嘉宁老师" },
                    { label: "赵一帆老师", value: "赵一帆老师" },
                  ]}
                  placeholder="全部老师"
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
                <col style={{ width: "10%" }} />
                <col style={{ width: "8%" }} />
                <col style={{ width: "14%" }} />
                <col style={{ width: "14%" }} />
                <col style={{ width: "12%" }} />
                <col style={{ width: "12%" }} />
                <col style={{ width: "14%" }} />
                <col style={{ width: "16%" }} />
              </colgroup>
              <thead className="sticky top-0 z-10" style={{ backgroundColor: "var(--dashboard-canvas)" }}>
                <tr>
                  <th className="text-left first:rounded-tl-[8px] whitespace-nowrap" style={thStyle}>
                    用户姓名
                  </th>
                  <th className="text-left whitespace-nowrap" style={thStyle}>
                    学段
                  </th>
                  <th className="text-left whitespace-nowrap" style={thStyle}>
                    地区（省/市）
                  </th>
                  <th className="text-left whitespace-nowrap" style={thStyle}>
                    所购买学科
                  </th>
                  <th className="text-left whitespace-nowrap" style={thStyle}>
                    督学老师
                  </th>
                  <th className="text-left whitespace-nowrap" style={thStyle}>
                    激活时间
                  </th>
                  <th className="text-left whitespace-nowrap" style={thStyle}>
                    到期时间
                  </th>
                  <th className="text-left last:rounded-tr-[8px] whitespace-nowrap" style={thStyle}>
                    操作项
                  </th>
                </tr>
              </thead>
              <tbody>
                {pageRows.map((row, idx) => (
                  <tr
                    key={`${row.name}-${idx}`}
                    className="hover:bg-[#f8f9fc] transition-colors"
                    style={{ backgroundColor: "var(--card)" }}
                  >
                    <td style={tdStyle}>{row.name}</td>
                    <td style={tdStyle}>{row.stage}</td>
                    <td className="whitespace-nowrap" style={tdStyle}>
                      {row.province} · {row.city}
                    </td>
                    <td style={{ height: "52px", padding: "12px 10px" }}>
                      <div className="flex flex-wrap gap-2">
                        {row.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="inline-flex items-center rounded-[3px] whitespace-nowrap bg-primary/10 text-primary px-[4px] py-[0px]"
                            style={{
                              fontSize: "var(--text-sm)",
                              fontWeight: "var(--font-weight-regular)",
                              lineHeight: "1.5",
                            }}
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="whitespace-nowrap" style={tdStyle}>
                      {row.teacher}
                    </td>
                    <td className="whitespace-nowrap" style={tdStyle}>
                      {formatDateOnly(row.activatedAt)}
                    </td>
                    <td style={{ height: "52px", padding: "12px 10px" }}>
                      <div className="flex items-center flex-wrap">
                        <span
                          style={{
                            fontSize: "var(--text-base)",
                            fontWeight: "var(--font-weight-regular)",
                            color: "var(--foreground)",
                          }}
                        >
                          {formatDateOnly(row.expiredAt)}
                        </span>
                        {expiryBadge(row.expiredAt)}
                      </div>
                    </td>
                    <td style={{ height: "52px", padding: "12px 10px" }}>
                      <div className="flex gap-2 whitespace-nowrap">
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
                          学情
                        </button>
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
                          订单
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
