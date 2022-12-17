const container = document.querySelector(".container");
const searchCity = document.querySelector(".csearchCity");
const citySelect = document.querySelector("#framework");
const inputEl = document.querySelector(".searchCity__area");
console.log(citySelect.value);

//genera data odierna.. funzione non utilizzata
const getDate = () => {
  const currentDate = new Date();

  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return currentDate.toLocaleDateString("it-IT", options);
};

//genera orario corrente
const getTimeNow = () => {
  const d = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
  };
  return d.toLocaleTimeString("it-IT", options);
};
//creazione dell card meteo per ogni citta trovata
const createCard = (data) => {
  const citta = document.createElement("div");
  const temperatura = document.createElement("div");
  const meteo = document.createElement("div");
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  citta.className = "citta";
  temperatura.className = "temperatura";
  meteo.className = "meteo";

  const dateEl = document.createElement("h5");
  dateEl.textContent = getTimeNow();
  const cittaEl = document.createElement("h4");
  cittaEl.textContent = data.name;
  const climaEl = document.createElement("h3");
  climaEl.textContent = data.weather[0].main;
  const tempEl = document.createElement("h2");
  tempEl.textContent = parseInt(data.main.temp - 273.15) + "°C";
  const imgEl = document.createElement("img");
  imgEl.classList = data.weather[0].main;
  //imgEl.setAttribute("alt", ".Clouds");

  citta.append(cittaEl, dateEl);
  temperatura.append(tempEl, imgEl);
  meteo.append(climaEl);
  cardEl.append(citta, temperatura, meteo);

  container.append(cardEl);
};

//Funzione fetch singola (unica città)
const fetchFunction = async (URL) => {
  // invio della richiesta al server
  const prom = await fetch(URL, { cache: "no-cache" })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      //abbiamo response.status == 404
      //Messaggio di Errore Fetch città non esistente
      const messageError = document.createElement("h2");
      messageError.textContent = "Città non trovata, riprovare";
      container.append(messageError);
      throw new Error("Fetch Fallita");
    })
    .then((responseJson) => {
      //la città è italiana?
      if (responseJson.sys.country == "IT" || responseJson.name == "Rome")
        createCard(responseJson);
      else {
        //Preparazione messaggio per città non italiane
        const MsgCityNotAllowed = document.createElement("h2");
        MsgCityNotAllowed.textContent =
          "Hai cercato " +
          responseJson.name +
          ". Per il momento l’applicazione funziona solo per il territorio italiano.";
        container.append(MsgCityNotAllowed);
      }
    })
    .catch((error) => {
      console.log("Error Fetch: " + error);
    });
};
//fetch di tutti i capoluoghi italiani
const fetchAllCards = async () => {
  const city = [
    "Aosta",
    "Torino",
    "Genova",
    "Milano",
    "Trento",
    "Venezia",
    "Trieste",
    "Bologna",
    "Firenze",
    "Ancona",
    "Perugia",
    "L'Aquila",
    "Roma",
    "Campobasso",
    "Bari",
    "Napoli",
    "Potenza",
    "Catanzaro",
    "Palermo",
    "Cagliari",
  ];
  for (const iterator of city) {
    const city_name = iterator;
    const API_key = "8cef55a94a7156f79db10a1047430fcf";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`;
    try {
      const cardC = fetchFunction(URL);
    } catch (error) {
      console.error("Errore Chiamata Fetch: " + error);
    }
  }
};

//fetch per ricerca e per selezione
const fetchOneCard = async (city) => {
  const API_key = "8cef55a94a7156f79db10a1047430fcf";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
  const cardC = fetchFunction(URL);
};

//
function getSelectValue() {
  console.log(citySelect.value);
  if (citySelect.value === "All") {
    container.replaceChildren();
    window.onload = fetchAllCards();
  } else {
    container.replaceChildren();
    fetchOneCard(citySelect.value);
  }
}
//listener del serchbar
inputEl.addEventListener("input", (e) => {
  inputValue = e.target.value;
  if (inputValue.length >= 3) {
    container.replaceChildren();
    fetchOneCard(inputValue);
  }
});

if (citySelect.value === "All") window.onload = fetchAllCards();
