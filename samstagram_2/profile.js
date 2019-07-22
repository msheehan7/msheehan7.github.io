$("#form2_id").submit(function(e){
    e.preventDefault();




//obtain name  and change input name
var page = document.getElementById("name_input");
var nameChoice = page.value;
page.value=""
var nameInput = document.createElement("P")
nameInput.innerHTML = nameChoice;
//var pName
var pName = document.getElementById("name2")
pName.innerHTML = nameInput.innerHTML


//obtain name and change input name
var image = document.getElementById("image_input");
var imageChoice = image.value;
image.value=""
var imageInput = document.createElement("img")
imageInput.src = imageChoice

//var name4
var pImage = document.getElementById("carnegieImage")
pImage.src = imageInput.src



//obtain name  and change input name
var bioLink = document.getElementById("bio_input");
var bioChoice = bioLink.value;
bioLink.value=""
var bioInput = document.createElement("P")
bioInput.innerHTML = bioChoice;
//var name4
var pBio = document.getElementById("bio2")
pBio.innerHTML = bioInput.innerHTML


})
