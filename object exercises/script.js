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

function multiplyNumeric(obj) {
  for( let key in obj) {
    if (Number(obj[key]) === obj[key]) {
      obj[key] *= 2
    }
    else {
      obj[key] = obj[key];
    }
  }
  return obj;
}

menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

console.log(multiplyNumeric(menu));

// after the call
