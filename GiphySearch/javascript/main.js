
document.querySelector(".js-go").addEventListener('click',function(){

  var input = document.querySelector("input").value;
  console.log(input);
  pushToDOM(input);

});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){

  var input = document.querySelector("input").value;
 console.log(input);

 // if the key ENTER is pressed...
 if(e.which === 13) {
   pushToDOM(input);
 }

});

var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',function(e){

  var data = e.target.response;
  pushToDOM(data);

});



function pushToDOM(input) {

  var response = JSON.parse(input);

  var imageUrls = response.data;

  imageUrls.forEach(function(image){

    var src = image.images.fixed_height.url;
    console.log(src);

    var container = document.querySelector(".js-container");
    container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";

  });

}

const img = document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=dc6zaTOxFJmzC&s=cats', {mode: 'cors'})
  .then(function(response) {
    console.log(response.json());
  });

