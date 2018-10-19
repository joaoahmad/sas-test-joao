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
        <h1>Novo Chamado</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-row'>
            <label>Atendente</label>
            <Input name='operator' component='input' type='text' disabled />
          </div>
          <div className='form-row'>
            <label>Motivo do Chamado</label>
            <Input name='reason' component='select'>
              <option>Dúvidas</option>
              <option>Elogios</option>
              <option>Sugestões</option>
              <option>Reclamações</option>
              <option>Outros</option>
            </Input>
          </div>
          <div className='form-row'>
            <label>Tipo de Chamado</label>
            <Input name='type' component='select'>
              <option>Telefone</option>
              <option>Chat</option>
              <option>Email</option>
            </Input>
          </div>
          <div className='form-row'>
            <label>Estado</label>
            <Input name='state' component='select'>
              {brazilStates.map((state) => <option key={state}>{state}</option>)}
            </Input>
          </div>
          <div className='form-row'>
            <label>Detalhes</label>
            <Input name='description' component='textarea' />
          </div>
          <Button type='submit'>Enviar</Button>
        </form>
      </div>
    );
  }

}

export default NewCall;
