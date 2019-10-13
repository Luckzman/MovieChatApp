import firebase from '../firebase';

const commentRef = firebase.firestore().collection('comments');

/**
 * @description - firestore query that returns a promise where title of selected movie
 * @param {string} movieTitle 
 * @returns {Promise} query
 */
export const getMovieComment = (movieTitle) => {
  const query = commentRef.where('title', '==', movieTitle)
  return query;
}

/**
 * @description - firestore query that returns a promise to add new comment
 * @param {string} newComment 
 * @returns {Promise} query
 */
export const addMovieComment = (newComment) => {
  const query = commentRef.add(newComment)
  return query
}

/**
 * @description - firestore query that returns a promise to add to existing movie comment
 * @param {string} docId - firestore unique Id
 * @returns {Promise} query
 */
export const updateMovieComment = (docId) => {
  const query = commentRef.doc(docId)
  return query;
}
