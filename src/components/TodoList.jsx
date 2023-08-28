import AddTodo from "./AddTodo";
import Todo from "./Todo";
import styles from "./TodoList.module.css";
import { useEffect, useState } from "react";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => readTodos());
  const handleAdd = (todo) => setTodos((prev) => [...prev, todo]);
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function readTodos() {
  console.log("readTodos");
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
