import { useState } from "react";
import TaskForm from "./TaskForm";
import "./TaskManager.css";

export default function TaskManager() {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        const newTask = { id: Date.now(), text, completed: false };
        setTasks([...tasks, newTask]);
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const done = tasks.filter(t => t.completed).length;

    return (
        <div className="tm-wrap">
            <div className="tm-header">
                <h1 className="tm-title">Task<span>.</span></h1>
                <p className="tm-count">
                    {tasks.length === 0 ? "0 tasks" : `${done}/${tasks.length} complete`}
                </p>
            </div>

            <TaskForm addTask={addTask} />

            <ul className="tm-list">
                {tasks.length === 0 ? (
                    <p style={{ textAlign: "center", color: "#aaa", fontSize: "13px", padding: "2rem" }}>
                        No tasks yet — add one above
                    </p>
                ) : (
                    tasks.map(task => (
                        <li key={task.id} className={`tm-item ${task.completed ? "done" : ""}`}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(task.id)}
                            />
                            <span className="tm-text">{task.text}</span>
                            <button className="tm-del" onClick={() => deleteTask(task.id)}>✕</button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}