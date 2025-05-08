import { useContext } from "react";
import { ToDoContext } from "../contexts";

export default function ToDoForm() {
  const { setTodos } = useContext(ToDoContext);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const title = (e.currentTarget[0] as HTMLInputElement).value;
    const description = (e.currentTarget[1] as HTMLInputElement).value;
    if (title === "" || description === "") return;
    setTodos((prev) => [...prev, { title, description }]);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Description" />
        <button style={{ marginLeft: "8px" }} type="submit">
          +
        </button>
      </form>
    </>
  );
}
