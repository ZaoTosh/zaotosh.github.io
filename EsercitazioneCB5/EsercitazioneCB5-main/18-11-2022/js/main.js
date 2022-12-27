import { GET, POST, PATCH } from "./api.js";
import { q, createCard, idIncrements } from "./utils.js";

const ul = q(".card");
const searchPoke = document.querySelector(".searchPoke");
// form insert poke
const form = document.forms.pokemon;
const elements = form.elements;

let idCard = 1;
const url = "http://localhost:3000/pokemon";

//form patch poke
const formPatch = document.forms.pokemonPatch;
const elementsFP = formPatch.elements;

formPatch.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = elementsFP.id.value;
  const data = {
    name: elementsFP.name.value,
    type: elementsFP.type.value,
  };
  PATCH(url, id, data)
    .then((res) => res.reload)
    .catch((e) => console.log(e));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  idCard = parseInt(idIncrements(url));
  console.log(idCard);
  const data = {
    id: idCard,
    name: elements.name.value,
    type: elements.type.value,
  };

  POST(url, data).then(() => location.reload());
});

window.onload = GET(url).then((res) =>
  res.map((pkm) => createCard(url, ul, pkm))
);
