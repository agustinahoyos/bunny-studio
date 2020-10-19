import React from 'react';
import Users from './components/Users'
import './App.css';
import UsersForm from './components/UsersForm';


function App() {
  return (
    <div className="App">
   
     <h1>Tasks organizer</h1>
     <div> <UsersForm className="UsersForm"/></div>
     
        <Users className="Users"/>

    </div>
  );
}

export default App;
