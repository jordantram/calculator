import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';

describe('Calculator app tests', () => {
  it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('Test operators', () => {
    const wrapper = mount(<App />);

    wrapper.find('Keypad').find('Button').find('.add').simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['0', '+']);
  });
});