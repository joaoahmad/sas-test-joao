// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './button.css';

type Props = {
  type: String,
  color: String
}

class Button extends Component<Props> {
  render() {
    const { type, color, className } = this.props;
    const ButtonComponent = type === 'link' ? Link : 'button';
    const classes = classnames('button', {
      [`button--${color}`]: color,
    }, className);

    return (
      <ButtonComponent {...this.props} className={classes} />
    );
  }
}

export default Button;
