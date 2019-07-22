$("#form_id").submit(function(e) {
    e.preventDefault();

var link = document.getElementById('link_input').value;

var X = document.createElement("img");
X.src = link;
X.height = 200;
var contain = document.getElementById("container");
contain.appendChild(X);

})




