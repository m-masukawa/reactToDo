import { useState } from "react";

function TodoItem({ todo, onToggle, onDelete, onUpdateText }) {
  // 編集モードかどうか
  const [isEditing, setIsEditing] = useState(false);
  // 編集中
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim() === "") return;
    onUpdateText(todo.id, editText); // 文字を更新
    setIsEditing(false); // 編集モードを終了
  };

  return (
    <li style={{ display: "flex", alignItems: "center", gap: "10px", margin: "5px 0" }}>
        <div style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}>TodoItem</div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            style={{ padding: "2px 5px" }}
          />
          <button onClick={handleSave}>保存</button>
          <button onClick={() => setIsEditing(false)}>キャンセル</button>
        </>
      ) : (
        <>
          <span style={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "#aaa" : "inherit",
            flex: 1
          }}>
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>編集</button>
          <button onClick={() => onDelete(todo.id)}>削除</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;