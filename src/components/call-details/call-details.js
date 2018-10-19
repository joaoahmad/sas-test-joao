// @flow
import React, { Component } from 'react';
import moment from 'moment';
import DisplayField from '../display-field/display-field';
import './call-details.css';

type Props = {
  match: {
    params: {
      callId: String|Number,
    }
  },
}

class CallDetails extends Component<Props> {
  componentDidMount() {
    this.loadData();
  }

  componentWillReceiveProps(nextProps) {
    const callId = this.getCallId(this.props);
    const nextCallId = this.getCallId(nextProps);

    if (callId !== nextCallId) {
      this.loadData(nextProps);
    }
  }

  getCallId(props) {
    return props.match.params.callId;
  }

  loadData(props = this.props) {
    const callId = this.getCallId(props);
    props.loadCallDetails(callId);
  }

  render() {
    const { isLoading, call } = this.props;
    const { _id, operator, state, reason, type, description, created_at } = call;

    if (isLoading) {
      return (
        <div>
          loading...
        </div>
      )
    }

    return (
      <div className='call-details'>
        <h1>Atendimento <span>ID: {_id}</span></h1>
        <DisplayField label='Data' value={moment(created_at).format('DD/MM/YYYY HH:mm:ss')} />
        <DisplayField label='Motivo do chamado' value={reason} />
        <DisplayField label='Tipo de chamado' value={type} />
        <DisplayField label='Estado' value={state} />
        <DisplayField label='Atendente' value={operator} />
        <DisplayField label='Detalhes' value={description} />
      </div>
    );
  }

}

export default CallDetails;
