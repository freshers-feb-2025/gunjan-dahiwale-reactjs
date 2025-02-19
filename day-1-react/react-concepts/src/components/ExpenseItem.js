import ExpenseDate from './ExpenseDate';
import Card from './Card';
import YearFilter from './YearFilter';
import React, {useState} from 'react';

function ExpenseItem(props) {
  const [filterYear, setFilterYear] = useState('2021');
   
  const setSelectHandler = (selectedValue) => {
      setFilterYear(selectedValue);
       console.log(filterYear);

   }

  return (
    <Card className="expense-item">
      <div>{props.name}</div>
      <div>
        <h2><ExpenseDate date={props.date}/></h2>
        <div>${props.amount}</div>
      </div>
      <div>
          <YearFilter onYearChange={setSelectHandler} selectedValue={filterYear}/>
      </div>
    </Card>
  );
}

export default ExpenseItem; 