var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyD_gUjydNFn8w3onQdH068eCVanhO7GgO4",
    authDomain: "test-c75ac.firebaseapp.com",
    databaseURL: "https://test-c75ac.firebaseio.com",
    projectId: "test-c75ac",
    storageBucket: "test-c75ac.appspot.com",
    messagingSenderId: "7046910813"
  };
  firebase.initializeApp(config);
  
//   function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
//   console.log('data written')
// }
// 
// writeUserData('1','bill','bill@gmail.com','https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg')
// writeUserData('2','billy','billy@gmail.com','https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg')

var userId='1'
var userRef = firebase.database().ref('users/' + userId);
userRef.on('value', function(snapshot) {
  console.log(snapshot.val())
});

// var userRef = firebase.database().ref('users/');
// userRef.on('value', function(snapshot) {
//   console.log(snapshot.val())
// });