function genRandomNum() {
  return Math.floor(Math.random() * 100);
}

function celciusToFahrenhheit(celcius) {
  return (celcius * 9) / 5 + 32;
}
module.exports = {
  genRandomNum,
  celciusToFahrenhheit
};