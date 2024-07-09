export default function Todo({ todo, onHandleId, onHandleDelete }) {
  return (
    <>
      <li
        style={todo.checked ? { textDecoration: "line-through", color: "grey" } : {}}
      >
        <span
          className={`checkboxs ${todo.checked && "active"}`}
          value={todo.checked}
          onClick={() => onHandleId(todo.id)}
        ></span>
        {todo.text}
        <span
          className="delete"
          onClick={() => onHandleDelete(todo.id)}
          style={todo.checked === false ? { display: "none" } : {}}
        >
          &times;
        </span>
      </li>
    </>
  );
}
