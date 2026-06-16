// チェックボックスと取り消し線
function TodoItem({ todo, onToggle, onDelete }) {
  return (

    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
  
    <div>  TodoItem コンポーネント</div>
    <li style={{ display: "flex", alignItems: "center", gap: "10px", margin: "5px 0" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{
        textDecoration: todo.completed ? "line-through" : "none",
        color: todo.completed ? "#aaa" : "inherit"
      }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>削除</button>
    </li>
    </div>
  );
}

export default TodoItem;