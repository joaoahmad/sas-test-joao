import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link, Switch } from 'react-router-dom';
import CallList from '../components/call-list/call-list-connected';
import CallDetails from '../components/call-details/call-details-connected';
import NewCall from '../components/new-call/new-call-connected';
import './app.css';

// const menu = [
//   { url: '/', label: 'Home' }
// ]

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='app-list'>
          <Link to='/calls/new'>Add</Link>
          <CallList />
        </div>
        <div className='app-main'>
          <Switch>
            <Route path='/calls/new' component={NewCall} />
            <Route path='/calls/:callId' component={CallDetails} />
            <Route component={NewCall} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
