// @flow
import React, { Component } from 'react';
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

    if (isLoading) {
      return (
        <div>
          loading...
        </div>
      )
    }

    return (
      <div className='call-details'>
        <div>{call._id}</div>
        <div>{call.operator}</div>
        <div>{call.state}</div>
        <div>{call.reason}</div>
        <div>{call.type}</div>
        <div>{call.description}</div>
      </div>
    );
  }

}

export default CallDetails;
