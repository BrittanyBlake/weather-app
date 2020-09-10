import "./styles/style.scss";
import form from "./js/search-form";
import main from "./js/main-content";
import toggleButton from "./js/toggle";
import footer from "./js/footer";

const Skycons = require("skycons")(window);

const skycon = new Skycons({ color: "white" });

const container = document.querySelector("#container");
container.appendChild(form);
container.appendChild(main);
container.appendChild(toggleButton);
container.appendChild(footer);

const weatherForm = document.querySelector(".form");
const formInput = document.querySelector(".search");
const mainTemp = document.querySelector(".temp");
const mainLocation = document.querySelector(".location");
const realFeel = document.querySelector(".feel");
const high = document.querySelector(".high");
const low = document.querySelector(".low");
const humidity = document.querySelector(".humidity");
const smallText = document.querySelector(".weather-text");
const toggle = document.querySelector(".toggle");

const key = "929f44f39fa3d7465cb2e466b81dfc25";

async function getWeather(value) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}&units=metric`
  );
  const result = await response.json();
  const data = result;
  displayData(data);
  changeImage(data);
  console.log(data);
}

getWeather("granada");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather(formInput.value);
  weatherForm.reset();
});

const displayData = (data) => {
  mainTemp.innerHTML = `${Math.floor(data.main.temp)}° C`;
  mainLocation.innerHTML = `${data.name}, ${data.sys.country}`;
  realFeel.innerHTML = `Feels like: ${Math.floor(data.main.feels_like)}° C`;
  high.innerHTML = `Today's high: ${Math.floor(data.main.temp_max)}° C`;
  low.innerHTML = `Today's low: ${Math.floor(data.main.temp_min)}° C`;
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
  smallText.innerHTML = `${data.weather[0].description}`;
  convertTemp(data);
  addSkycon(data);
};

const addSkycon = (data) => {
  if (data.weather[0].main === "Clouds") {
    skycon.set("icon", "cloudy");
    skycon.play();
  } else if (
    data.weather[0].main === "Rain" ||
    data.weather[0].main === "Thunderstorms" ||
    data.weather[0].main === "Drizzle"
  ) {
    skycon.set("icon", "rain");
    skycon.play();
  } else if (
    data.weather[0].main === "Mist" ||
    data.weather[0].main === "Smoke" ||
    data.weather[0].main === "Haze" ||
    data.weather[0].main === "Dust" ||
    data.weather[0].main === "Fog" ||
    data.weather[0].main === "Sand" ||
    data.weather[0].main === "Ash" ||
    data.weather[0].main === "Squall"
  ) {
    skycon.set("icon", "fog");
    skycon.play();
  } else if (data.weather[0].icon === "01n") {
    skycon.set("icon", "clear_night");
    skycon.play();
  } else if (data.weather[0].icon === "01d") {
    skycon.set("icon", "clear_day");
    skycon.play();
  } else if (
    data.weather[0].icon === "Wind" ||
    data.weather[0].main === "Tornado"
  ) {
    skycon.set("icon", "wind");
    skycon.play();
  } else if (
    data.weather[0].main === "Snow"
  ) {
    skycon.set("icon", "snow");
    skycon.play();
  } else {
    skycon.set("icon", "clear_day");
    skycon.play();
  }
};

const changeImage = (data) => {
  if (data.weather[0].icon === "01n"){
    container.classList = "";
    container.classList.add("night-img");
  }else if (data.weather[0].main === "Clouds") {
      container.classList = "";
      container.classList.add("cloudy-img");
    } else if (data.weather[0].main === "Snow") {
      container.classList = "";
      container.classList.add("snow-img");
    } else if (
      data.weather[0].main === "Rain" ||
      data.weather[0].main === "Drizzle"
    ) {
      container.classList = "";
      container.classList.add("rain-img");
    } else if (data.weather[0].main === "Thunderstorm") {
      container.classList = "";
      container.classList.add("thunderstorm-img");
    } else {
      container.classList = "";
      container.classList.add("default-img");
    }
};
const toFahrenheit = (temp) => temp * (9 / 5) + 32;

const convertTemp = (data) => {
  const mainTempF = toFahrenheit(data.main.temp);
  const realFeelF = toFahrenheit(data.main.feels_like);
  const highF = toFahrenheit(data.main.temp_max);
  const lowF = toFahrenheit(data.main.temp_min);

  toggle.addEventListener("change", (e) => {
    if (e.target.checked) {
      mainTemp.innerHTML = `${Math.floor(mainTempF)}° F`;
      realFeel.innerHTML = `Feels like: ${Math.floor(realFeelF)}° F`;
      high.innerHTML = `Today's high: ${Math.floor(highF)}° F`;
      low.innerHTML = `Today's low: ${Math.floor(lowF)}° F`;
    } else {
      mainTemp.innerHTML = `${Math.floor(data.main.temp)}° C`;
      realFeel.innerHTML = `Feels like: ${Math.floor(data.main.feels_like)}° C`;
      high.innerHTML = `Today's high: ${Math.floor(data.main.temp_max)}° C`;
      low.innerHTML = `Today's low: ${Math.floor(data.main.temp_min)}° C`;
    }
  });
};
