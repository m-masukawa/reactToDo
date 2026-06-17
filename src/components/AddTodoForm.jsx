// ToDo追加

import { useState } from "react";

function AddTodoForm({ inputText, onInputChange, onAddTodo }) {
  // エラーメッセージ用
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // バリデーション
    if (inputText.trim() === "") {
      setError("タスクを入力してください！"); // エラー
      return;
    }

    setError(""); // エラーをクリア
    onAddTodo();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginBottom: "15px" }}>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <div style={{ fontSize: "12px", color: "#666" }}>AddTodoForm コンポーネント</div>
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "5px" }}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => {
              onInputChange(e.target.value);
              if (e.target.value.trim() !== "") setError(""); // エラーを消す
            }}
            placeholder="Todoを入力..."
          />
          <button type="submit">追加</button>
        </form>
      </div>
      {error && <span style={{ color: "red", fontSize: "12px", marginLeft: "155px" }}>{error}</span>}
    </div>
  );
}

export default AddTodoForm;