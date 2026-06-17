import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete, onUpdateText }) {
  return (
    <div>
      <div style={{ fontSize: "12px", color: "#666", marginBottom: "5px" }}>TodoList</div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onUpdateText={onUpdateText} // 🌟 ここを追加
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;