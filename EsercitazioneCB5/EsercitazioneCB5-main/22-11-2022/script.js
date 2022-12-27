"use strict";

// const os = require("node:os");
// console.log(os.uptime());
// console.log(os.userInfo());
// console.log(os.arch());
// const http = require();

import { sum, sub, mult, div } from "./mod_calc.js";
import http from "http";
import url from "url";
import fs from "fs";

const utente = "Zao";
const server = http.createServer((req, res) => {
  let myURL = new URL(req.url, "http://localhost:3000/");
  console.log("Pathname: " + myURL.pathname);
  let pathName = myURL.pathname;
  let USP = new URLSearchParams(myURL.search);

  let num_1 = myURL.searchParams.get("num_1");
  let num_2 = myURL.searchParams.get("num_2");

  switch (pathName) {
    case "/sum":
    case "/sum":
      console.log("Somma: " + sum(...USP));
      break;
    case "/sub":
      console.log("Sottrazione: " + sub(num_1, num_2));
      break;
    case "/mult":
      console.log("Multiplicazio: " + mult(...USP));
      break;
    case "/div":
      console.log("Divisione: " + div(num_1, num_2));
      break;
    default:
      console.log("Operazione non valida");
  }

  res.end();
});
// demone in ascolto
server.listen(3000);

// function ajaxCall() {
//   $.ajax({
//     // Our sample url to make request
//     url: "https://jsonplaceholder.typicode.com/todos/1",

//     // Type of Request
//     type: "GET",

//     // Function to call when to
//     // request is ok
//     success: function (data) {
//       var x = JSON.stringify(data);
//       console.log(x);
//     },

//     // Error handling
//     error: function (error) {
//       console.log(`Error ${error}`);
//     },
//   });
// }
// ajaxCall();

// const MyArgv = process.argv.slice(2);

// switch (MyArgv[0]) {
//   case "sum":
//     console.log("Somma: " + sum(...MyArgv));
//     break;
//   case "sub":
//     console.log("Sottrazione: " + sub(MyArgv[1], MyArgv[2]));
//     break;
//   case "mult":
//     console.log("Multiplicazio: " + mult(...MyArgv.slice(1)));
//     break;
//   case "div":
//     console.log("Divisione: " + div(MyArgv[1], MyArgv[2]));
//     break;
//   default:
//     console.log("Operazione non valida");
// }

// console.log("Argv: " + MyArgv);
