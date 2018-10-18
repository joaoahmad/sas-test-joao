// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    const { _id, type, reason, state, description } = call;
    return (
      <Link to={`/calls/${_id}`} className='call-list-item' key={_id}>
        <div className='call-list-item-header'>
          {type}
        </div>
        <div className='call-list-item-header'>
          {reason}
        </div>
        <div className='call-list-item-header'>
          {state}
        </div>
        <div className='call-list-item-description'>
          {description}
        </div>
      </Link>
    )
  }

  render() {
    const { calls, isLoading } = this.props;

    if (isLoading) {
      return (
        <div>
          loading...
        </div>
      )
    }

    return (
      <div className='call-list'>
        {calls.map(this.renderCall, this)}
      </div>
    );
  }

}

export default CallList;
