// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import classnames from 'classnames';
import map from 'lodash/map';
import reasonColor from '../../utils/reason-color';
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
    const { _id, type, reason, state, operator, created_at, description } = call;

    return (
      <article className='call-list-item' key={_id}>
        <Link to={`/calls/${_id}`}>
          <div className='call-list-item-header'>
            <div className='call-list-item-header-left'>
              <div className='call-list-item-infos'>
                <div className={classnames('call-list-item-reason', `call-list-item-reason--${reasonColor(reason)}`)}>
                  <span>{reason}</span>
                </div>
                <div className='call-list-item-type'>{type}</div>
                <div className='call-list-item-state'>{state}</div>
              </div>
              <div className='call-list-item-operator'>Atendente: {operator}</div>
            </div>
            <div className='call-list-item-header-right'>
              <time className='call-list-item-date'>
                <span>{moment(created_at).format('DD/MM/YYYY')}</span>
                <span>{moment(created_at).format('HH:mm')}</span>
              </time>
            </div>
          </div>
          <div className='call-list-item-description'>{description}</div>
        </Link>
    </article>
  )
}

renderGroup(calls, key) {
  return (
    <div className='call-list-group' key={key}>
      <div className='call-list-group-title'>{key}</div>
      <div className='call-list-group-list'>
        {calls.map(this.renderCall, this)}
      </div>
    </div>
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
      {map(calls, this.renderGroup.bind(this))}
    </div>
  );
}

}

export default CallList;
