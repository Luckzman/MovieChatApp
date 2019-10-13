import React, {Component} from 'react';
import {connect} from 'react-redux';
import { List, Icon } from 'semantic-ui-react';
import CustomInput from '../CustomInput';
import {addComment, fetchComments} from '../../store/action';
import './CommentList.scss';

export class CommentList extends Component {
  state = {
    comment: '',
    comments: [],
    displayInput: true
  }

    /**
   * @method handleChange
   * @description This method get user input value from input element
   * @param {object} event This is the event object
   * @return {null}
   */
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

   /**
   * @method handleSubmit
   * @description This handle submission of submission of comments to firebase
   * @param {object} event - This is the event object
   * @returns {null}
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const {addComment} = this.props;
    const { comments, comment, displayInput } = this.state;
    this.setState({comments: [...comments, comment], }, () => {
      addComment(this.state.comments, this.props.title)
      this.setState({displayInput: !displayInput})
    })
  }

  handleShowInput = () => {
    const {displayInput} = this.state;
    this.setState({displayInput: !displayInput})
  }
  render() {
    const {comments} = this.props;
    const {displayInput} = this.state;
    return (
      <>
        <List className="list">
          {comments.loading ? <Icon loading name='blue spinner' size='huge' />
            : comments.data.length ? comments.data.map((newComment, index) => (
          <List.Item
            key={`comment${index}`}
            className="list-item"
            icon='blue arrow alternate circle right'
            content={newComment}
          />)) : <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1570982493/no_comment.jpg" alt="no comment" />
          }
        </List>
        
        {displayInput ? <Icon className="plus-icon" name='blue plus circle' size='big' onClick={this.handleShowInput} />
          : <form onSubmit={this.handleSubmit}>
          <CustomInput 
            className="custom-input"
            placeholder="add comment"
            showBtn={true}
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </form>}
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
