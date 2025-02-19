import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Parent from './ChildToParent/Parent';
import Card from './components/Card';
import Index from './DynamicCSS/Index';

function App() {

  const expenseItems = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Health Insurance', amount: 1294.67, date: new Date(2021, 2, 28) },
    { title: 'Family Insurance', amount: 4294.67, date: new Date(2021, 2, 28) },
    { title: 'House Insurance', amount: 9294.67, date: new Date(2021, 2, 28) }
  ]



  return (
    <div className="App">
      <h1>Lets learn React</h1>
      <h4>Are you ready to learn?</h4>
      {/* <ExpenseItem name={expenseItems[0].title} amount={expenseItems[0].amount} date={expenseItems[0].date}/>
      <ExpenseItem name={expenseItems[1].title} amount={expenseItems[1].amount} date={expenseItems[1].date}/>
      <ExpenseItem name={expenseItems[2].title} amount={expenseItems[2].amount} date={expenseItems[2].date}/>
      <ExpenseItem name={expenseItems[3].title} amount={expenseItems[3].amount} date={expenseItems[3].date}/> */}
      {/* <Card /> */}

      {/* <Parent /> */}
      <Index />

    </div>
  );
}

export default App;
