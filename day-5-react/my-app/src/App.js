import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Counter from './Counter';
import UsersList from './components/UserList';
import RegistrationForm from './components/Form';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './context/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Table from './components/Table';
import Index from './components/Index';

function App() {
  return (
    // <div className="App">
    //     {/* <Counter/> */}
    //     {/* <UsersList/> */}
    //     <RegistrationForm/>
    // </div>
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route  path='/login' element={<RegistrationForm/>}/>
            <Route path = '/' element={<Index/>}/>
            <Route path='/' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
