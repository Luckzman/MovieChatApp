import React from 'react';
import { shallow } from 'enzyme';
import MovieTable from './';

describe('MovieTable', () => {
  let props, wrapper;
  beforeEach(() => {
    props = {
      triggerModal: jest.fn(),
      movieData: [{title: 'able'}]
    }
    wrapper = shallow(< MovieTable {...props} />);
  })
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should be able to run onChangePage method when component is called', () => {
    expect(wrapper.instance().onChangePage).toBeInstanceOf(Function);
  });
  it('should be able to run filterByGenre method when component is called', () => {
    expect(wrapper.instance().filterByGenre).toBeInstanceOf(Function);
  });
  it('should be able to run filterMovie method when component is called', () => {
    expect(wrapper.instance().filterMovie).toBeInstanceOf(Function);
  });
  it('should be able to run handleChange method when component is called', () => {
    expect(wrapper.instance().handleChange).toBeInstanceOf(Function);
  });
});
