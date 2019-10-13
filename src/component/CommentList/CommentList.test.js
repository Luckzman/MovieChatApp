import React from 'react';
import { shallow } from 'enzyme';
import { CommentList } from './';

describe('CommentList', () => {
  it('should render correctly', () => {
    const props = {
      comments: {data: ['cool', 'calm'] }
    }
    const wrapper = shallow(< CommentList {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
