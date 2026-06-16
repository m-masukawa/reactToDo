// リスト
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete }) {
  return (

<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
  
    <div>TodoList コンポーネント</div>

    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
    </div>
  );
}
export default TodoList;