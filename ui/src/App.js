import React, { Component, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar';

import logo from './logo.svg';
//import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
/* const apiUrl = `http://localhost:8080`;

class App extends Component {
  state = {
    users: []
  };

  async createUser() {
    await axios.get(apiUrl + '/user-create');
    this.loadUsers();
  }

  async loadUsers() {
    const res = await axios.get(apiUrl + '/users');
    this.setState({
      users: res.data
    });
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => this.createUser()}>Create User</button>
        <p>Users list:</p>
        <ul>
          {this.state.users.map(user => (
            <li key={user._id}>id: {user._id}</li>
          ))}
        </ul>
      </header>
    </div>
  );
    }
}

export default App;
 */