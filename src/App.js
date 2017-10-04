import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Balance from './Balance'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.getAccountOwner = this.getAccountOwner.bind(this)
  }

  getAccountOwner(req) {
    axios.get(req)
    .then((response) => response)
    }

  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Budget</h1>
        </header>
        <Balance 
        getAccountOwner={this.getAccountOwner}
        />
      </div>
          
     
    );
  }
}

export default App;
