// src/App.jsx
import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar"; // FilterBarをインポート

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [filter, setFilter] = useState("all"); // フィルタ状態を管理するstate ("all", "active", "completed")

  // Todo追加関数
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

  // Todo削除関数
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Todo完了トグル関数
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 【推奨要件】現在のフィルタに合わせて表示するTodoを絞り込む（派生データ）
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;   // 未完了のみ
    if (filter === "completed") return todo.completed; // 完了済みのみ
    return true; // "all" はすべて
  });

  // 【推奨要件】未完了のTodo件数を計算する（派生データ）
  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="app" style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Todoアプリ</h1>
      <AddTodoForm
        inputText={inputText}
        onInputChange={setInputText}
        onAddTodo={handleAddTodo}
      />
      
      {/* フィルタバーの設置 */}
      <FilterBar
        currentFilter={filter}
        onFilterChange={setFilter}
        activeCount={activeCount}
      />

      {/* TodoListに渡す配列を todos から filteredTodos に変更！ */}
      <TodoList
        todos={filteredTodos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
}

export default App;