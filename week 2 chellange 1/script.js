const firstNumber  = document.getElementById("number1");
const secondNumber = document.getElementById("number2");
const button = document.querySelector("button");
const summer = document.getElementById("summer");

function sum(e) {
  e.preventDefault()
  let sumOfNumbers =parseInt(firstNumber.value) + parseInt(secondNumber.value);
  summer.innerText = `${sumOfNumbers}`
  firstNumber.value = '';
  secondNumber.value = '';
}

button.addEventListener("click", sum)

