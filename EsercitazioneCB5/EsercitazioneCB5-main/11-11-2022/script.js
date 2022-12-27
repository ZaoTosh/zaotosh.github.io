const divCard = document.querySelector(".card");
const divButton = document.querySelector(".buttonPoke");
const cardNode = document.createElement("div");
const nameNode = document.createElement("h2");
const imgNode = document.createElement("img");
const typeNode = document.createElement("p");
const numNode = document.createElement("h3");

const insertNum = (n) => {
  if (n > 9 && n < 100) return `#0${n}`;
  if (n <= 9) return `#00${n}`;
  return `#${n}`;
};

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
  //Promessa ricezione pacchetto
  arrRespPoke.then((jsonPokemon) =>
    createCard(
      jsonPokemon.sprites.other.dream_world.front_default,
      jsonPokemon.id,
      jsonPokemon.name,
      jsonPokemon.types[0].type.name
    )
  );
};

const fetchFunction = async (URL) => {
  // invio della richiesta al server
  const prom = await fetch(URL).then((resp) => resp.json());

  return prom;
};

//-------card--------
const createCard = (image, num, namePoke, typePoke) => {
  cardNode.className = "cardAll";
  cardNode.classList.add(typePoke);

  //Nome
  nameNode.textContent = namePoke[0].toUpperCase() + namePoke.slice(1);
  //Immagine
  imgNode.setAttribute("src", image);
  imgNode.setAttribute("alt", typePoke);
  //Tipo
  typeNode.textContent = "Type: " + typePoke;
  //Numero
  numNode.textContent = insertNum(num);

  cardNode.append(imgNode, numNode, nameNode, typeNode);
  divCard.append(cardNode);
};
// bottoni
const buttonNext = document.createElement("button");
buttonNext.textContent = ">";
const buttonPrevius = document.createElement("button");
buttonPrevius.textContent = "<";
divButton.append(buttonPrevius);
divButton.append(buttonNext);

let actualCard = 0;
const fetchNextCardPoke = () => {
  actualCard++;
  const URL = `https://pokeapi.co/api/v2/pokemon/${actualCard}`;
  const arrRespPoke = fetchFunction(URL);
  promiseFunction(arrRespPoke);
  ctrlNextShow(actualCard);
};
const fetchPreviusCardPoke = () => {
  ctrlPreviusShow(actualCard);
  actualCard--;
  const URL = `https://pokeapi.co/api/v2/pokemon/${actualCard}`;
  const arrRespPoke = fetchFunction(URL);
  promiseFunction(arrRespPoke);
};
window.onload = fetchNextCardPoke;
buttonNext.addEventListener("click", fetchNextCardPoke);
buttonPrevius.addEventListener("click", fetchPreviusCardPoke);

//---------Avanzato---------

let ctrlButton = true;
const divPost = document.querySelector(".post");
let lastElement = divPost;

const createPost = (data) => {
  const divTib = document.querySelector(".tib");
  const divId = document.createElement("div");
  const divTitle = document.createElement("div");
  const divBody = document.createElement("div");
  const id = document.createElement("h2");
  const title = document.createElement("h1");
  const body = document.createElement("p");
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
let start = 1;
let limit = 0;
let crosser = 10;
const callback = (array) => {
  array.forEach((card) => {
    if (card.isIntersecting) {
      if (limit < 90) {
        populateCards(crosser);
      } else if (ctrlButton) {
        showMorePost();
        ctrlButton = false;
      }
    }
  });
};
const GET = async (index) => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${index}`
  );
  return await response.json();
};

const populateCards = (num) => {
  limit += num;

  for (let i = start; i <= limit; i++) {
    GET(i)
      .then((res) => createPost(res))

      .finally(() => {
        observer.unobserve(lastElement);
        lastElement = document.querySelector(".post").lastElementChild;
        observer.observe(lastElement);
      });
  }

  start += num;
};

// Creo il mio observer
const observer = new IntersectionObserver(callback);

// Imposto il mio observer iniziale con il primo elemento visibile al primo download della pagina web.
observer.observe(lastElement);
//Bottone per ulteriori 10 post
const showMorePost = () => {
  const functionBtn = async () => {
    for (let i = 91; i <= 100; i++) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${i}`
      )
        .then((resp) => resp.json())
        .then((res) => createPost(res))
        .finally(() => {
          buttonMorePost.disabled = true;
        });
    }
  };

  const buttonMorePost = document.createElement("button");
  buttonMorePost.classList.add(".buttonMorePost");
  buttonMorePost.textContent = "Show More";
  divPost.append(buttonMorePost);
  buttonMorePost.addEventListener("click", functionBtn);
};
