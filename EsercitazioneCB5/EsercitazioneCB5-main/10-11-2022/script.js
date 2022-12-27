const divCard = document.querySelector(".card");
const buttonOther = document.createElement("button");
buttonOther.textContent = "Show more";
const idDivNode = document.createElement("div");
const adviceDivNode = document.createElement("div");
idDivNode.className = "idDiv";
adviceDivNode.className = "adviceDiv";

//Immagine
const imgNode = document.createElement("img");
imgNode.setAttribute("src", "./images/pattern-divider-desktop.svg");
imgNode.classList.add("dividerD");

//Immagine
const imgButtonNode = document.createElement("img");
imgButtonNode.setAttribute("src", "./images/icon-dice.svg");
imgButtonNode.classList.add("iconD");
const idNode = document.createElement("h2");
const adviceNode = document.createElement("p");
//-------card--------
const createCard = (id, advice) => {
  idNode.textContent = `ADVICE # ${id}`;
  idNode.classList.add("id");

  adviceNode.textContent = '"' + advice + '"';
  adviceNode.classList.add("advice");

  idDivNode.append(idNode);
  adviceDivNode.append(adviceNode);
  //divNode.appendChild(idDivNode, adviceDivNode, buttonOther);
  divCard.append(idDivNode, adviceDivNode, imgNode, imgButtonNode);
};
// bottone

const urlAdvice = "https://api.adviceslip.com/advice";

/**
 * Get data from the end point
 *
 * @param {string} URL
 */
const getAdvice = (URL) => {
  fetch(URL, { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.slip.id + " " + res.slip.advice);
      createCard(res.slip.id, res.slip.advice);
    });
};
const onFirstLoad = () => {
  imgButtonNode.addEventListener("click", () => {
    getAdvice(urlAdvice);
  });
  getAdvice(urlAdvice);
};
window.onload = onFirstLoad;
