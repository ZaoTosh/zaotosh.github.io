import { GET, POST, DELETE, getId } from "./api.js";

const c = (el) => document.createElement(el);
const q = (el) => document.querySelector(el);
const searchPoke = document.querySelector(".searchPoke");
const ul1 = q(".card");
const url = "http://localhost:3000/pokemon";
let arrCards = [];
// API
/**
 * Create an unique hash code
 * @returns string
 */
function idIncrements(url) {
  let id = getId(url) + 1;
  console.log("incremento id: " + id);
  return id;
}

const insertNum = (n) => {
  if (n > 9 && n < 100) return `#0${n}`;
  if (n <= 9) return `#00${n}`;
  return `#${n}`;
};
let Arr = [];
let i = 1;
const createCard = (url, parent, data) => {
  i++;
  const wrapperEl = c("li");
  const cardEl = c("div");
  const img = document.createElement("img");
  img.classList.add("card__all__img");
  img.setAttribute("src", `https://picsum.photos/130/130/?${i}`);
  //img.setAttribute("src", `${getPromisePoke(name.toLowerCase())}`);
  // img.setAttribute("src", () => {
  //   GET(`https://pokeapi.co/api/v2/pokemon/?limit=150`).then((prod) =>
  //     prod
  //       .filter((product) => product.name === data.name)
  //       .map((product) => {
  //         console.log(product.name);
  //         return product.sprites.other.dream_world.front_default;
  //       })
  //   );
  // });

  const idEl = c("p");
  const nameEl = c("h1");
  const typeEl = c("p");
  wrapperEl.classList.add("card__all");
  idEl.textContent = insertNum(data.id);
  nameEl.textContent = data.name[0].toUpperCase() + data.name.slice(1);
  typeEl.textContent = "Type: " + data.type;
  wrapperEl.classList.add(data.type);
  wrapperEl.addEventListener("dblclick", () => {
    DELETE(url, data.id).then(() => location.reload());
  });

  wrapperEl.addEventListener("click", () => {
    console.log("funziona");
    const form = document.forms.pokemonPatch;
    const elements = form.elements;
    elements.name.value = data.name;
    elements.id.value = data.id;
    elements.type.value = data.type;
  });

  cardEl.append(img, idEl, nameEl, typeEl);
  wrapperEl.append(cardEl);
  parent.append(wrapperEl);
};

GET(url).then((data) => {
  arrCards = [];
  arrCards = data.map((product) => product);
  console.log(arrCards);
});
const card1 = document.querySelector(".cards");

searchPoke.addEventListener("input", (e) => {
  let inputValue = e.target.value;
  let prova = arrCards.filter((prod) => prod.name.includes(inputValue));
  console.log(prova);
  ul1.replaceChildren();
  prova.map((prod) => createCard(url, ul1, prod));
});

GET(`https://picsum.photos/v2/list`).then((prod) =>
  prod.map((product) => console.log(product.id))
);

export { c, q, idIncrements, createCard };
//.includes(inputValue)
