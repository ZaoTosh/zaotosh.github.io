let ctrlButton = true;
const divPost = document.querySelector(".post");
const divButton = document.querySelector(".buttonPost");
let lastElement = divPost;
const ctrlNextShow = (next) => {
  if (next >= 10) buttonNext.disabled = true;
  if (next === 1) buttonPrevius.disabled = true;
  else buttonPrevius.disabled = false;
};
const ctrlPreviusShow = (next) => {
  if (next <= 2) buttonPrevius.disabled = true;
  buttonNext.disabled = false;
};
const promiseFunction = (arrRespPoke) => {
  //
  //
  //Promessa ricezione pacchetto
  arrRespPoke.then((jsonPost) => createPost(jsonPost));
};
const divTib = document.querySelector(".tib");
const divId = document.createElement("div");
const divTitle = document.createElement("div");
const divBody = document.createElement("div");
const id = document.createElement("h2");
const title = document.createElement("h1");
const body = document.createElement("p");
const createPost = (data) => {
  id.classList.add("id");
  title.classList.add("title");
  body.classList.add("body1");
  id.textContent = data.id;
  title.textContent = data.title[0].toUpperCase() + data.title.slice(1);
  body.textContent = data.body[0].toUpperCase() + data.body.slice(1);
  divId.append(id);
  divTitle.append(title);
  divBody.append(body);
  divPost.append(divId, divTitle, divBody);
};
const fetchFunction = async (URL) => {
  // invio della richiesta al server
  const prom = await fetch(URL).then((resp) => resp.json());
  return prom;
}; // bottoni
//
const buttonNext = document.createElement("button");
buttonNext.textContent = ">";
const buttonPrevius = document.createElement("button");
buttonPrevius.textContent = "<";
divButton.append(buttonPrevius);
divButton.append(buttonNext);
let actualPost = 0;
const fetchNext = () => {
  actualPost++;
  const URL = `https://jsonplaceholder.typicode.com/posts/${actualPost}`;
  const arrResp = fetchFunction(URL);
  promiseFunction(arrResp);
  ctrlNextShow(actualPost);
};
const fetchPrevius = () => {
  ctrlPreviusShow(actualPost);
  actualPost--;
  const URL = `https://jsonplaceholder.typicode.com/posts/${actualPost}`;
  const arrResp = fetchFunction(URL);
  promiseFunction(arrResp);
};
window.onload = fetchNext;
buttonNext.addEventListener("click", fetchNext);
buttonPrevius.addEventListener("click", fetchPrevius);
