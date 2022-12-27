const divCard = document.querySelector(".card");
const divButton = document.querySelector(".buttonPoke");

const insertNum = (n) => {
  if (n > 9 && n < 100) return `#0${n}`;
  if (n <= 9) return `#00${n}`;
  return `#${n}`;
};

const ctrlNextShowMore = (next) => {
  if (next >= 150) button.disabled = true;
};

const promiseFunction = (arrRespPoke) => {
  //Promessa ricezione pacchetto
  Promise.all(arrRespPoke).then((res) =>
    res.map((jsonPokemon) =>
      createCard(
        jsonPokemon.sprites.other.dream_world.front_default,
        jsonPokemon.id,
        jsonPokemon.name,
        jsonPokemon.types[0].type.name
      )
    )
  );
};

const fetchFunction = (arrRequest) => {
  // invio della richiesta al server
  const prom = arrRequest.map((res) => fetch(res).then((resp) => resp.json()));
  return prom;
};
//-------card--------
const createCard = (image, num, namePoke, typePoke) => {
  const cardNode = document.createElement("div");
  cardNode.className = "cardAll";
  cardNode.classList.add(typePoke);
  //Nome
  const nameNode = document.createElement("h2");
  nameNode.textContent = namePoke[0].toUpperCase() + namePoke.slice(1);
  //Immagine
  const imgNode = document.createElement("img");
  imgNode.setAttribute("src", image);
  imgNode.setAttribute("alt", typePoke);
  //Tipo
  const typeNode = document.createElement("p");
  typeNode.textContent = "Type: " + typePoke;
  //Numero
  const numNode = document.createElement("h3");
  numNode.textContent = insertNum(num);

  cardNode.append(imgNode, numNode, nameNode, typeNode);
  divCard.append(cardNode);
};
// bottone
const button = document.createElement("button");
button.textContent = "Show more";
divButton.append(button);

// Array di richieste
let nextShowMore = 0;
const fetchCardPoke = () => {
  const arrRequest = [];

  for (let i = 1; i <= 50; i++) {
    arrRequest.push(`https://pokeapi.co/api/v2/pokemon/${i + nextShowMore}`);
  }
  const arrRespPoke = fetchFunction(arrRequest);
  promiseFunction(arrRespPoke);
  nextShowMore += 50;
  ctrlNextShowMore(nextShowMore);
};
window.onload = fetchCardPoke;
button.addEventListener("click", fetchCardPoke);
