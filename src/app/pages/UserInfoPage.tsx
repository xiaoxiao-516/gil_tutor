import { useState } from "react";
import { CustomSelect } from "../components/CustomSelect";

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

const USER_INFO_PAGE_SIZE = 6;

export function UserInfoPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredRows, setFilteredRows] = useState<UserInfoRow[]>(userInfoRows);
  const [searchName, setSearchName] = useState("");
  const [searchStage, setSearchStage] = useState("");
  const [searchTeacher, setSearchTeacher] = useState("");

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
          className="inline-block px-2 py-1 bg-destructive/10 text-destructive rounded ml-2"
          style={{
            fontSize: "var(--text-sm)",
            fontWeight: "var(--font-weight-medium)",
          }}
        >
          已到期
        </span>
      );
    if (days <= 15)
      return (
        <span
          className="inline-block px-2 py-1 bg-chart-3/10 text-chart-3 rounded ml-2"
          style={{
            fontSize: "var(--text-sm)",
            fontWeight: "var(--font-weight-medium)",
          }}
        >
          {days}天内到期
        </span>
      );
    return null;
  };

  const applySearch = () => {
    const filtered = userInfoRows.filter((item) => {
      const nameMatch = !searchName || item.name.includes(searchName);
      const stageMatch = !searchStage || item.stage === searchStage;
      const teacherMatch = !searchTeacher || item.teacher === searchTeacher;
      return nameMatch && stageMatch && teacherMatch;
    });
    setFilteredRows(filtered);
    setCurrentPage(1);
  };

  const resetSearch = () => {
    setSearchName("");
    setSearchStage("");
    setSearchTeacher("");
    setFilteredRows(userInfoRows);
    setCurrentPage(1);
  };

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / USER_INFO_PAGE_SIZE));
  const start = (currentPage - 1) * USER_INFO_PAGE_SIZE;
  const pageRows = filteredRows.slice(start, start + USER_INFO_PAGE_SIZE);

  return (
    <div className="bg-card rounded-[var(--radius)] shadow-[var(--elevation-sm)] p-6 flex-1 flex flex-col min-h-0">
      <div className="flex gap-4 mb-6 items-end">
        <div className="grid grid-cols-3 gap-4 flex-1">
        <div>
          <label
            className="block mb-2"
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-regular)",
              color: "var(--card-foreground)",
            }}
          >
            姓名
          </label>
          <input
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="请输入用户姓名"
            className="w-full px-3 py-2 bg-input-background border border-border rounded-[var(--radius)] focus:outline-none focus:ring-2 focus:ring-ring"
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-regular)",
            }}
          />
        </div>
        <div>
          <label
            className="block mb-2"
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-regular)",
              color: "var(--card-foreground)",
            }}
          >
            学段
          </label>
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
          <label
            className="block mb-2"
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-regular)",
              color: "var(--card-foreground)",
            }}
          >
            督学老师
          </label>
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
            onClick={applySearch}
            className="px-6 py-2 bg-white border border-[#9cb1fc] rounded-[var(--radius)] hover:bg-[#ebf1ff] active:bg-[#e0eaff] transition-colors whitespace-nowrap"
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-regular)",
              color: "var(--primary)",
            }}
          >
            搜索
          </button>
          <button
            onClick={resetSearch}
            className="px-6 py-2 border border-border rounded-[var(--radius)] hover:bg-muted transition-colors"
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            重置
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-x-auto overflow-y-auto rounded-tl-[4px] rounded-tr-[4px]">
        <table className="w-full border-collapse">
          <thead style={{ backgroundColor: "#F2F4F9" }}>
            <tr>
              <th
                className="text-left first:rounded-tl-[4px] last:rounded-tr-[4px] whitespace-nowrap"
                style={{
                  height: "44px",
                  padding: "12px 16px",
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-regular)",
                  color: "var(--card-foreground)",
                }}
              >
                用户姓名
              </th>
              <th
                className="text-left whitespace-nowrap"
                style={{
                  height: "44px",
                  padding: "12px 16px",
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-regular)",
                  color: "var(--card-foreground)",
                }}
              >
                学段
              </th>
              <th
                className="text-left whitespace-nowrap"
                style={{
                  height: "44px",
                  padding: "12px 16px",
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-regular)",
                  color: "var(--card-foreground)",
                }}
              >
                地区（省/市）
              </th>
              <th
                className="text-left whitespace-nowrap"
                style={{
                  height: "44px",
                  padding: "12px 16px",
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-regular)",
                  color: "var(--card-foreground)",
                }}
              >
                所购买学科
              </th>
              <th
                className="text-left whitespace-nowrap"
                style={{
                  height: "44px",
                  padding: "12px 16px",
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-regular)",
                  color: "var(--card-foreground)",
                }}
              >
                督学老师
              </th>
              <th
                className="text-left whitespace-nowrap"
                style={{
                  height: "44px",
                  padding: "12px 16px",
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-regular)",
                  color: "var(--card-foreground)",
                }}
              >
                激活时间
              </th>
              <th
                className="text-left whitespace-nowrap"
                style={{
                  height: "44px",
                  padding: "12px 16px",
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-regular)",
                  color: "var(--card-foreground)",
                }}
              >
                到期时间
              </th>
              <th
                className="text-left last:rounded-tr-[4px] whitespace-nowrap"
                style={{
                  height: "44px",
                  padding: "12px 16px",
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-regular)",
                  color: "var(--card-foreground)",
                }}
              >
                操作项
              </th>
            </tr>
          </thead>
          <tbody>
            {pageRows.map((row, idx) => (
              <tr key={idx} className="border-b border-border hover:bg-muted/30">
                <td
                  className="px-4 py-3"
                  style={{
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-regular)",
                    color: "var(--card-foreground)",
                  }}
                >
                  {row.name}
                </td>
                <td
                  className="px-4 py-3"
                  style={{
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-regular)",
                    color: "var(--card-foreground)",
                  }}
                >
                  {row.stage}
                </td>
                <td
                  className="px-4 py-3"
                  style={{
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-regular)",
                    color: "var(--card-foreground)",
                  }}
                >
                  {row.province} · {row.city}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    {row.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="inline-flex items-center rounded-[3px] whitespace-nowrap bg-primary/10 text-primary px-[4px] py-[0px]"
                        style={{
                          fontSize: "var(--text-sm)",
                          fontWeight: "var(--font-weight-regular)",
                        }}
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </td>
                <td
                  className="px-4 py-3"
                  style={{
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-regular)",
                    color: "var(--card-foreground)",
                  }}
                >
                  {row.teacher}
                </td>
                <td
                  className="px-4 py-3"
                  style={{
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-regular)",
                    color: "var(--card-foreground)",
                  }}
                >
                  {formatDateOnly(row.activatedAt)}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <span
                      style={{
                        fontSize: "var(--text-base)",
                        fontWeight: "var(--font-weight-regular)",
                        color: "var(--card-foreground)",
                      }}
                    >
                      {formatDateOnly(row.expiredAt)}
                    </span>
                    {expiryBadge(row.expiredAt)}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button
                      className="text-primary hover:underline"
                      style={{
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-regular)",
                      }}
                    >
                      学情
                    </button>
                    <button
                      className="text-primary hover:underline"
                      style={{
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-regular)",
                      }}
                    >
                      订单
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-6 shrink-0">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-border rounded-[var(--radius)] hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            fontSize: "var(--text-base)",
            fontWeight: "var(--font-weight-medium)",
          }}
        >
          上一页
        </button>
        <span
          style={{
            fontSize: "var(--text-base)",
            fontWeight: "var(--font-weight-regular)",
            color: "var(--card-foreground)",
          }}
        >
          共 {filteredRows.length} 条 · 第 {currentPage} / {totalPages} 页
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border border-border rounded-[var(--radius)] hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            fontSize: "var(--text-base)",
            fontWeight: "var(--font-weight-medium)",
          }}
        >
          下一页
        </button>
      </div>
    </div>
  );
}