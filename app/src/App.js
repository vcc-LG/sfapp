import React, { Component } from 'react';
import logo from './logo.gif';
import './App.css';
import Users from './Users.js';
import NewUserForm from './newUserForm.jsx'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">League app</h1>
        </header>
        <Users></Users>
        <hr/>
        <NewUserForm></NewUserForm>
      </div>
    );
  }
}

export default App;
