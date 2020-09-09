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



const key = "929f44f39fa3d7465cb2e466b81dfc25";

async function getWeather(value) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}&units=metric`
    );
    const result = await response.json();
    const data = result;
  console.log(data)
}
const test = getWeather("basseterre")

console.log(test)

 weatherForm.addEventListener("submit", (e) => {
   e.preventDefault();
   getWeather(formInput.value);
   weatherForm.reset()
 });