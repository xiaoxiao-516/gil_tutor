const supervisorRows = [
  { name: "李小明老师", roleType: "试听课", studentCount: 18, joinedAtTs: new Date("2025-08-01").getTime() },
  { name: "王晓彤老师", roleType: "正价课", studentCount: 26, joinedAtTs: new Date("2024-11-15").getTime() },
  { name: "陈子涵老师", roleType: "正价课", studentCount: 22, joinedAtTs: new Date("2025-02-20").getTime() },
  { name: "周嘉宁老师", roleType: "试听课", studentCount: 14, joinedAtTs: new Date("2025-05-09").getTime() },
  { name: "赵一帆老师", roleType: "正价课", studentCount: 20, joinedAtTs: new Date("2024-09-03").getTime() },
];

export function SupervisorManagementPage() {
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
        className={`inline-flex items-center rounded-[3px] whitespace-nowrap ${
          isPaid ? "bg-chart-1/10 text-chart-1" : "bg-chart-3/10 text-chart-3"
        } px-[4px] py-[0px]`}
        style={{
          fontSize: "var(--text-sm)",
          fontWeight: "var(--font-weight-regular)",
        }}
      >
        {type}
      </span>
    );
  };

  return (
    <div className="bg-card rounded-[var(--radius)] shadow-[var(--elevation-sm)] p-6">
      <div className="flex items-center justify-between mb-6">
        <span
          style={{
            fontSize: "var(--text-lg)",
            fontWeight: "var(--font-weight-bold)",
            color: "var(--card-foreground)",
          }}
        >
          老师列表
        </span>
        <button
          className="px-4 py-2 bg-primary text-primary-foreground rounded-[var(--radius)] hover:opacity-90 transition-opacity"
          style={{
            fontSize: "var(--text-base)",
            fontWeight: "var(--font-weight-medium)",
          }}
        >
          + 创建督学老师
        </button>
      </div>

      <div className="overflow-x-auto rounded-tl-[4px] rounded-tr-[4px] overflow-clip">
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
                姓名（老师）
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
                类型
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
                履约中
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
                在职时长
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
            {supervisorRows.map((row, idx) => (
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
                <td className="px-4 py-3">{roleTypeBadge(row.roleType)}</td>
                <td className="px-4 py-3">
                  <button
                    className="text-primary hover:underline"
                    style={{
                      fontSize: "var(--text-base)",
                      fontWeight: "var(--font-weight-regular)",
                    }}
                  >
                    {row.studentCount} 人
                  </button>
                </td>
                <td
                  className="px-4 py-3"
                  style={{
                    fontSize: "var(--text-base)",
                    fontWeight: "var(--font-weight-regular)",
                    color: "var(--card-foreground)",
                  }}
                >
                  {formatTenure(row.joinedAtTs)}
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
                      调整角色
                    </button>
                    <button
                      className="text-destructive hover:underline"
                      style={{
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-regular)",
                      }}
                    >
                      操作离职
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}