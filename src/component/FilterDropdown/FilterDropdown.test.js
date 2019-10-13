import React from 'react';
import { shallow } from 'enzyme';
import FilterDropdown from './';

describe('FilterDropdown', () => {
  it('should render correctly', () => {
    const wrapper = shallow(< FilterDropdown />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should be able to run handleChange method when component is called', () => {
    const wrapper = shallow(< FilterDropdown />);
    expect(wrapper.instance().handleChange).toBeInstanceOf(Function);
  });
});
