import { qs, ce, GET } from "./utils.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/photos";
const cardList = qs(".cardList");
const inputEl = qs(".search-input");
let inputValue = "";
let productsList = [];

const createCardEl = (data, parent) => {
  const { thumbnailUrl, title, url } = data;

  //   const elements = {
  //     cardEl: ce("div"),
  //     imgEl: ce("img"),
  //     titleEl: ce("h4"),
  //     urlEl: ce("p"),
  //   };
  const cardEl = ce("div");
  const imgEl = ce("img");
  const titleEl = ce("h4");
  const urlEl = ce("span");

  cardEl.className = "card";
  imgEl.className = "card__img";
  imgEl.setAttribute("src", thumbnailUrl);
  imgEl.setAttribute("alt", title);
  titleEl.textContent = title;
  titleEl.className = "card__title";
  urlEl.className = "card__text";
  urlEl.textContent = url;

  cardEl.append(imgEl, titleEl, urlEl);
  parent.append(cardEl);
};

GET(BASE_URL).then((data) => {
  productsList = data
    .filter((product) => product.id <= 10)
    .map((product) => {
      createCardEl(product, cardList);
      return product;
    });
  console.log(productsList);

  inputEl.addEventListener("input", (e) => {
    cardList.replaceChildren();
    inputValue = e.target.value;
    productsList
      .filter((product) => product.title.includes(inputValue))
      .map((product) => createCardEl(product, cardList));
  });
});
