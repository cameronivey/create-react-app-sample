import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/FantasyPros_10302018_Standard.json';

class App extends Component {
  render() {
    this.dataList = data.map((player) => 
    <tr>
      <td>{ player["Team"] }</td>
      <td>{ player["Overall"] }</td>
      <td>{ player["Rank"] }</td>
      <td>{ player["Pos"] }</td>
    </tr>
  );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            { this.dataList }
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
