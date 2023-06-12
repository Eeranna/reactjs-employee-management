import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import StateTestComponent from './components/StateTestComponent';
import Handler from './components/Handler';
import Home from './components/Home';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
    })
  }
  return (
    <div>
        <Router>
              <HeaderComponent />
              {/* <StateTestComponent /> */}
              <Handler />
                <div className="container">
                    <Routes> 
                          <Route path = "/" exact element = {<ListEmployeeComponent />}></Route>
                          <Route path = "/employees" element = {<ListEmployeeComponent />}></Route>
                          <Route path = "/add-employee/:id" element = {<CreateEmployeeComponent />}></Route>
                          <Route path = "/view-employee/:id" element = {<ViewEmployeeComponent />}></Route>
                          {/* <Route path = "/update-employee/:id" element = {<UpdateEmployeeComponent />}></Route> */}
                          <Route path = "/home" element = {<Home />}></Route>
                          <Route path = "/add-user" element = {<AddUser onAddUser={addUserHandler} />}></Route>
                    </Routes>
                    <UsersList users={usersList} />
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;