import React, { useState } from 'react';
import listStyles from './Tasks.module.css';
import AddTask from './AddTask';

const TaskList = (props) => {
    const [tasks, setTasks] = useState([]);

    const addTaskHandler = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    return (
        <>
            <h1>Task Manager</h1>
            <AddTask onAddTask={addTaskHandler} />
            <div>
                <ul className={listStyles.taskList}>
                    {tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default TaskList;