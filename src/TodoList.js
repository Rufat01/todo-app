import Todo from "./Todo";

export default function TodoList({
  todo, check, onHandleId, onHandleDelete, onHandleClearList,
}) {

  return (
    <>
      <ul className="todo-list">
        {todo?.map((todo) => (
          <Todo
            todo={todo}
            check={check}
            onHandleId={onHandleId}
            onHandleDelete={onHandleDelete} />
        ))}
      </ul>
      {todo?.length !== 0 ? <div className='clear-all'>
        <button onClick={() => onHandleClearList()}>Clear All</button>
      </div> : ''}
    </>
  );
}
