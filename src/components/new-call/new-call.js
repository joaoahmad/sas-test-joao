import React, { Component } from 'react';
import Input from '../input/input';
import Button from '../button/button';
import brazilStates from '../../utils/brazil-states.json';
import './new-call.css';

class NewCall extends Component {

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className='new-call'>
        <form onSubmit={handleSubmit}>
          <div>
            <Input name='type' component='select'>
              <option>Telefone</option>
              <option>Chat</option>
              <option>Email</option>
            </Input>
          </div>
          <div>
            <Input name='state' component='select'>
              {brazilStates.map((state) => <option key={state}>{state}</option>)}
            </Input>
          </div>
          <div>
            <Input name='reason' component='select'>
              <option>Dúvidas</option>
              <option>Elogios</option>
              <option>Sugestões</option>
              <option>Outro</option>
            </Input>
          </div>
          <Input
            name='description'
            component='textarea'
          />
          <Button type='submit'>Enviar</Button>
        </form>
      </div>
    );
  }

}

export default NewCall;
