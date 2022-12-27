const validationSumMult = (...num) => {
  for (let iterator of num) {
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
  if (num.length >= 2) {
    if (validationSumMult(...num)) {
      return forOfSum(...num);
    }
    return -1;
  }
  return -2;
};

const sub = (a, b) => {
  if (validationSubDiv(a, b)) {
    if (validationSubDiv(a, b)) {
      return a - b;
    }
    return -1;
  }
  return -2;
};

const mult = (...num) => {
  if (num.length >= 2) {
    if (validationSumMult(...num)) {
      return forOfMult(...num);
    }
    return -1;
  }
  return -2;
};

const div = (a, b) => {
  if (validationSubDiv(a, b)) {
    if (dividerValidation(b)) {
      return a / b;
    }
    return -1;
  }
  return -2;
};

const mod = (a, b) => {
  if (validationSubDiv(a, b)) {
    if (dividerValidation(b)) {
      return a % b;
    }
    return -1;
  }
  return -2;
};

module.exports = { sum, sub, mult, div, mod };
