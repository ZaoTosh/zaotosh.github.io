// FUNZIONI OPERAZIONI
const formElement = document.forms.formEl.elements;
const btnEqual = formElement.btnEqual;
let operator = formElement.operator.value;

const risEl = document.querySelector("h3");
console.log("Entra");
const options = {
  method: "GET",
  mode: "no-cors",
};

const GET = async (url, pro) => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => (risEl.textContent = "Risultato: " + data));
};
console.log(operator);
btnEqual.addEventListener("click", (e) => {
  console.log("Ascolta il tasto Equal");

  e.preventDefault();
  const par1 = formElement.param1.value;
  const par2 = formElement.param2.value;
  let url = "";

  if (formElement.operator.value == "-")
    url = `http://localhost:3000/sub?param1=${par1}&param2=${par2}`;
  else if (formElement.operator.value == "*")
    url = `http://localhost:3000/mult?param1=${par1}&param2=${par2}`;
  else if (formElement.operator.value == "/")
    url = `http://localhost:3000/div?param1=${par1}&param2=${par2}`;
  else if (formElement.operator.value == "%")
    url = `http://localhost:3000/mod?param1=${par1}&param2=${par2}`;
  else url = `http://localhost:3000/sum?param1=${par1}&param2=${par2}`;
  console.log(url);
  GET(url, options);
});
