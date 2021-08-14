const string  = document.getElementById("string");
const button = document.querySelector("button");
const summer = document.getElementById("summer");

function howManyLetters(e) {
  e.preventDefault();
  let length  = string.value.length;
  summer.innerText = `This word consists of ${length} letters`;
  string.value = '';
}

button.addEventListener("click", howManyLetters)

