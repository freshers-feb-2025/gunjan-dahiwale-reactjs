import React from 'react';
import Toggle from './ToggleButton/Toggle';
import './App.css';
import TaskList from './Tasks/Tasks';

const styles = {
  color: 'pink',
  fontSize: '50px'
}

function App() {
  return (
    <div className="App">
      <h1 style={styles}>My First React App</h1>
      {/* <Toggle /> */}
      <TaskList/>
    </div>
  );
}

export default App;
