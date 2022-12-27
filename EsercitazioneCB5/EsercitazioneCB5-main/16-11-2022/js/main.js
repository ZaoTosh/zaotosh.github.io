import { GET, POST } from "./api.js";
import { q, createCard, idIncrements } from "./utils.js";

const ul = q(".card");
const form = document.forms.pokemon;
const elements = form.elements;
let idCard = 1;
const url = "http://localhost:3000/pokemon";

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
  res.map((pkm) => createCard(url, ul, pkm?.name, pkm?.type, pkm?.id))
);
