let username = prompt("What is your name?");

let myWork = new Array("Muslimaat.uz", "Najot Ta'lim", "Nest One")

if (username === "Zulfizar") {
  document.write(`<h1>Zulfizar, you will be good person and work at ${myWork[0]}, with this Allah will give you Jannat</h1>`);
} else if(username === "Chris") {
  document.write(`<h1>Your dream come true, ${username}!!! You won BMW</h1>`);
} else {
  document.write(`<h1>Hello ${username}, welcome to our page!</h1>`);
}

var image = new Image();

image.src = 'house.jpg'

document.querySelector('body').appendChild(image);