import React from "react";
import styles from './Tasks.module.css';

class Task extends React.Component {
    render() {
        return (
            <div>
                <li key={this.props.index} className={styles.taskItem}>{this.props.task}</li>
            </div>
        )
    }
}
// function Task(props) {
//     return (
//         <div>
//             <li key={props.index} className={styles.taskItem}>{props.task}</li>
//         </div>
//     )
// }

export default Task;