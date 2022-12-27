import products from "./products.js";

for (let product of products) console.log(product.discount);

//------navbar------
const navNode = document.getElementById("navbar");

const nav = document.createElement("nav");
const ul = document.createElement("ul");
const liImg = document.createElement("li");
const li = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const aImg = document.createElement("a");
const img = document.createElement("img");
const a = document.createElement("a");
const a2 = document.createElement("a");
const a3 = document.createElement("a");
img.setAttribute("src", "./image/LogoEdgemony.png");
img.setAttribute("alt", ".Edgemony.png");
img.setAttribute("width", "15");
img.setAttribute("height", "15");
a.setAttribute("href", "#Contact");
a2.setAttribute("href", "#New");
a3.setAttribute("href", "#Old");
a.textContent = "Contact";
a2.textContent = "New";
a3.textContent = "Old";
liImg.appendChild(aImg);
li.appendChild(a);
li2.appendChild(a2);
li3.appendChild(a3);
aImg.appendChild(img);
ul.append(liImg, li, li2, li3);
nav.appendChild(ul);
navNode.appendChild(nav);

//--------hero--------
const heroNode = document.querySelector(".heroHere");
const hero = document.createElement("hero");
const h1Hero = document.createElement("h1");
h1Hero.textContent = "Welcome to Vendita in Contanti";
const pHero = document.createElement("p");
pHero.textContent =
  "Approfitta dei saldi e aquista gli ultimi prodotti della vecchia collezione";
hero.append(h1Hero, pHero);
heroNode.appendChild(hero);

//-------card--------
const createCard = (title, images, description, category, discount, parent) => {
  const cardNode = document.createElement("div");
  const spaceOne = document.createElement("div");
  spaceOne.className = "space";
  cardNode.className = "card";

  const titleNode = document.createElement("h1");
  titleNode.textContent = title;

  const imgNode = document.createElement("img");
  imgNode.setAttribute("src", images);
  imgNode.setAttribute("alt", category);
  const parNode = document.createElement("p");
  parNode.textContent = description;

  cardNode.append(titleNode, imgNode, parNode);
  spaceOne.appendChild(cardNode);
  parent.appendChild(spaceOne);
};

const productDiscountNode = document.querySelector(".products_discount");
const headerProductDiscount = document.createElement("h1");
headerProductDiscount.textContent = "Products on Offer";
productDiscountNode.appendChild(headerProductDiscount);

const newProductNode = document.querySelector(".new_products");
const headerNewProduct = document.createElement("h1");
headerNewProduct.textContent = "New Collection";
newProductNode.appendChild(headerNewProduct);

products
  .filter(
    (product) => product.category === "smartphones" && product.discount === true
  )
  .map((product) => {
    createCard(
      product.title,
      product.thumbnail,
      product.description,
      product.category,
      product.discount,
      productDiscountNode
    );
  });

products
  .filter(
    (product) =>
      product.category === "smartphones" && product.discount === false
  )
  .map((product) => {
    createCard(
      product.title,
      product.thumbnail,
      product.description,
      product.category,
      product.discount,
      newProductNode
    );
  });

//-----FoodBar-----

const footer = document.querySelector("footer");
const contactIcon = document.createElement("div");
const fb = document.createElement("a");
const imgFB = document.createElement("img");
imgFB.setAttribute("src", "./image/fb.png");
imgFB.setAttribute("height", 15);
fb.appendChild(imgFB);

const tw = document.createElement("a");
const imgTW = document.createElement("img");
imgTW.setAttribute("src", "./image/twitter.png");
imgTW.setAttribute("height", 15);
tw.appendChild(imgTW);

const ig = document.createElement("a");
const imgIG = document.createElement("img");
imgIG.setAttribute("src", "./image/ig2.png");
imgIG.setAttribute("height", 15);
ig.appendChild(imgIG);

// const yt = document.createElement("a");
// const imgYT = document.createElement("img");
// imgYT.setAttribute("src", "./image/yt.svg");
// imgYT.setAttribute("height", 15);
// yt.appendChild(imgYT);

const wa = document.createElement("a");
const imgWA = document.createElement("img");
imgWA.setAttribute("src", "./image/WhatsApp.png");
imgWA.setAttribute("height", 18);
wa.appendChild(imgWA);

const tl = document.createElement("a");
const imgTL = document.createElement("img");
imgTL.setAttribute("src", "./image/tl.svg");
imgTL.setAttribute("height", 15);
wa.appendChild(imgTL);

contactIcon.append(fb, tw, ig, wa, tl);
footer.appendChild(contactIcon);
