import { actionTypes } from '../actionTypes';

const initialComment = {
  data: [],
  message: '',
  loading: false,
}
export const comments = (state = initialComment, action) => {
  switch(action.type) {
    case actionTypes.FETCH_COMMENTS_LOADING:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        data: [...action.payload],
        loading: false
      }
    case actionTypes.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        ...action.payload,
        loading: false
      }
    case actionTypes.NO_COMMENT:
      return {
        ...state,
        data: [],
        loading: false
      }
    case actionTypes.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        data: [...action.payload.comment],
        message: action.payload.message,
        loading: false
      }
    case actionTypes.ADD_COMMENT_FAILURE:
      return {
        ...state,
        ...action.payload,
        loading: false
      }
    case actionTypes.UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        data: action.payload.comment,
        message: action.payload.message
      }
    case actionTypes.UPDATE_COMMENT_FAILURE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}