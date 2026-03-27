interface URLPopoverProps {
  row: any;
  position: { x: number; y: number };
  onClose: () => void;
  onDelete: (rowId: string) => void;
  getExpireTs: (row: any) => number;
  getUrlState: (row: any) => string;
  formatDateTime: (ts: number) => string;
}

export function URLPopover({
  row,
  position,
  onClose,
  onDelete,
  getExpireTs,
  getUrlState,
  formatDateTime,
}: URLPopoverProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(row.rawUrl);
      alert("链接已复制。");
    } catch {
      alert("复制失败，请手动复制。");
    }
  };

  const handleOpen = () => {
    window.open(row.rawUrl, "_blank");
  };

  const handleDelete = () => {
    if (confirm("确定要删除此URL吗？")) {
      onDelete(row.id);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose}></div>
      <div
        className="fixed z-50 bg-card rounded-[16px] p-4 w-96"
        style={{
          left: position.x,
          top: position.y,
          boxShadow: "0px 8px 32px 0px rgba(16, 18, 25, 0.1)",
        }}
      >
        <div
          className="mb-2"
          style={{
            fontSize: "var(--text-sm)",
            fontWeight: "var(--font-weight-semibold)",
            color: "var(--card-foreground)",
          }}
        >
          原始诊断URL
        </div>
        <div
          className="mb-2 p-2 bg-muted/30 rounded break-all"
          style={{
            fontSize: "var(--text-sm)",
            fontWeight: "var(--font-weight-regular)",
            color: "var(--card-foreground)",
          }}
        >
          {row.rawUrl}
        </div>
        <div
          className="mb-4 text-muted-foreground"
          style={{
            fontSize: "var(--text-sm)",
            fontWeight: "var(--font-weight-regular)",
          }}
        >
          状态：{getUrlState(row)} ｜ 默认有效期：3天 ｜ 生效至：{formatDateTime(getExpireTs(row))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleOpen}
            className="flex-1 px-4 py-2 border border-border rounded-[var(--radius)] hover:bg-muted transition-colors"
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            打开链接
          </button>
          <button
            onClick={handleCopy}
            className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-[var(--radius)] hover:opacity-90 transition-opacity"
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            复制URL
          </button>
          <button
            onClick={handleDelete}
            className="flex-1 px-4 py-2 bg-destructive text-destructive-foreground rounded-[var(--radius)] hover:opacity-90 transition-opacity"
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            删除URL
          </button>
        </div>
      </div>
    </>
  );
}