import React from 'react';
import { shallow } from 'enzyme';
import Modal from './';

describe('Modal', () => {
  it('should render correctly', () => {
    const props = {
      children: <></>,
      movieTitle: 'Sing',
      hideModal: false,
      classes:''
    }
    const wrapper = shallow(< Modal {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
