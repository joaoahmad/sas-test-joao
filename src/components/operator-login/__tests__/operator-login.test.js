import React from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { reducer as formReducer } from 'redux-form';
import OperatorLogin from '../operator-login-connected';
import operatorReducer from '../operator-login-reducer';

const mockStore = (state) => {
  return createStore(combineReducers({
    form: formReducer,
    operator: operatorReducer,
  }, state));
};

describe('A <CallList> component', () => {
  let wrapper;
  let handleSubmit;
  let store;

  beforeEach(() => {
    handleSubmit = jest.fn();
  });

  it('should render correctly', () => {
    store = mockStore({
      form: {},
      operator: {},
    });

    wrapper = mount((
      <Provider store={store}>
        <OperatorLogin handleSubmit={handleSubmit} />
      </Provider>
    ));

    expect(wrapper.render()).toMatchSnapshot();
  });
});
