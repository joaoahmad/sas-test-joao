import React, { Component } from 'react';
import { Field } from 'redux-form';

class Input extends Component {

  render() {
    return (
      <Field {...this.props} />
    );
  }

}

export default Input;
