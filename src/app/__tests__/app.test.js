import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../root-reducer';
import App from '../app';

const mockStore = (state = {}) => createStore(rootReducer, state, applyMiddleware(thunk));

describe('A <CallDetails> component', () => {
  let wrapper;

  it('should render correctly', () => {
    const store = mockStore();

    wrapper = mount((
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <App />
        </MemoryRouter>
      </Provider>
    ));

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render logged correctly', () => {
    const store = mockStore({
      operator: {
        operator_name: 'Test Name',
      }
    });

    wrapper = mount((
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <App />
        </MemoryRouter>
      </Provider>
    ));

    expect(wrapper.html()).toMatchSnapshot();
  });
});
