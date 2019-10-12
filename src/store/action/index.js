import firebase from 'firebase';
import { actionTypes } from '../actionTypes';
import {
  getMovieComment,
  addMovieComment,
  updateMovieComment
} from '../../utils/firebaseHelpers';


export const fetchComments = (title) => {
  return (dispatch) => {
    console.log(title, 'title')
    return getMovieComment(title)
      .get().then((querySnapshot) => {
        if(!querySnapshot.empty){
          querySnapshot.forEach(doc => {
            dispatch({
              type: actionTypes.FETCH_COMMENTS_SUCCESS,
              payload: doc.data().comment
            })
          })
        } else{
            dispatch({
              type: actionTypes.NO_COMMENT,
            })
        }
      })
      .catch(function(error) {dispatch({
          type: actionTypes.FETCH_COMMENTS_FAILURE,
          payload: error
        })
      });
  }
}

export const addComment = (comment, title) => {
  return (dispatch, getState) => {
    return getMovieComment(title)
    .get().then((querySnapshot) => {
      // console.log(doc.id, 'update')
      if(querySnapshot.empty){
        return addMovieComment({comment, title})
        .then((doc) => {
            console.log(doc.id, 'add')
            dispatch({
              type: actionTypes.ADD_COMMENT_SUCCESS,
              payload: {message:"comment added successfully",
              comment}
            })
          })
          .catch(error => {
            dispatch({
              type: actionTypes.ADD_COMMENT_FAILURE,
              payload: error
            })
          })
          
        } else {
            querySnapshot.forEach(doc => {
              console.log(comment[0],'coment1')
              return updateMovieComment(doc.id)
              .update({
                comment: firebase.firestore.FieldValue.arrayUnion(comment[0])
              }).then(() => {
                console.log([...doc.data().comment, comment[0]],'getState')

            dispatch({
              type: actionTypes.UPDATE_COMMENT_SUCCESS,
              payload: {message: "comment updated successfully",
              comment: [...doc.data().comment, comment[0]]}
            })
          })
          .catch(error => {
            console.log(error)
            dispatch({
              type: actionTypes.UPDATE_COMMENT_FAILURE,
              payload: error
            })
          }) 
        })
            }
      })
      .catch(function(error) {dispatch({
          type: actionTypes.FETCH_COMMENTS_FAILURE,
          payload: error.response
        })
      });
  }
}
