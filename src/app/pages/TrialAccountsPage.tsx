export function TrialAccountsPage() {
  return (
    <div className="bg-card rounded-[var(--radius)] shadow-[var(--elevation-sm)] p-6 flex-1 flex flex-col min-h-0">
      
      <p
        className="text-muted-foreground text-center py-12 flex-1 flex items-center justify-center"
        style={{
          fontSize: "var(--text-base)",
          fontWeight: "var(--font-weight-regular)",
        }}
      >
        内测中，敬请期待
      </p>
    </div>
  );
}