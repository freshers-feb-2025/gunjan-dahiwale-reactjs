import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../actions';
import styles from './TaskList.module.css'; 

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);

    const dispatch = useDispatch();

    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id));
    };

    if (!Array.isArray(tasks) || tasks.length === 0) {
        return <p className={styles.noTasks}>No tasks available.</p>;
    }


    return (
        <div className={styles.taskListContainer}> 
            <h1>Tasks</h1>
            <ul className={styles.taskList}>   
                {tasks.map((task) => (
                    <li key={task.id} className={styles.taskItem}>
                        <span className={styles.taskText}>{task.task}</span>
                        <button onClick={() => handleDeleteTask(task.id)} className={styles.deleteButton}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
