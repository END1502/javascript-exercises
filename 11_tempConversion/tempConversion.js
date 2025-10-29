const convertToCelsius = function (temp) {
  const toCelsius = ((temp - 32) * (5 / 9));
  return Number(toCelsius.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  const toFahrenheit = (temp * (9 / 5) + 32)
  return Number(toFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
