import { createContext } from "react";
import type { ToDo } from "./types";

type ToDoContextType = {
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};
export const ToDoContext = createContext<ToDoContextType>({
  todos: [],
  setTodos: () => {},
});
