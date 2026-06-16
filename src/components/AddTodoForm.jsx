// ToDo追加
function AddTodoForm({ inputText, onInputChange, onAddTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo();
  };

  return (

    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
  
    <div>AddTodoForm コンポーネント</div>
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Todoを入力..." //薄い文字
      />
      <button type="submit">追加</button>
    </form>
    </div>
  );
}
export default AddTodoForm;