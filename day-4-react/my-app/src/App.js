import Task from './components/Task';
import TaskList from './components/TaskList';
import './App.css';
import { useState, useEffect, useCallback } from 'react';
import AddPeople from './components/AddPeople';

function App() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // useEffect(() => {
  //   fetchPeopleList();
  // }, [fetchPeopleList])

  const fetchPeopleList = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('https://react-a5c8d-default-rtdb.firebaseio.com/people.json');

      if (!response.ok)
        throw new Error("Something went wrong!!");

      const data = await response.json();

      const tranformedData = data.results.map((people) => {
        return {
          name: people.name,
          height: people.height,
          gender: people.gender,
          birthyear: people.birth_year
        };
      });
      setPeople(tranformedData);
      console.log(tranformedData);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  });

  async function handleAddPerson(people)
  {
      console.log("response");
      
      const response = await fetch('https://react-a5c8d-default-rtdb.firebaseio.com/people.json', {
        method: 'POST',
        body: JSON.stringify(people),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response);
      
      if(!response.ok)
        throw new Error("Something went wrong");
      
      const data = await response.json();
      console.log("Data added", data);
      
  }
  
  return (
    <div className="App">
      {/* <Task />
      <TaskList /> */}
      <div>
        <button onClick={fetchPeopleList}>Fetch movies</button>
        <AddPeople onAddPerson={handleAddPerson}/>
        {!loading && <div>
          {people.map((person) => (
            <li key={person.id}>
              {person.name} - {person.height} - {person.gender}  {person.birth_year}
            </li>
          ))}
        </div>}
        {!loading && people.length === 0 && <p>No people found</p>}
        {!loading && error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
