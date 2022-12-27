function alertFunction() {
  alert("Alert!");
}
let operation = prompt(
  "Digita\n 1: Somma\n 2: Sottrazione\n 3: Moltiplicazione\n 4: Divisione"
);
operation = parseInt(operation);
let goOnTrue = false;
let numberOne;
let numberTwo;
if (!isNaN(operation)) {
  goOnTrue = true;
  numberOne = prompt("inserisci il primo numero");
  numberTwo = prompt("inserisci il secondo numero");
  numberOne = parseInt(numberOne);
  numberTwo = parseInt(numberTwo);
} else {
  console.log("Not a Number");
}
let risultatoOperazione = 0;
if (goOnTrue && (!isNaN(numberOne)) && (!isNaN(numberTwo))) {
  switch (operation) {
    case 1:
      risultatoOperazione = numberOne + numberTwo;
      console.log("Il risultato della Somma è:\n ", risultatoOperazione);
      break;
    case 2:
      risultatoOperazione = numberOne - numberTwo;
      console.log("Il risultato della Sottrazione è:\n ", risultatoOperazione);
      break;
    case 3:
      risultatoOperazione = numberOne * numberTwo;
      console.log(
        "Il risultato della Moltiplicazione è:\n ",
        risultatoOperazione
      );
      break;
    case 4:
      if (numberTwo != 0) {
        risultatoOperazione = numberOne / numberTwo;
        console.log("Il risultato della Divisione è:\n ", risultatoOperazione);
      } else {
        console.log("La divisione è impossibile");
      }

      break;

    default:
      console.log("Scelta non Valida");
  }
} else {
  console.log("I valori inseriti non sono Numeri");
}
let getHour = new Date().getHours();
