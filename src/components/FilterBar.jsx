const FILTERS = [
  { value: "all", label: "すべて" },
  { value: "active", label: "未完了" },
  { value: "completed", label: "完了済み" },
];

function FilterBar({ currentFilter, onFilterChange, activeCount, onCompleteAll, onClearCompleted }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "15px 0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <div style={{ fontSize: "12px", color: "#666" }}>FilterBar</div>
          {FILTERS.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => onFilterChange(value)}
              style={{
                padding: "4px 8px",
                cursor: "pointer",
                backgroundColor: currentFilter === value ? "#0066cc" : "#f0f0f0",
                color: currentFilter === value ? "white" : "black",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontWeight: currentFilter === value ? "bold" : "normal",
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <span style={{ fontSize: "14px", color: "#666" }}>{activeCount}件未完了</span>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={onCompleteAll} style={{ padding: "4px 8px", cursor: "pointer", fontSize: "12px" }}>
          すべて完了にする
        </button>
        <button onClick={onClearCompleted} style={{ padding: "4px 8px", cursor: "pointer", fontSize: "12px", backgroundColor: "#ffcccc", border: "1px solid #ff9999" }}>
          完了済みをすべて削除
        </button>
      </div>
    </div>
  );
}

export default FilterBar;