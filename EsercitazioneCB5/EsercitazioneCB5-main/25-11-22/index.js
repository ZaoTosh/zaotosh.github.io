// inclusione modulo express
const express = require("express");
// inclusione nostro modulo calcolatrice
const mod_calc = require("./src/modulo_calcolatrice");

const app = express();

// rende disponibile all'esterno la cartella public
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server avviato sulla porta 3000!");
});
app.get("/calc", function (req, res) {
  res.sendFile("calc.html", { root: __dirname + "/src/resources" });
});
//--------SUM----------
app.get("/sum", function (req, res) {
  let p1 = req.query.param1;
  let p2 = req.query.param2;
  const result = mod_calc.sum(p1, p2);
  console.log("risultato: " + result);
  res.status(200).send(result + "");
});

app.get("/page_sum", function (req, res) {
  res.sendFile("sum.html", { root: __dirname + "/src/resources" });
});

//--------SUB----------
app.get("/sub", function (req, res) {
  let p1 = req.query.param1;
  let p2 = req.query.param2;
  const result = mod_calc.sub(p1, p2);
  console.log("risultato: " + result);
  res.status(200).send(result + "");
});

app.get("/page_sub", function (req, res) {
  res.sendFile("sub.html", { root: __dirname + "/src/resources" });
});

//--------MULT----------
app.get("/mult", function (req, res) {
  let p1 = req.query.param1;
  let p2 = req.query.param2;
  const result = mod_calc.mult(p1, p2);
  console.log("risultato: " + result);
  res.status(200).send(result + "");
});

app.get("/page_mult", function (req, res) {
  res.sendFile("mult.html", { root: __dirname + "/src/resources" });
});

//--------DIV----------
app.get("/div", function (req, res) {
  let p1 = req.query.param1;
  let p2 = req.query.param2;
  const result = mod_calc.div(p1, p2);
  console.log("risultato: " + result);
  res.status(200).send(result + "");
});

app.get("/page_div", function (req, res) {
  res.sendFile("div.html", { root: __dirname + "/src/resources" });
});
