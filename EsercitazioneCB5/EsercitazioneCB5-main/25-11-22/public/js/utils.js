// FUNZIONI OPERAZIONI
const formElement = document.forms.formEl.elements;
const btnSum = formElement.btnSum;
const btnSub = formElement.btnSub;
const btnMult = formElement.btnMult;
const btnDiv = formElement.btnDiv;
const risEl = document.querySelector("h3");

const GET = async (url) => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => (risEl.textContent = "Risultato: " + data));
};

// Event click SUM
if (btnSum) {
  btnSum.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/sum?param1=${par1}&param2=${par2}`;
    console.log(url);
    GET(url);
  });
}

// Event click SUB
if (btnSub) {
  btnSub.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/sub?param1=${par1}&param2=${par2}`;
    console.log(url);
    GET(url);
  });
}

// Event click MULT
if (btnMult) {
  btnMult.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/mult?param1=${par1}&param2=${par2}`;
    console.log(url);
    GET(url);
  });
}
// Event click DIV
if (btnDiv) {
  btnDiv.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/div?param1=${par1}&param2=${par2}`;
    console.log(url);
    GET(url);
  });
}
