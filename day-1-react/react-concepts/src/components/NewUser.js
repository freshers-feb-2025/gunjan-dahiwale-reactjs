import React from 'react';
import { useState } from 'react';
import AddUser from './AddUser';

function NewUser() {

    const NewUserHandler = (enteredData) => {
            console.log('New User');
            const data = {...enteredData, id: Math.random().toString()};
             console.log(data);
             return data; 
    }

    return(
        <>
            <AddUser onNewUser={NewUserHandler}/> 
        </>
    )
}

export default NewUser;