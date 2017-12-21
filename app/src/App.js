import React, {
    Component
} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import logo from './logo.gif';
import './App.css';
import Users from './Users.js';
import NewUserForm from './newUserForm.jsx'
import About from './About.jsx'

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

//       <Router>
//   <div>
//     <ul>
//       <li><Link to="/about">About</Link></li>
//     </ul>
//     <hr/>
//     <Route path="/about" component={About}/>
//   </div>
// </Router>
