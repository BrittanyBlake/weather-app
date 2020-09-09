import "./styles/style.scss";
import form from "./js/search-form";
import main from "./js/main-content";
import toggleButton from "./js/toggle";
import footer from "./js/footer";

const Skycons = require("skycons")(window);

const container = document.querySelector("#container");
container.appendChild(form);
container.appendChild(main);
container.appendChild(toggleButton);
container.appendChild(footer);

const weatherForm = document.querySelector('.form')
const formInput = document.querySelector(".search");
const mainTemp = document.querySelector(".temp");
const mainLocation = document.querySelector(".location")
const realFeel = document.querySelector(".feel")
const high = document.querySelector(".high")
const low = document.querySelector(".low");
const humidity = document.querySelector(".humidity");
const smallText = document.querySelector(".weather-text");




const key = "929f44f39fa3d7465cb2e466b81dfc25";

async function getWeather(value) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}&units=metric`
    );
    const result = await response.json();
    const data = result;
    displayData(data)
    changeImage(data);
    
  console.log(data)
}

const test = getWeather("granada")

 weatherForm.addEventListener("submit", (e) => {
   e.preventDefault();
   getWeather(formInput.value);
   weatherForm.reset()
   
 });

 const displayData = (data) => {
     mainTemp.innerHTML = `${Math.floor(data.main.temp)}° C`;
     mainLocation.innerHTML = `${data.name}, ${data.sys.country}`
     realFeel.innerHTML = `Feels like: ${Math.floor(data.main.feels_like)}° C`;
     high.innerHTML = `Today's high: ${Math.floor(data.main.temp_max)}° C`;
     low.innerHTML = `Today's low: ${Math.floor(data.main.temp_min)}° C`;
     humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
     smallText.innerHTML = `${data.weather[0].description}`;
 }

 const changeImage = (data) => {
   if (data.weather[0].main === 'Clouds'){
     container.classList = ""
     container.classList.add("cloudy-img");
   } else if (data.weather[0].main === 'Snow'){
     container.classList = "";
     container.classList.add("snow-img");
   } else if (data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle") {
     container.classList = "";
     container.classList.add("rain-img");
   } else if (data.weather[0].main === "Thunderstorm") {
     container.classList = "";
     container.classList.add("thunderstorm-img");
   }else {
     container.classList = "";
     container.classList.add("default-img");
   }

 }
