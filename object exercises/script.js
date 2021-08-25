function isEpty(obj) {
  let array = [];
  for (let key in obj) {
    array.push(key);
  }
  return array.length == 0;
}

let Obj = {
  name: "Zulfizar",
  surname: "Abdumuroodva",
  age: 20
}

let schedule = {};

console.log(isEpty(Obj));
console.log(isEpty(schedule));