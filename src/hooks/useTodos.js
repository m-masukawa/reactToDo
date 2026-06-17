import { useState, useEffect } from "react";

export function useTodos() {
  // ローカルストレージの読み込み
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("react-todo-app:todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // ローカルストレージへ保存
  useEffect(() => {
    localStorage.setItem("react-todo-app:todos", JSON.stringify(todos));
  }, [todos]);

  // 追加
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // 削除
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 完了
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // テキスト編集
  const updateTodoText = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // すべて完了
  const completeAllTodos = () => {
    setTodos(todos.map((todo) => ({ ...todo, completed: true })));
  };

  // 完了済み削除
  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    updateTodoText,
    completeAllTodos,
    clearCompletedTodos,
  };
}