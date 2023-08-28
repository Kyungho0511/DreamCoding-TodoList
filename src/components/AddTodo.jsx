import styles from "./AddTodo.module.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo({ onAdd }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = (e) => {
    const text = input.trim();
    if (text) {
      onAdd({ id: uuidv4(), text, status: "active" });
    }
    setInput("");
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Add Todo"
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
