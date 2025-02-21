import React from 'react';
import styles from './Tasks.module.css';
import Task from './Task';


class TaskList extends React.Component {

    constructor(){
        super();
        this.state = {
            showTasks: false
        }
    }

    handler = () => {
        this.setState((curr) => {
            return {showTasks: !curr.showTasks};
        });
    }

    render(){
     const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];

        return (
            <div className={styles.container}>
                <button
                    className={styles.button}
                    onClick={this.handler.bind(this)}
                >
                    {this.state.showTasks ? 'Hide Tasks' : 'Show Tasks'}
                </button>
                {this.state.showTasks && (
                    <ul className={styles.taskList}>
                        {tasks.map((task, index) => (
                            <Task key={index} task={task}/>
                        ))}
                    </ul>
                )}
            </div>
        )
    }
}

// function TaskList() {
//   const [showTasks, setShowTasks] = useState(false);

//   const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];

//   return (
//     <div className={styles.container}>
//       <button
//         className={styles.button}
//         onClick={() => setShowTasks(!showTasks)}
//       >
//         {showTasks ? 'Hide Tasks' : 'Show Tasks'}
//       </button>

//       {showTasks && (
//         <ul className={styles.taskList}>
//           {tasks.map((task, index) => (
//             <Task key={index} task={task}/>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

export default TaskList;
