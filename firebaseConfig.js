const firebase = require('firebase')
require("firebase/database");
const cors = require('cors')({
  origin: true
})
var config = {
    apiKey: "AIzaSyA1brFAEGJB2DGMlL0N683YWk7ge0WHLKA",
    authDomain: "finalexam-241506.firebaseapp.com",
    databaseURL: "https://finalexam-241506.firebaseio.com",
    storageBucket: "finalexam-241506.appspot.com",
};
firebase.initializeApp(config);
var firebaseDB = firebase.database()
module.exports = {
  firebaseDB,
  cors,
  firebase
}