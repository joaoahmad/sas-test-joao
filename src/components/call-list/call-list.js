// @flow
import React, { Component } from 'react';
import './call-list.css';

type Props = {
  loadCalls: Function,
  isLoading: Boolean,
  calls: Array,
}

class CallList extends Component<Props> {
  static defaultProps = {
    isLoading: false,
    calls: [],
  }

  componentDidMount() {
    this.props.loadCalls();
  }

  renderCall(call) {
    const { id, type, reasosn, state, description } = call;
    return (
      <div className='call-list-item' key={id}>
        <div className='call-list-item-header'>

        </div>
        <div className='call-list-item-description'>

        </div>
      </div>
    )
  }

  render() {
    const { calls, isLoading } = this.props;

    return (
      <div className='call-list'>
        {calls.map(this.renderCall, this)}
      </div>
    );
  }

}

export default CallList;
