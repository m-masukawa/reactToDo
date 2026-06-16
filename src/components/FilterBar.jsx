// src/components/FilterBar.jsx
const FILTERS = [
  { value: "all", label: "すべて" },
  { value: "active", label: "未完了" },
  { value: "completed", label: "完了済み" },
];

function FilterBar({ currentFilter, onFilterChange, activeCount }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyDelta: "space-between", gap: "10px", margin: "15px 0" }}>
      <div style={{ display: "flex", gap: "5px" }}>
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
  );
}

export default FilterBar;