// ToDo追加
function AddTodoForm({ inputText, onInputChange, onAddTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Todoを入力..."
      />
      <button type="submit">追加</button>
    </form>
  );
}
export default AddTodoForm;