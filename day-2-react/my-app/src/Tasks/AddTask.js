import React, { useState, useRef} from 'react';
import styles from './AddTask.module.css';  

const AddTask = (props) => {
    const InputRef = useRef();
  const [task, setTask] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(InputRef.current);
    
    if (task.trim() === '') return;
    props.onAddTask(task);
    setTask('');
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
