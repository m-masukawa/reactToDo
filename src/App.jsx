// src/App.jsx
import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [filter, setFilter] = useState("all");

  // Todo追加
  const handleAddTodo = () => {
    if (inputText.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputText("");
  };

  // Todo削除
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Todo完了
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Todoを絞り込む
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;   // 未完了
    if (filter === "completed") return todo.completed; // 完了済み
    return true; // すべて
  });

  // 未完了のTodo件数
  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="app" style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Todoアプリ</h1>
      <AddTodoForm
        inputText={inputText}
        onInputChange={setInputText}
        onAddTodo={handleAddTodo}
      />
      
      {/* フィルタ */}
      <FilterBar
        currentFilter={filter}
        onFilterChange={setFilter}
        activeCount={activeCount}
      />

      <TodoList
        todos={filteredTodos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
}

export default App;