function isEpty(obj) {
  let array = [];
  for (let key in obj) {
    array.push(key);
  }
  return array.length == 0;
}

function sumOfProperties(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

console.log(sumOfProperties(salaries));