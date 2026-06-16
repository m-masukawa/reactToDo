// ToDo制御してる
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li style={{ display: "flex", alignItems: "center", gap: "10px", margin: "5px 0" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>削除</button>
    </li>
  );
}
export default TodoItem;