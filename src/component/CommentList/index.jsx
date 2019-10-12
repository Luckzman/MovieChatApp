import React, {Component} from 'react';
import {connect} from 'react-redux';
import { List } from 'semantic-ui-react';
import CustomInput from '../CustomInput';
import {addComment, fetchComments} from '../../store/action';
import './CommentList.scss';

class CommentList extends Component {
  state = {
    comment: '',
    comments: [],
  }

  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {addComment} = this.props;
    const { comments, comment } = this.state;
    this.setState({comments: [...comments, comment]}, () => addComment(this.state.comments, this.props.title))
  }

  render() {
    const {comments} = this.props;
    return (
      <>
        <List className="list">
          {comments.data.map((newComment, index) => (
          <List.Item
            key={`comment${index}`}
            className="list-item"
            icon='blue arrow alternate circle right'
            content={newComment}
          />)) 
          }
        </List>
        <form onSubmit={this.handleSubmit}>
          <CustomInput 
            className="custom-input"
            placeholder="add comment"
            showBtn={true}
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </form>
      </>
    )
  }
}


const mapStateToProps = (state) => {
  const {
    comments
  } = state;
  return {
    comments
  }
}


export default connect(mapStateToProps, {addComment, fetchComments})(CommentList);
