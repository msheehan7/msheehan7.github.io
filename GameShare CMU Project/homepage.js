var firebaseConfig = {
    apiKey: "AIzaSyCzouSoNoVCIFO2QdzXyvpUlrAxP7ABJZk",
    authDomain: "gameshare-1b851.firebaseapp.com",
    databaseURL: "https://gameshare-1b851.firebaseio.com",
    projectId: "gameshare-1b851",
    storageBucket: "gameshare-1b851.appspot.com",
    messagingSenderId: "804343057431",
    appId: "1:804343057431:web:10ba27aee0a934dc"
  };

  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  const auth = firebase.auth();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      // User is signed in.
      console.log('signed in')
    // This is to make the profile specific to the customer 
    var user = firebase.auth().currentUser; //sets the current user to variable
    } else { 
      // No user is signed in.
     
      console.log('signed out')
  

}
});