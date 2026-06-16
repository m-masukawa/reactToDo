// src/App.jsx
import { useState } from "react";
// 原因②の修正：子コンポーネントを正しくインポートする
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  // 原因①の修正：Todoリストと入力テキストの状態（state）を定義する
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  // Todo追加関数
  const handleAddTodo = () => {
    if (inputText.trim() === "") return; // 空文字の追加防止

    const newTodo = {
      id: Date.now(), // ユニークなID
      text: inputText,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputText(""); // 入力欄をリセット
  };

  // 必須要件：Todo削除 (filterを使用)
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 必須要件：Todo完了トグル (mapとスプレッド演算子を使用)
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="app" style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Todoアプリ</h1>
      <AddTodoForm
        inputText={inputText}
        onInputChange={setInputText}
        onAddTodo={handleAddTodo}
      />
      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
}

export default App;