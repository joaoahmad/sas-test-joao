import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import CallDetails from '../call-details';
import mockCall from './mock-call.json';

describe('A <CallDetails> component', () => {
  let wrapper;
  let loadCallDetailsSpy;

  beforeEach(() => {
    loadCallDetailsSpy = jest.fn();
  });

  it('should render correctly', () => {
    wrapper = mount((
      <MemoryRouter initialEntries={['/calls/1']} initialIndex={0}>
        <CallDetails
        loadCallDetails={loadCallDetailsSpy}
        call={mockCall}
        match={{
          params: {
            callId: 1,
          }
        }}
      />
      </MemoryRouter>
    ));

    expect(wrapper.render()).toMatchSnapshot();
    expect(loadCallDetailsSpy).toHaveBeenCalled();
  });
});
