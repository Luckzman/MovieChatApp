import React from 'react';
import { List } from 'semantic-ui-react';
import Input from '../CustomInput';
import './CommentList.scss';

const CommentList = () => (
  <>
    <List className="list">
      <List.Item
        className="list-item"
        icon='teal arrow alternate circle right'
        content='Semantic UI'
      />
      <List.Item
        className="list-item"
        icon='teal arrow alternate circle right'
        content='Flex Box '
      />
    </List>
    <Input className="input" placeholder="add comment" showBtn={true} />
  </>
)

export default CommentList;
