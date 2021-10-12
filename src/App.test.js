import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';

describe('Calculator app tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('Clear button should reset the result to zero', () => {
    wrapper.find('Keypad').find('Button').find('.one').simulate('click');
    wrapper.find('Keypad').find('Button').find('.two').simulate('click');
    wrapper.find('Keypad').find('Button').find('.three').simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['1', '2', '3']);
    wrapper.find('Keypad').find('Button').find('.clear').first().simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['0']);
  });

  it('Leading zeros should be removed from operands', () => {
    wrapper.find('Keypad').find('Button').find('.one').simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['1']);
    wrapper.find('Keypad').find('Button').find('.add').simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['1', '+']);
    wrapper.find('Keypad').find('Button').find('.zero').simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['1', '+', '0']);
    wrapper.find('Keypad').find('Button').find('.two').simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['1', '+', '2']);
  });

  it('Basic operators test', () => {
    wrapper.find('Keypad').find('Button').find('.one').simulate('click');
    wrapper.find('Keypad').find('Button').find('.zero').simulate('click');
    wrapper.find('Keypad').find('Button').find('.add').simulate('click');
    wrapper.find('Keypad').find('Button').find('.two').simulate('click');
    wrapper.find('Keypad').find('Button').find('.multiply').simulate('click');
    wrapper.find('Keypad').find('Button').find('.two').simulate('click');
    wrapper.find('Keypad').find('Button').find('.subtract').simulate('click');
    wrapper.find('Keypad').find('Button').find('.six').simulate('click');
    wrapper.find('Keypad').find('Button').find('.divide').simulate('click');
    wrapper.find('Keypad').find('Button').find('.three').simulate('click');
    wrapper.find('Keypad').find('Button').find('.subtract').simulate('click');
    wrapper.find('Keypad').find('Button').find('.nine').simulate('click');
    wrapper.find('Keypad').find('Button').find('.equals').first().simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['3']);
    wrapper.find('Keypad').find('Button').find('.exponent').simulate('click');
    wrapper.find('Keypad').find('Button').find('.three').simulate('click');
    wrapper.find('Keypad').find('Button').find('.close-parenthesis').first().simulate('click');
    wrapper.find('Keypad').find('Button').find('.equals').first().simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['2', '7']);
    wrapper.find('Keypad').find('Button').find('.square').simulate('click');
    wrapper.find('Keypad').find('Button').find('.equals').first().simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['7', '2', '9']);
  });

  it('Basic functions test', () => {
    wrapper.find('Keypad').find('Button').find('.sqrt').simulate('click');
    wrapper.find('Keypad').find('Button').find('.nine').simulate('click');
    wrapper.find('Keypad').find('Button').find('.close-parenthesis').first().simulate('click');
    wrapper.find('Keypad').find('Button').find('.equals').first().simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['3']);
  });

  it('Two decimals cannot be placed in a single operand', () => {
    wrapper.find('Keypad').find('Button').find('.one').simulate('click');
    wrapper.find('Keypad').find('Button').find('.decimal').simulate('click');
    wrapper.find('Keypad').find('Button').find('.two').simulate('click');
    wrapper.find('Keypad').find('Button').find('.decimal').simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['1', '.', '2']);
    wrapper.find('Keypad').find('Button').find('.equals').first().simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['1', '.', '2']);
  });

  it('Two decimals cannot be placed in a single operand', () => {
    wrapper.find('Keypad').find('Button').find('.one').simulate('click');
    wrapper.find('Keypad').find('Button').find('.decimal').simulate('click');
    wrapper.find('Keypad').find('Button').find('.two').simulate('click');
    wrapper.find('Keypad').find('Button').find('.decimal').simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['1', '.', '2']);
    wrapper.find('Keypad').find('Button').find('.equals').first().simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['1', '.', '2']);
  });

  it('Valid parentheses', () => {
    wrapper.find('Keypad').find('Button').find('.open-parenthesis').first().simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['(']);
    wrapper.find('Keypad').find('Button').find('.close-parenthesis').first().simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['(']);
    wrapper.find('Keypad').find('Button').find('.two').simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['(', '2']);
    wrapper.find('Keypad').find('Button').find('.open-parenthesis').first().simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['(', '2']);
    wrapper.find('Keypad').find('Button').find('.add').simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['(', '2', '+']);
    wrapper.find('Keypad').find('Button').find('.close-parenthesis').first().simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['(', '2', '+']);
    wrapper.find('Keypad').find('Button').find('.open-parenthesis').first().simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['(', '2', '+', '(']);
    wrapper.find('Keypad').find('Button').find('.one').simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['(', '2', '+', '(', '1']);
    wrapper.find('Keypad').find('Button').find('.open-parenthesis').first().simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['(', '2', '+', '(', '1']);
    wrapper.find('Keypad').find('Button').find('.close-parenthesis').first().simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['(', '2', '+', '(', '1', ')']);
    wrapper.find('Keypad').find('Button').find('.equals').first().simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['(', '2', '+', '(', '1', ')']);
    wrapper.find('Keypad').find('Button').find('.close-parenthesis').first().simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['(', '2', '+', '(', '1', ')', ')']);
    wrapper.find('Keypad').find('Button').find('.equals').first().simulate('click');
    expect(wrapper.find('Display').props().input).toEqual(['3']);
  });
});