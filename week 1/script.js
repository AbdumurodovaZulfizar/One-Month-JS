let username = prompt("What is your name?");

let myWork = new Array("Muslimaat.uz", "Najot Ta'lim", "Nest One")

if (username === "Zulfizar") {
  document.write(`<h1>Zulfizar, you will be good person and work at ${myWork[0]}, with this Allah will give you Jannat</h1>`);
  var myimage = new Image();

  myimage.src = 'house.jpg'

  document.querySelector('body').appendChild(myimage);
} else if (username === "Chris") {
  document.write(`<h1>Your dream come true, ${username}!!! You won BMW</h1>`);
  randomize();
} else {
  document.write(`<h1>Hello ${username}, welcome to our page!</h1>`);
  randomize();
}

function randomize() {
  let carNames = ['Cobalt', 'Malibu', 'Tracker'];

  let cobalt  = new Image();
  cobalt.src = './cobalt.jpg';
  let malibu = new Image();
  malibu.src = './malibu.jpg';
  let tracker = new Image();
  tracker.src = './tracker.jpg';

  let carImages = [cobalt, malibu, tracker];


  var randomNumber  = Math.floor(Math.random() * carNames.length);
  let CurrentCar = document.createElement('h4');
  CurrentCar.innerText = carNames[randomNumber];
  CurrentImage = carImages[randomNumber];
  document.querySelector('body').appendChild(CurrentCar);
  document.querySelector('body').appendChild(CurrentImage);
}