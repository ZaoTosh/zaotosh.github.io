const validationSumMult = (...num) => {
  for (let iterator of num) {
    if (isNaN(iterator[1])) return false;
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
    let numInt = parseInt(iterator[1]);
    sum += numInt;
  }
  return sum;
};

const forOfMult = (...num) => {
  let mult = 1;
  for (let iterator of num) {
    let numInt = parseInt(iterator[1]);
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
    return `Sono presenti valori non validi`;
  }
  return `Inserire almeno un valore in più`;
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
    return `Sono presenti valori non validi`;
  }
  return `Inserire almeno un valore in più`;
};

const div = (a, b) => {
  if (validationSubDiv(a, b)) {
    if (dividerValidation(b)) {
      return a / b;
    } else return `Impossibile! Il divisore non può essere 0`;
  }
  return `Sono presenti valori non validi`;
};

export { sum, sub, mult, div };
