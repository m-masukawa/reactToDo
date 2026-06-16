// src/App.jsx
import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleAddTodo = () => {
    // 必須要件：空文字の追加防止 (.trim()でスペースのみも弾く)
    if (inputText.trim() === "") return;

    const newTodo = {
      id: Date.now(), // 簡易的なユニークID
      text: inputText,
      completed: false,
    };

    // stateを直接変更せず、スプレッド演算子で新しい配列を作る
    setTodos([...todos, newTodo]);
    setInputText(""); // 入力欄のリセット
  };

  return (
    <div className="app" style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Todoアプリ</h1>
      <AddTodoForm
        inputText={inputText}
        onInputChange={setInputText}
        onAddTodo={handleAddTodo}
      />
      <TodoList todos={todos} />
    </div>
  );
}
export default App;