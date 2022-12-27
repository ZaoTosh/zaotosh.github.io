// Primo Esercizio
function calc() {
  let numberOne = parseInt(document.getElementById("numberOne").value);
  let numberTwo = parseInt(document.getElementById("numberTwo").value);

  const somma = document.getElementById("somma").checked;
  const sottrazione = document.getElementById("sottrazione").checked;
  const moltiplicazione = document.getElementById("moltiplicazione").checked;
  const divisione = document.getElementById("divisione").checked;
  let operator;
  if (somma) {
    operator = "+";
    document.getElementById("valueInput").innerHTML = searchOperator(
      numberOne,
      numberTwo,
      operator
    );
  } else if (sottrazione) {
    operator = "-";
    document.getElementById("valueInput").innerHTML = searchOperator(
      numberOne,
      numberTwo,
      operator
    );
  } else if (moltiplicazione) {
    operator = "*";
    document.getElementById("valueInput").innerHTML = searchOperator(
      numberOne,
      numberTwo,
      operator
    );
  } else if (divisione) {
    operator = "/";
    document.getElementById("valueInput").innerHTML = searchOperator(
      numberOne,
      numberTwo,
      operator
    );
  } else
    document.getElementById("valueInput").innerHTML = "Seleziona Operatore";
}

function searchOperator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return sum(num1, num2);
    case "-":
      return sub(num1, num2);
    case "*":
      return mult(num1, num2);
    case "/":
      return div(num1, num2);
  }
}

function sum(num1, num2) {
  if (!isNaN(num1) && !isNaN(num2)) return num1 + num2;
  return controllerIsNum(num1, num2);
}

function sub(num1, num2) {
  if (!isNaN(num1) && !isNaN(num2)) return num1 - num2;
  return controllerIsNum(num1, num2);
}

function mult(num1, num2) {
  if (!isNaN(num1) && !isNaN(num2)) return num1 * num2;
  return controllerIsNum(num1, num2);
}

function div(num1, num2) {
  if (!isNaN(num1) && !isNaN(num2)) return num1 / num2;
  return controllerIsNum(num1, num2);
}

function controllerIsNum(num1, num2) {
  if (isNaN(num1) && isNaN(num2))
    return "Attento! Entrambi i numero non sono validi";
  else if (isNaN(num1)) return "Attento! Il primo numero non è valido";
  else return "Attento! Il secondo numero non è valido";
}

// Secondo Esercizio
let character = {
  nome: "Salvatore",
  congnome: "Rossi",
  eta: 31,
  dataNascita: {
    giorno: 20,
    mese: 3,
    anno: 2000,
  },
  segniCaratteristici: ["cicatrice", "tatuaggi", "calvizia"],
};

character.luogoNascita = "Catania";
console.log(character.nome);
console.log(character.dataNascita.giorno);
console.log(character.segniCaratteristici[1]);
console.log(character["eta"]);

const characterKeys = Object.keys(character);
console.log("Key:\n", characterKeys);
const characterValues = Object.values(character);
console.log("Values:\n", characterValues);

const character2 = Object.create(character);
character2.nome = "Andrea";
character2.dataNascita.anno = 1999;
console.log("Create:\n", character2);

let character3 = Object.assign(character, character2);
console.log("Assing:\n", character3);

console.log("Entries:\n");
for (const [key, value] of Object.entries(character))
  console.log(`${key}: ${value}`);

character.cod_fiscale = "DCHDSGFDVKADSFVK";
Object.freeze(character);
character.cod_fiscale = "TANTONONCAMBIA";
console.log("Freeze:\n", character.cod_fiscale);

console.log("isFrozen:\n", Object.isFrozen(character));

// Terzo

