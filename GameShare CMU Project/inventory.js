var firebaseConfig = {
    apiKey: "AIzaSyCzouSoNoVCIFO2QdzXyvpUlrAxP7ABJZk",
    authDomain: "gameshare-1b851.firebaseapp.com",
    databaseURL: "https://gameshare-1b851.firebaseio.com",
    projectId: "gameshare-1b851",
    storageBucket: "gameshare-1b851.appspot.com",
    messagingSenderId: "804343057431",
    appId: "1:804343057431:web:10ba27aee0a934dc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const auth = firebase.auth();

// on submit function
    $("#gameForm").submit(function(e, img) {
        e.preventDefault();
    // saving user input in variables
        // gameName
            var gameName = document.getElementById("gameName").value;
            console.log(gameName);
        //consoleName
            var consoleName = document.getElementById("consoles").value;
            console.log(consoleName);
    saveToDatabase(gameName,consoleName,);
    // resetting forms 
        document.getElementById("gameName").value = "";
        // document.getElementById("price").value = "";
    });


// saving data to the database
function saveToDatabase(gameName,consoleName){
    var user = firebase.auth().currentUser
    if (user) {
        // User is signed in.
        uid = user.uid
        console.log(user)

        doc = db.collection('users').doc(uid).collection('games').add({
        name: gameName,
        console: consoleName,
        // price: price,
    }).then(function(docRef){
        docRef.get().then(function(doc){
            addGame(doc);
            //gameOnPage(doc);
            })
        })


      } else {
          console.log('not signed in')
        // No user is signed in.
      }
    }
    
// will take user input and put it on a kinda sticky note on page
function addGame(doc) {
    // assigning variables to all elements
        var container2 = document.getElementById("container2");
    // creating div elements
        var gameSection = document.createElement("div");
        var gameFormInfo = document.createElement("div");
    // creating p elements
        var nameP = document.createElement("p");
        var consoleP = document.createElement("p");
        // var priceP = document.createElement("p");
    // adding class
        gameSection.classList.add("gameSection");
        gameFormInfo.classList.add("gameFormInfo");
    // changing inner.HTMLs
        nameP.innerHTML = doc.data().name;
        consoleP.innerHTML = doc.data().console;
        // priceP.innerHTML = doc.data().price;
    // appending the p elements to the gameFormInfo
        gameFormInfo.appendChild(nameP);
        gameFormInfo.appendChild(consoleP);
        // gameFormInfo.appendChild(priceP);
    // appending gameFormInfo to gameSection
        gameSection.appendChild(gameFormInfo);
    // appending gameSection to container2
        container2.appendChild(gameSection);
// depending on the game name user inserts, picture shows up beside it 
    // the last of us
        if (doc.data().name === "the last of us" || doc.data().name === "The Last of Us"){
            var gamePicture = document.createElement("div");
            var pic = document.createElement("img");
            pic.src = "https://www.playerattack.com/imagery/2012/08/TheLastOfUs-Cover.jpg";
            pic.classList.add("gamePicture");
            gamePicture.appendChild(pic);
            gameSection.appendChild(gamePicture);
    // halo 3: odst
         } else if (doc.data().name === "halo 3: odst" || doc.data().name === "Halo 3: ODST"){  // halo 3: odst
            var gamePicture = document.createElement("div");
            var pic = document.createElement("img");
            pic.src = "https://tinyurl.com/y65gn66r";
            pic.classList.add("gamePicture");
            gamePicture.appendChild(pic);
            gameSection.appendChild(gamePicture);
            console.log("this worked 1!")
    // super smash bros. ultimate
        } else if (doc.data().name === "super smash bros ultimate" || doc.data().name === "super smash bros. ultimate" || doc.data().name === "Super Smash Bros. Ultimate"){     // super smash bros ultimate
            var gamePicture = document.createElement("div");
            var pic = document.createElement("img");
            pic.src = "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg";
            pic.classList.add("gamePicture");
            gamePicture.appendChild(pic);
            gameSection.appendChild(gamePicture);
            console.log("this worked 2!")
    // call of duty: black ops 2
        } else if (doc.data().name === "call of duty black ops 2" || doc.data().name === "call of duty: black ops 2" || doc.data().name === "Call of Duty: Black Ops 2"){     // call of duty black ops 2
            var gamePicture = document.createElement("div");
            var pic = document.createElement("img");
            pic.src = "http://3.bp.blogspot.com/-V6wxRk6Y-T0/UKG6ae9HZRI/AAAAAAAABt0/xKe4hUHXqG0/s1600/Call+of+Duty+Black+Ops+2+Cover.jpg";
            pic.classList.add("gamePicture");
            gamePicture.appendChild(pic);
            gameSection.appendChild(gamePicture);
            console.log("this worked 3!")
    // minecraft
        } else if (doc.data().name === "minecraft" || doc.data().name === "Minecraft"){     // minecraft
            var gamePicture = document.createElement("div");
            var pic = document.createElement("img");
            pic.src = "https://i0.wp.com/www.mondivirtuali.it/wp-content/uploads/2018/01/minecraft-record-cover.jpg?fit=650%2C400s";
            pic.classList.add("gamePicture");
            gamePicture.appendChild(pic);
            gameSection.appendChild(gamePicture);
            console.log("this worked 4!")
        } 
        else{
            console.log(gameName);
    }
}

 function loadInventoryGames(){
    var user = firebase.auth().currentUser  
    
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        uid = user.uid
        console.log(user.uid)
   db.collection("users").doc(uid).collection('games').get().then(function(querySnapshot){
         querySnapshot.forEach(function(doc){
        
             addGame(doc);
        
            });
        });
   
     }
  })
}
 $(document).ready(function(){
     loadInventoryGames()
   });

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