import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import rootReducer from '../../../app/root-reducer';
import NewCall from '../new-call-connected';

const mockStore = (state = {}) => createStore(rootReducer, state, applyMiddleware(thunk));

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
    });

    wrapper = mount((
      <Provider store={store}>
        <NewCall handleSubmit={handleSubmit} />
      </Provider>
    ));

    expect(wrapper.render()).toMatchSnapshot();
  });
});
