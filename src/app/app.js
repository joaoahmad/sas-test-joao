import React, { Component } from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import CallList from '../components/call-list/call-list-connected';
import CallDetails from '../components/call-details/call-details-connected';
import NewCall from '../components/new-call/new-call-connected';
import OperatorLogin from '../components/operator-login/operator-login-connected';
import Navigation from '../components/navigation/navigation';
import Button from '../components/button/button';
import './app.css';

// const menu = [
//   { url: '/', label: 'Home' }
// ]

class App extends Component {
  render() {
    return (
      <div>
        <div className='app'>
          <OperatorLogin />
          <div className='app-navigation'>
            <Navigation />
          </div>
          <div className='app-list'>
            <Button type='link' to='/calls/new' color='white' className='button-new'>Add Chamado</Button>
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
      </div>
    );
  }
}

export default App;
