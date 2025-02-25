import LoginPage from './Components/Login/Login';
import Home from './Components/Home/Home';
import React, { useState, useEffect } from 'react';
import Tasks from './Components/ClassComponents/Tasks';

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
  
  

  useEffect(() => {    
    const isUserLoggedIn = localStorage.getItem('isLoggedIn');
    if (isUserLoggedIn === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (email, password) => {
    console.log('Email:', email, 'Password :', password);
    console.log(isLoggedIn);
    
    // localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
    console.log(isLoggedIn);
    
  }

  const handlerLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
         {!isLoggedIn && <LoginPage onHandleLogin={handleLogin}/>}
         {isLoggedIn && <Home onLogout={handlerLogout}/>} 
         {/* <Tasks /> */}
    </div>
  );
}

export default App;
