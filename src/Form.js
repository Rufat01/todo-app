export default function Form({ onHandleTodo, inputValue, setInputValue }) {
  function handleValue(e) {
    e.preventDefault();

    const id = crypto.randomUUID();

    const newTodo = {
      id: id,
      text: inputValue,
      checked: false,
    };
    if (!inputValue) return;
    onHandleTodo(newTodo);
  }

  return (
    <form className="form" onSubmit={handleValue}>
      <input
        type="text"
        placeholder="Please enter todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} />
      <button>+</button>
    </form>
  );
}
