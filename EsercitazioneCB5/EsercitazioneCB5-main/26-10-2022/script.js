//inizializzazione array
let arr = ["Paolo", "Rossi", 40, "laurea"];
console.log("Inizializzazione Array");
console.log(arr);

//rimozione eta
let arr1 = arr.splice(2, 1);
console.log("Eliminazione dell'età");
console.log(arr);

//inserimento data di nascita
arr.splice(2, 0, "15/10/1999");
console.log("Inserimento data di nascita");
console.log(arr);

//Nome e Cognome in Maiuscolo
arr[0] = arr[0].toUpperCase();
arr[1] = arr[1].toUpperCase();
console.log("Nome e Cognome in Maiuscolo");
console.log(arr);

//creazione triangolo rettangolo rovesciato
for (let i = 0; i <= 7; i++) {
  for (let j = 7 - i; j >= 1; j--) console.log("#");
  console.log("\n");
}
