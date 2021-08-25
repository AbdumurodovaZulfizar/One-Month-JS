function isEpty(obj) {
  let array = [];
  for (let key in obj) {
    array.push(key);
  }
  return array.length == 0;
}