let operation;
let numberOne;
let numberTwo;
let ctrlCicle = true;
let arr2 = [];
function terzo() {
  let exitCalculator = true;
  while (exitCalculator) {
    operation = prompt(
      "Digita\n 1: Somma\n 2: Sottrazione\n 3: Moltiplicazione\n 4: Divisione\n 5:Esci"
    );
    operation = parseInt(operation);
    if (isNaN(operation)) {
      console.log("La scelta non è valida, non inserire caratteri");
    }
    let operationResult = 0;
    if (!isNaN(operation)) {
      switch (operation) {
        case 1:
          requestNumber();
          ctrlCicle = true;
          arr2 = [];
          while (ctrlCicle) {
            toContinue = prompt("Vuoi continuare a sommare?\n s: si\n n: no");
            if (toContinue.toUpperCase() === "S")
              arr2.push(requestArrayNumber());
            else ctrlCicle = false;
          }
          operationResult = sumArray(numberOne, numberTwo, arr2);
          console.log("Il risultato della Somma è:\n ", operationResult);
          alert("Il risultato della Somma è:\n " + operationResult);
          document.getElementById("valueInput").innerHTML = operationResult;

          break;
        case 2:
          requestNumber();
          ctrlCicle = true;
          arr2 = [];
          while (ctrlCicle) {
            toContinue = prompt(
              "Vuoi continuare a sottrazione?\n s: si\n n: no"
            );
            if (toContinue.toUpperCase() === "S")
              arr2.push(requestArrayNumber());
            else ctrlCicle = false;
          }
          operationResult = subArray(numberOne, numberTwo, arr2);
          console.log("Il risultato della Sottrazione è:\n ", operationResult);
          alert("Il risultato della Sottrazione è:\n " + operationResult);
          break;
        case 3:
          requestNumber();
          ctrlCicle = true;
          arr2 = [];
          while (ctrlCicle) {
            toContinue = prompt(
              "Vuoi continuare a moltiplicazione?\n s: si\n n: no"
            );
            if (toContinue.toUpperCase() === "S")
              arr2.push(requestArrayNumber());
            else ctrlCicle = false;
          }
          operationResult = multArray(numberOne, numberTwo, arr2);
          console.log(
            "Il risultato della Moltiplicazione è:\n ",
            operationResult
          );
          alert("Il risultato della Moltiplicazione è:\n " + operationResult);
          break;
        case 4:
          requestNumber();
          ctrlCicle = true;
          arr2 = [];
          while (ctrlCicle) {
            toContinue = prompt("Vuoi continuare a divisione?\n s: si\n n: no");
            if (toContinue.toUpperCase() === "S")
              arr2.push(requestArrayNumber());
            else ctrlCicle = false;
          }
          operationResult = divArray(numberOne, numberTwo, arr2);
          console.log("Il risultato della Divisione è:\n ", operationResult);
          alert("Il risultato della Divisione è:\n " + operationResult);
          break;
        case 5:
          exitCalculator = false;
          console.log("Hai scelto di uscire");
          break;
        default:
          console.log("Scelta Non Valida");
      }
    } else {
      console.log("Il valore inserito non è un Numero");
    }
  }
}

function sumArray(num1, num2, array) {
  let tot = num1 + num2;
  console.log("Grandezza", array.length);
  for (let i = 0; i <= array.length - 1; i++) tot = tot + array[i];
  return tot;
}

function subArray(num1, num2, array) {
  let tot = num1 - num2;
  for (let i = 0; i <= array.length - 1; i++) tot = tot - array[i];
  return tot;
}

function multArray(num1, num2, array) {
  let tot = num1 * num2;

  for (let i = 0; i <= array.length - 1; i++) {
    tot = tot * array[i];
  }
  return tot;
}

function divArray(num1, num2, array) {
  let tot = num1 / num2;
  for (let i = 0; i <= array.length - 1; i++) tot = tot / array[i];
  return tot;
}

function requestNumber() {
  numberOne = prompt("inserisci il primo numero");
  numberOne = parseInt(numberOne);
  checkRequestNumberOne();

  numberTwo = prompt("inserisci il secondo numero");
  numberTwo = parseInt(numberTwo);
  checkRequestNumberTwo();
}

function requestArrayNumber() {
  otherNumber = parseInt(prompt("inserisci un altro numero"));
  checkRequestOtherNumber(otherNumber);
  return otherNumber;
}

function checkRequestNumberOne() {
  while (isNaN(numberOne)) {
    console.log("Il primo numero inserito non è valido");
    numberOne = parseInt(prompt("inserisci il primo numero"));
  }
}

function checkRequestNumberTwo() {
  while (isNaN(numberTwo)) {
    console.log("Il secondo numero inserito non è valido");
    numberTwo = parseInt(prompt("inserisci il secondo numero"));
  }
  return numberTwo;
}

function checkRequestOtherNumber(otherNumber) {
  while (isNaN(otherNumber)) {
    console.log("Il numero inserito non è valido");
    otherNumber = parseInt(prompt("inserisci un nuovo numero"));
  }
  return otherNumber;
}
