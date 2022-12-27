import { GET, POST, DELETE, getId } from "./api.js";

const c = (el) => document.createElement(el);
const q = (el) => document.querySelector(el);

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
function getPromisePoke() {
  for (let i = 1; i <= 150; i++) {
    Arr[i] = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((pokemon) => pokemon.json())
      .then((res) => res);
  }
}

// const getPromisePoke = async (namePoke) => {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
//   const resp = await response.json();
//   const respo = await resp.then((res) => {
//     if (namePoke === res.name)
//       return res.sprites.other.dream_world.front_default;
//     else "https://picsum.photos/130/130/?1";
//   });
// };
// function getImg(namePoke) {
//   getPromisePoke().then((res) => {
//     if (namePoke === res.name)
//       return res.sprites.other.dream_world.front_default;
//     else "https://picsum.photos/130/130/?1";
//   });
// }
//console.log(getPromisePoke("bulbasaur"));
const BASE_URL1 = "https://jsonplaceholder.typicode.com/posts";
// "title": "eum et est occaecati"
let productsList = [];
const GET1 = async (BASE_URL) =>
  await fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => data);

// GET1(BASE_URL1).then((data) => {
//   productsList = data.filter((product) => product.id <= 10);
// });
console.log(productsList);
let i = 1;
const createCard = (url, parent, name, type, id) => {
  i++;
  const wrapperEl = c("li");
  const cardEl = c("div");
  const img = document.createElement("img");
  img.classList.add("card__all__img");
  //img.setAttribute("src", `https://picsum.photos/130/130/?${i}`);
  //img.setAttribute("src", `${getPromisePoke(name.toLowerCase())}`);
  img.setAttribute(
    "src",
    toString(() => {
      for (let i = 1; i <= 150; i++) {
        GET1(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .filter((product) => product.name === name)
          .map((product) => {
            console.log(product.name);
            return product.sprites.other.dream_world.front_default;
          });
      }
    })
  );
  const idEl = c("p");
  const nameEl = c("h1");
  const typeEl = c("p");
  wrapperEl.classList.add("card__all");

  idEl.textContent = insertNum(id);
  nameEl.textContent = name[0].toUpperCase() + name.slice(1);
  typeEl.textContent = "Type: " + type;
  wrapperEl.classList.add(type);
  wrapperEl.addEventListener("click", () => {
    DELETE(url, id).then(() => location.reload());
  });

  cardEl.append(img, idEl, nameEl, typeEl);
  wrapperEl.append(cardEl);
  parent.append(wrapperEl);
};

export { c, q, idIncrements, createCard };
