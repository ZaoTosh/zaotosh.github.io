"use strict";

//console.log(__dirname);
//console.log(__filename);
const validation = (...num) => {
  for (let control of num) if (isNaN(control)) return false;
  return true;
};
const dividerValidation = (divider) => {
  if (divider == 0) return false;
  return true;
};
const sum = (...num) => {
  let i = 1;
  let sum = 0;
  if (num.length > 2) {
    if (validation(...num.slice(1))) {
      while (i < num.length) {
        let numInt = parseInt(num[i]);
        sum += numInt;
        i++;
      }
      return sum;
    }
    return `Sono valori numeri non validi`;
  }
  return `Inserire almeno un valore in più`;
};

const sub = (a, b) => {
  if (validation(a, b)) return parseInt(a) - parseInt(b);
  return `Sono presenti numeri non validi`;
};
const mult = (...num) => {
  let i = 1;
  let mult = 1;
  if (num.length > 2) {
    if (validation(...num.slice(1))) {
      while (i < num.length) {
        let numInt = parseInt(num[i]);
        mult *= numInt;
        i++;
      }
      return mult;
    }
    return `Sono valori numeri non validi`;
  }
  return `Inserire almeno un valore in più`;
};

const div = (a, b) => {
  if (validation(a, b)) {
    if (dividerValidation(b)) {
      return a / b;
    } else return `Impossibile! Il divisore non può essere 0`;
  }
  return `Sono presenti numeri non validi`;
};
const MyArgv = process.argv.slice(2);

switch (MyArgv[0]) {
  case "sum":
    console.log("Somma: " + sum(...MyArgv));
    break;
  case "sub":
    console.log("Sottrazione: " + sub(MyArgv[1], MyArgv[2]));
    break;
  case "mult":
    console.log("Multiplicazio: " + mult(...MyArgv));
    break;
  case "div":
    console.log("Divisione: " + div(MyArgv[1], MyArgv[2]));
    break;
  default:
    console.log("Operazione non valida");
}

console.log("Argv: " + MyArgv);
