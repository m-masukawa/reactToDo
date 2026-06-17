import { useState } from "react";
import { useTodos } from "./hooks/useTodos"; 
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";

function App() {
  const {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    updateTodoText,
    completeAllTodos,
    clearCompletedTodos,
  } = useTodos();

  const [inputText, setInputText] = useState("");
  const [filter, setFilter] = useState("all");

  // フィルタリング処理
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  // 未完了件数
  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="app" style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Todoアプリ</h1>
      
      <AddTodoForm
        inputText={inputText}
        onInputChange={setInputText}
        onAddTodo={() => addTodo(inputText)} 
      />
      
      <FilterBar
        currentFilter={filter}
        onFilterChange={setFilter}
        activeCount={activeCount}
        onCompleteAll={completeAllTodos} 
        onClearCompleted={clearCompletedTodos} 
      />
      
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onUpdateText={updateTodoText} 
      />
    </div>
  );
}

export default App;