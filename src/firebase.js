import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyDkPosft9lTcGCiU_KuulV3io_jdEE-AYA",
  authDomain: "movie-chat-86ec8.firebaseapp.com",
  databaseURL: "https://movie-chat-86ec8.firebaseio.com",
  projectId: "movie-chat-86ec8",
  storageBucket: "movie-chat-86ec8.appspot.com",
  messagingSenderId: "930263721289",
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
