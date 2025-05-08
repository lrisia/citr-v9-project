export default function ToDoCard(props: {
  title: string;
  description: string;
  handleDelete: () => void;
}) {
  return (
    <div
      className="todo-card"
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        gap: "0.5rem",
        width: "400px",
        backgroundColor: "#1a1a1a",
        borderRadius: "12px",
        padding: "1rem",
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
        color: "#f5f5f5",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateRows: "auto auto",
          gap: "0.1rem",
          textAlign: "left",
        }}
      >
        <h2 style={{ margin: 0 }}>{props.title}</h2>
        <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: "1.4" }}>
          {props.description}
        </p>
      </div>
      <div
        id="todo-button"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.5rem",
          alignSelf: "center",
        }}
      >
        {/* <button>Edit</button> */}
        <button onClick={props.handleDelete}>Delete</button>
      </div>
    </div>
  );
}
