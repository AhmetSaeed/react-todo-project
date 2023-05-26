import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    { id: 1, task: "task-2", completed: false },
    { id: 2, task: "task-3", completed: false },
  ]);

  const [input, setInput] = useState("");

  function handleOnChange(event) {
    setInput(event.target.value);
  }

  function handleOnClick() {
    const todos = {
      id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
      task: input,
      completed: false,
    };
    setTodo([...todo, todos]);
    setInput("");
  }

  function handleOnDelete(value) {
    const deletedItem = todo.filter((filtered) => filtered.id !== value);
    setTodo(deletedItem);
  }

  function handleComplete(value) {
    const updatedTodo = todo.map((item) => {
      if (item.id === value) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodo(updatedTodo);
  }

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add a new task..."
          onChange={handleOnChange}
          value={input}
        />
        <button onClick={handleOnClick}>Add</button>
      </div>
      <ul className="todo-list">
        {todo.map(function (value, index) {
          return (
            <li className={value.completed ? "completed" : ""} key={value.id}>
              {value.id}. {value.task}
              <div className="button-group">
                <button
                  className="complete-button"
                  onClick={() => handleComplete(value.id)}
                >
                  {value.completed ? "Incomplete" : "Complete"}
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleOnDelete(value.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
