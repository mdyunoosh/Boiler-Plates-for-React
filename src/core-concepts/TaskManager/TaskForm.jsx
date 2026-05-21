import { useState } from "react";
import "./TaskManager.css";

export default function TaskForm({ addTask }) {
    const [value, setValue] = useState("");

    const TaskNew = (e) => {
        e.preventDefault();
        if (!value.trim()) return;
        setValue("");
        addTask(value);
    };

    return (
        <form className="tm-form" onSubmit={TaskNew}>
            <input
                className="tm-input"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="What needs to be done?"
            />
            <button className="tm-btn" type="submit">+ Add</button>
        </form>
    );
}