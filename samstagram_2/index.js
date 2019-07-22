$("#form_id").submit(function(e) {
    e.preventDefault();


//Div creation
var box3 =  document.createElement("div");
box3.classList.add("box3")
    //Append X to div and set X position
    var createX = document.createElement("P");
    var xHold = document.createTextNode("X");
    createX.style.fontWeight = "800";
    createX.style.fontFamily = "arial";

    createX.appendChild(xHold);
    box3.appendChild(createX);
    document.getElementById("container").appendChild(box3);
    createX.style.position="absolute"
    createX.style.right = 15+"px";
    createX.style.top = -3+"px";
    createX.style.cursor = "pointer";

//This is to make x click remove
createX.addEventListener("click", function(){
var box3_id = String(Math.random())
box3.id = box3_id
document.getElementById(box3_id).remove()

})
    
    
    //Create Image and implement
    var link = document.getElementById("link_input");
    var source = link.value;
    link.value="";
    var P = document.createElement("img");
    P.src = source;
    P.style.width = 150+"px"
    box3.appendChild(P)

//From here the form caption is being executed
var text = document.getElementById('text_input');
var word = text.value;
text.value = "";
var par = document.createElement("P")
par.innerHTML = word;
box3.appendChild(par);
    
    
})