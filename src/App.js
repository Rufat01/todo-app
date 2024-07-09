import { useEffect, useState } from "react";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState(function(){
    const storedTodo = localStorage.getItem("todos");
    return JSON.parse(storedTodo)
  });

  function handleTodo(newTodo) {
    setTodo((todo) => [...todo, newTodo]);
    setInputValue("");
  }

  function handleId(id) {
    setTodo((todo) =>
      todo.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
    console.log(todo);
  }

  function handleClearList() {
    const confirm = window.confirm("Are you sure delete all todos ?")
    if(confirm) setTodo([]);
  }

  function handleDeleteTodo(id) {
    setTodo((todos) => todos.filter((todo) => todo.id !== id));
  }

  useEffect(function(){
    localStorage.setItem("todos", JSON.stringify(todo))
  }, [todo])

  return (
    <div className="todo-app">
      <Header />
      <Form
        onHandleTodo={handleTodo}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <TodoList
        todo={todo}
        onHandleId={handleId}
        onHandleDelete={handleDeleteTodo}
        onHandleClearList={handleClearList}
      />
    </div>
  );
}


