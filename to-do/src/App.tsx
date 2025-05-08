import { useState } from "react";
import "./App.css";
import ToDoCard from "./components/ToDoCard";
import ToDoForm from "./components/ToDoForm";
import { ToDoContext } from "./contexts";
import type { ToDo } from "./types";

function App() {
  const [todos, setTodos] = useState<ToDo[]>([
    {
      title: "Title",
      description: "Description",
    },
  ]);

  return (
    <>
      <h1>TO DO</h1>
      <ToDoContext.Provider value={{ todos, setTodos }}>
        <ToDoForm />
        <div style={{ marginBottom: "12px" }}></div>
        {todos.map((todo, index) => (
          <div key={index} style={{ marginTop: "25px" }}>
            <ToDoCard
              title={todo.title}
              description={todo.description}
              handleDelete={() => {
                todos.splice(index, 1);
                setTodos(todos);
              }}
            />
          </div>
        ))}
      </ToDoContext.Provider>
    </>
  );
}

export default App;
