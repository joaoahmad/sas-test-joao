import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import CallList from '../call-list';
import mockCalls from './mock-calls.json';

describe('A <CallList> component', () => {
  let wrapper;
  let loadCallsSpy;

  beforeEach(() => {
    loadCallsSpy = jest.fn();
  });

  it('should render correctly', () => {
    wrapper = mount((
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <CallList loadCalls={loadCallsSpy} />
      </MemoryRouter>
    ));

    expect(wrapper.render()).toMatchSnapshot();
    expect(loadCallsSpy).toHaveBeenCalled();
  });

  it('should render a list correctly', () => {
    wrapper = mount((
      <MemoryRouter initialEntries={['/', '/calls/:id']} initialIndex={0}>
        <CallList loadCalls={loadCallsSpy} calls={mockCalls} />
      </MemoryRouter>
    ));

    expect(wrapper.render()).toMatchSnapshot();
    expect(loadCallsSpy).toHaveBeenCalled();
  });
});
