import React, { Component } from 'react';
import CallList from '../components/call-list/call-list-connected';
import CallDetails from '../components/call-details/call-details-connected';
import './app.css';

// const menu = [
//   { url: '/', label: 'Home' }
// ]

class App extends Component {
  render() {
    return (
      <div className="app">
        <CallList />
        <CallDetails />
      </div>
    );
  }
}

export default App;
