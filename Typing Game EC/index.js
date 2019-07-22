function putWordOnPage() {
    console.log("Executing putWordOnPage()...")
    var randomWord = pickRandomWord();
    console.log(randomWord);
    var randomX = getRandomX();
    console.log(randomX)
    var randomY = getRandomY();
    console.log(randomY);
    insertWordOnPage(randomWord, randomX, randomY);

   
  }
  
  
  $(document).ready(function() {
  setInterval(putWordOnPage, 3000)
  
  });
  
  var randomWordList = [
    "import",
    "dump",
    "factory",
    "cell phone",
    "brand",
    "eagle",
    "leadership",
    "cycle",
    "happen",
    "childish",
    "fair",
    "divide",
    "forecast",
    "college",
    "exaggerate",
    "graduate",
    "rhythm",
    "moment",
    "heart",
    "stunning",
  ]
  
  function pickRandomWord(){
   return randomWordList[Math.floor(Math.random() * randomWordList.length)]; 
  
  
  }
  function getRandomX() {
  return Math.floor(Math.random() * screen.width);
  }
  
  function getRandomY() {
    return Math.floor(Math.random() * screen.height);
  }
  
  
  
  function insertWordOnPage(word, x, y){
        var u = document.createElement("h1")
  
        var p = document.createTextNode(word)
  
        u.appendChild(p);
 
        u.style.position= "absolute" ;
 
        u.style.left = x+"px";
       
        u.style.top = y+"px";
   
        document.getElementById("container");
        container.appendChild(u);
        
        

        }
  
  
  
  $("#form_id").submit(function(e) { 
      e.preventDefault();
      var text_input = document.getElementById('text_input');
     
      var input_value = text_input.value;
  
      var elem = findMatchingWord(input_value);

      if (elem !== -1){ elem.remove();
        
      
        text_input.value=""}
  });
  
  function findMatchingWord(text_input) {
    var nodesList = document.getElementById('container').childNodes;
    for(i = 0; i<nodesList.length; i++){
        var node = nodesList[i]
        var value = node.innerHTML
        if (value === text_input){
              return node;
              value.position = value.postion + 10
        }
  
                        }
        return -1;
  }
  