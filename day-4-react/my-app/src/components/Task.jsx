import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';
import styles from './Task.module.css'; 

const Task = () => {
    const dispatch = useDispatch();
    const taskRef = useRef();

    function HandleAddTask() {
        const task = taskRef.current.value.trim();
        if (!task) return;

        const newTask = {
            id: Date.now(),
            task: task
        };
        console.log("Task to be added", newTask);

        dispatch(addTask(newTask));
        taskRef.current.value = '';
    }
    

    return (
        <div className={styles.taskContainer}> 
            <input type="text" ref={taskRef} className={styles.inputBox} placeholder="Enter task..." />
            <button onClick={HandleAddTask} className={styles.addButton}>Add Task</button>
        </div>
    );
};

export default Task;
