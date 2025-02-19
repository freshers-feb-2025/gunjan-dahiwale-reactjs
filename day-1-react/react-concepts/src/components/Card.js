import Header from "./Headers";
import AddUser from "./AddUser";
import { useState } from 'react';
import AgeFilter from "./AgeFilter";
const users = [
    {
        id: 1,
        name: 'John Doe',
        age: 28,
        email: 'john.doe@example.com',
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zip: '10001',
        },
        phone: '123-456-7890',
        registeredAt: new Date('2023-05-15T10:30:00'),
        isActive: true,
    },
    {
        id: 2,
        name: 'Jane Smith',
        age: 34,
        email: 'jane.smith@example.com',
        address: {
            street: '456 Oak St',
            city: 'Los Angeles',
            state: 'CA',
            zip: '90001',
        },
        phone: '987-654-3210',
        registeredAt: new Date('2022-11-20T14:45:00'),
        isActive: false,
    },
    {
        id: 3,
        name: 'Alice Johnson',
        age: 24,
        email: 'alice.johnson@example.com',
        address: {
            street: '789 Pine St',
            city: 'Chicago',
            state: 'IL',
            zip: '60601',
        },
        phone: '456-789-0123',
        registeredAt: new Date('2021-08-10T08:15:00'),
        isActive: true,
    },
    {
        id: 4,
        name: 'Bob Brown',
        age: 40,
        email: 'bob.brown@example.com',
        address: {
            street: '321 Elm St',
            city: 'Houston',
            state: 'TX',
            zip: '77001',
        },
        phone: '321-654-0987',
        registeredAt: new Date('2023-01-05T18:00:00'),
        isActive: true,
    },
    {
        id: 5,
        name: 'Charlie Davis',
        age: 30,
        email: 'charlie.davis@example.com',
        address: {
            street: '654 Maple St',
            city: 'San Francisco',
            state: 'CA',
            zip: '94101',
        },
        phone: '789-012-3456',
        registeredAt: new Date('2020-12-12T12:00:00'),
        isActive: false,
    },
];



function Card(props) {
    const classes = 'card ' + props.className;

    const [users, setUsers] = useState([]);

    const onNewUserHandler = (data) => {
        console.log('New User');
        setUsers([...users, data]);
        console.log(data);
        console.log(users);
        
    };

      const [filterAge, setFilterAge] = useState('20');
       
      const setSelectHandler = (selectedValue) => {
          setFilterAge(selectedValue);
           console.log(filterAge);
       }

       const filteredAge = () => {
              return users.filter((user) => {
                return user.age == filterAge;
              });
       }

    return (
        <div>
            <div>
                <AddUser onNewUser={onNewUserHandler} />
            </div>
            <div>
                <h1>Users</h1>
                {/* <Header id={users[0].id} name={users[0].name} age={users[0].age} email={users[0].email} address={users[0].address.street} phone={users[0].phone} date={users[0].registeredAt.toLocaleDateString()} /> */}
                {/* {users.map((user) => {
                    return <Header key={user.id} name={user.name} age={user.age} email={user.email} address={user.address} phone={user.phone} />
                })} */}
                {
                    filteredAge().map((user) => {
                        return <Header key={user.id} name={user.name} age={user.age} email={user.email} address={user.address} phone={user.phone} />
                    })
                }
            </div>
            <div>
                <AgeFilter onAgeChange={setSelectHandler} selectedValue={filterAge}/>
            </div>
        </div>
    )
}

export default Card;