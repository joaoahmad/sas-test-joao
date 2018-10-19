// @flow
import React, { Component } from 'react';
import './display-field.css'

type Props = {
  label: String,
  value: any,
}

class DisplayField extends Component<Props> {

  render() {
    const { label, value } = this.props;

    return (
      <div className='display-field'>
        <div className='display-field-label'>{label}</div>
        <div className='display-field-value'>{value}</div>
      </div>
    );
  }

}

export default DisplayField;
