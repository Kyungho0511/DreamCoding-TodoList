import styles from "./Todo.module.css";
import { useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";

export default function Todo({ todo, onUpdate, onDelete }) {
  const id = todo.id;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={todo.status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.label}>
        {todo.text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <BsFillTrash3Fill />
        </button>
      </span>
    </li>
  );
}
