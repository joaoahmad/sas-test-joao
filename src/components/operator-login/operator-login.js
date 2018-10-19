import React, { Component } from 'react';
import Input from '../input/input';
import Button from '../button/button';
import './operator-login.css';

class OperatorLogin extends Component {

  render() {
    const { operator_name, handleSubmit } = this.props;

    if (operator_name) {
      return null;
    }

    return (
      <div className='operator-login'>
        <div className='operator-login-modal'>
          <form onSubmit={handleSubmit}>
            <h1>Entrar</h1>
            <p>Digite seu nome para continuar</p>
            <Input name='operator_name' component='input' placeholder='Seu nome' />
            <Button type='submit'>Entrar</Button>
          </form>
        </div>
      </div>
    );
  }

}

export default OperatorLogin;
