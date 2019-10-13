import React from 'react';
import { shallow } from 'enzyme';
import CustomInput from './';

describe('CustomInput', () => {
  let props;
  beforeEach(() => {
    props = {
      name: 'input',
      value: 'great',
      placeholder: 'enter input here',
      showBtn: false,
      onChange: jest.fn(),
      onSubmit: jest.fn()
    }
  })
  it('should render correctly', () => {
    const wrapper = shallow(< CustomInput {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
  it('should render NormalInput when showBtn props is false correctly', () => {
    props = {
      name: 'input',
      value: 'great',
      placeholder: 'enter input here',
      showBtn: false,
      onChange: jest.fn(),
      onSubmit: jest.fn()
    }
    const wrapper = shallow(< CustomInput {...props} />);
    const input = wrapper.find("[data-test='normal-input']")
    expect(input.length).toBe(1);
  });
});
