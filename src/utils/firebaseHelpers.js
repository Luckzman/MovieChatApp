import firebase from '../firebase';

const commentRef = firebase.firestore().collection('comments');

export const getMovieComment = (movieTitle) => {
  const query = commentRef.where('title', '==', movieTitle)
  return query;
}

export const addMovieComment = (newComment) => {
  const query = commentRef.add(newComment)
  return query
}

export const updateMovieComment = (docId) => {
  const query = commentRef.doc(docId)
  return query;
}

// export const getMovieId = (documentId) => {
//   const query = commentRef.doc(documentId);
//   return query;
// }