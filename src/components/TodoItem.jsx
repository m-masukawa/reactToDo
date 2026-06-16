// src/components/TodoItem.jsx
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li style={{ display: "flex", alignItems: "center", gap: "10px", margin: "5px 0" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {/* completedがtrueなら取り消し線を引き、文字を薄くする */}
      <span style={{
        textDecoration: todo.completed ? "line-through" : "none",
        color: todo.completed ? "#aaa" : "inherit"
      }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>削除</button>
    </li>
  );
}

export default TodoItem;