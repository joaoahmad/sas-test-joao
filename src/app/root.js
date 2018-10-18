import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import App from './app';

class Root extends Component {

  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={App} />
      </BrowserRouter>
    );
  }

}

export default Root;
