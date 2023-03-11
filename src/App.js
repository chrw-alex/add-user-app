import { useState } from 'react';
import UsersForm from './components/UsersForm/UsersForm';
import Modal from './components/Modal/Modal'
import Users from './components/Users/Users';
import './App.css';

const App = () => {

  const [users, setUsers] = useState([])
  const [validationError, setValidationError] = useState('')

  const addUser = (name, age) => {
    const newUser = {
      id: Math.random().toString(),
      name,
      age
    }

    setUsers((prevUsers) => {
      return [newUser, ...prevUsers]
    })
  }

  return (
    <>
      {validationError && <Modal validationError={validationError} setValidationError={setValidationError} />}
      <div className='App'>
        <UsersForm addUser={addUser} setValidationError={setValidationError} />
        <Users users={users} />
      </div>
    </>
  );
}

export default App
