const validationSumMult = (...num) => {
  for (let iterator of num) {
    console.log("controllo: " + iterator);
    if (isNaN(parseInt(iterator))) return false;
  }
  return true;
};
const validationSubDiv = (...num) => {
  for (let iterator of num) {
    if (isNaN(iterator) || iterator == null) return false;
  }
  return true;
};
const dividerValidation = (divider) => {
  if (divider == 0) return false;
  return true;
};

const forOfSum = (...num) => {
  let sum = 0;
  for (let iterator of num) {
    let numInt = parseInt(iterator);
    sum += numInt;
  }
  return sum;
};

const forOfMult = (...num) => {
  let mult = 1;
  for (let iterator of num) {
    let numInt = parseInt(iterator);
    mult *= numInt;
  }
  return mult;
};
const sum = (...num) => {
  console.log("Length " + num.length);
  if (num.length >= 2) {
    if (validationSumMult(...num)) {
      return forOfSum(...num);
    }
    return -1;
  }
  return 0;
};

const sub = (a, b) => {
  console.log(a, b);
  if (validationSubDiv(a, b)) return a - b;
  return `Sono presenti valori non validi`;
};
const mult = (...num) => {
  if (num.length >= 2) {
    if (validationSumMult(...num)) {
      return forOfMult(...num);
    }
    return -1;
  }
  return 0;
};

const div = (a, b) => {
  if (validationSubDiv(a, b)) {
    if (dividerValidation(b)) {
      return a / b;
    }
    return -1;
  }
  return 0;
};

module.exports = { sum, sub, mult, div };
