const divCard = document.querySelector(".card");

const insertNum = (n) => {
  if (n > 9 && n < 100) return "#0" + n;
  else if (n <= 9) return "#00" + n;
  else return "#" + n;
};
//-------card--------
const createCard = (image, num, namePoke, typePoke) => {
  const cardNode = document.createElement("div");
  cardNode.className = "cardAll";

  const nameNode = document.createElement("h2");
  nameNode.textContent = namePoke[0].toUpperCase() + namePoke.slice(1);

  const imgNode = document.createElement("img");
  imgNode.setAttribute("src", image);
  imgNode.setAttribute("alt", typePoke);

  const typeNode = document.createElement("p");
  typeNode.textContent = "Type: " + typePoke;

  const numNode = document.createElement("h3");
  numNode.textContent = insertNum(num);

  const colorPokemon = colorPoke[typePoke];
  cardNode.style.background = colorPokemon;

  cardNode.append(imgNode, numNode, nameNode, typeNode);
  divCard.append(cardNode);
};

const colorPoke = {
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  ghost: "#705898",
  ice: "#98d8d8",
};

for (let i = 1; i <= 150; i++) {
  let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
  let jsonPokemon = await pokemon.json();

  createCard(
    jsonPokemon.sprites.other.dream_world.front_default,
    jsonPokemon.id,
    jsonPokemon.name,
    jsonPokemon.types[0].type.name
  );
}
