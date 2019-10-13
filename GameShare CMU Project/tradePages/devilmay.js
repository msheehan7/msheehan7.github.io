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
  const db = firebase.firestore();


function saveToDatabase(){
    

        var daysGone = db.collection("daysGone")
        // price: price,
        daysGone.get().then(function(daysGone){
            addGame(daysGone);
            //gameOnPage(doc);
            })
        }
    



function addGame(daysGone) {
    // assigning variables to all elements
        var container2 = document.getElementById("gameProposal");
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
        nameP.innerHTML = daysGone.data().name;
        consoleP.innerHTML = daysGone.data().console;
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
        if (daysGone.data().name === "the last of us" || daysGone.data().name === "The Last of Us"){
            var gamePicture = document.createElement("div");
            var pic = document.createElement("img");
            pic.src = "https://www.playerattack.com/imagery/2012/08/TheLastOfUs-Cover.jpg";
            pic.classList.add("gamePicture");
            gamePicture.appendChild(pic);
            gameSection.appendChild(gamePicture);
    // halo 3: odst
         } else if (daysGone.data().name === "halo 3: odst" || daysGone.data().name === "Halo 3: ODST"){  // halo 3: odst
            var gamePicture = document.createElement("div");
            var pic = document.createElement("img");
            pic.src = "https://tinyurl.com/y65gn66r";
            pic.classList.add("gamePicture");
            gamePicture.appendChild(pic);
            gameSection.appendChild(gamePicture);
            console.log("this worked 1!")
    // super smash bros. ultimate
        } else if (daysGone.data().name === "super smash bros ultimate" || daysGone.data().name === "super smash bros. ultimate" || callOf2.data().name === "Super Smash Bros. Ultimate"){     // super smash bros ultimate
            var gamePicture = document.createElement("div");
            var pic = document.createElement("img");
            pic.src = "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg";
            pic.classList.add("gamePicture");
            gamePicture.appendChild(pic);
            gameSection.appendChild(gamePicture);
            console.log("this worked 2!")
    // call of duty: black ops 2
        } else if (daysGone.data().name === "call of duty black ops 2" || daysGone.data().name === "call of duty: black ops 2" || callOf2.data().name === "Call of Duty: Black Ops 2"){     // call of duty black ops 2
            var gamePicture = document.createElement("div");
            var pic = document.createElement("img");
            pic.src = "http://3.bp.blogspot.com/-V6wxRk6Y-T0/UKG6ae9HZRI/AAAAAAAABt0/xKe4hUHXqG0/s1600/Call+of+Duty+Black+Ops+2+Cover.jpg";
            pic.classList.add("gamePicture");
            gamePicture.appendChild(pic);
            gameSection.appendChild(gamePicture);
            console.log("this worked 3!")
    // minecraft
        } else if (daysGone.data().name === "minecraft" || daysGone.data().name === "Minecraft"){     // minecraft
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

    var gameSection_id = daysGone.id
    gameSection.id = gameSection_id

            //This is to make x click remove
            gameSection.addEventListener("click", function(){
            document.getElementById(gameSection.id)
            //make Sure to change the name of the game at the end of the below string
            var daysGone = db.collection("daysGone")
            //document.getElementById(gameSection.id).remove()
                    //  db.collection('users').doc(uid).collection('games').doc(doc.id).delete();
                    var question = confirm("Are you sure you want to trade this game for Days Gone. There will be a $5 processing and handling fee for this transaction")
            
            
                if(question){
                   
                    
                    document.getElementById(gameSection.id).remove()
                    //Use a sleep method to call after a certain amount of time
                    db.collection('daysGone').doc(daysGone.id).delete();
                    
                      window.location.href = "tradeConfirmationPage.html"
                    
                                }//else{
                                // alert('An error has occured. Please re-save your game to inventory')
                            //}
    });




}
 


 function loadGames(){
        
        var daysGone = db.collection("daysGone")
        daysGone.get().then(function(querySnapshot){
         querySnapshot.forEach(function(daysGone){
        
             addGame(daysGone);
        
            });
        });
   
     }
  
 $(document).ready(function(){
     loadGames()
   });

    
  
  