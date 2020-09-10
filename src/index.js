import './styles/style.scss';
import form from './js/search-form';
import main from './js/main-content';
import toggleButton from './js/toggle';
import footer from './js/footer';

const Skycons = require('skycons')(window);

const skycon = new Skycons({ color: 'white' });

const container = document.querySelector('#container');
container.appendChild(form);
container.appendChild(main);
container.appendChild(toggleButton);
container.appendChild(footer);

const weatherForm = document.querySelector('.form');
const formInput = document.querySelector('.search');
const mainTemp = document.querySelector('.temp');
const mainLocation = document.querySelector('.location');
const realFeel = document.querySelector('.feel');
const humidity = document.querySelector('.humidity');
const toggle = document.querySelector('.toggle');
const toggler = document.querySelector('.toggler');
const footerDesc = document.querySelector('.currentTempDesc');
const footerMax = document.querySelector('.TodayTemp');
const footerMin = document.querySelector('.TonightTemp');
const tomorrowTemp = document.querySelector('.TomorrowTemp');

const key = '929f44f39fa3d7465cb2e466b81dfc25';

const toFahrenheit = (temp) => temp * (9 / 5) + 32;
const convertTemp = (data) => {
  const { main } = data;
  const mainTempF = toFahrenheit(main.temp);
  const realFeelF = toFahrenheit(main.feels_like);
  const highF = toFahrenheit(main.temp_max);
  const lowF = toFahrenheit(main.temp_min);
  const tomorrowF = toFahrenheit(20);

  footerMax.innerHTML = `${Math.floor(main.temp_max)}°C`;
  footerMin.innerHTML = `${Math.floor(main.temp_min)}°C`;

  toggle.addEventListener('change', () => {
    if (toggler.checked) {
      mainTemp.innerHTML = `${Math.floor(mainTempF)}°F`;
      realFeel.innerHTML = `Feels like: ${Math.floor(realFeelF)}°F`;
      footerMax.innerHTML = `${Math.floor(highF)}°F`;
      footerMin.innerHTML = `${Math.floor(lowF)}°F`;
      tomorrowTemp.innerHTML = `${Math.floor(tomorrowF)}°F`;
    } else {
      mainTemp.innerHTML = `${Math.floor(main.temp)}°C`;
      realFeel.innerHTML = `Feels like: ${Math.floor(main.feels_like)}°C`;
      footerMax.innerHTML = `${Math.floor(main.temp_max)}°C`;
      footerMin.innerHTML = `${Math.floor(main.temp_min)}°C`;
      tomorrowTemp.innerHTML = '20°C';
    }
  });
};

const addSkycon = (data) => {
  skycon.set('icon4', 'clear_night');
  skycon.play();
  skycon.set('icon5', 'clear_day');
  skycon.play();
  if (data.weather[0].main === 'Clouds') {
    skycon.set('icon', 'cloudy');
    skycon.play();
    skycon.set('icon2', 'cloudy');
    skycon.play();
    skycon.set('icon3', 'cloudy');
    skycon.play();
  } else if (
    data.weather[0].main === 'Rain'
    || data.weather[0].main === 'Thunderstorms'
    || data.weather[0].main === 'Drizzle'
  ) {
    skycon.set('icon', 'rain');
    skycon.play();
    skycon.set('icon2', 'rain');
    skycon.play();
    skycon.set('icon3', 'rain');
    skycon.play();
  } else if (
    data.weather[0].main === 'Mist'
    || data.weather[0].main === 'Smoke'
    || data.weather[0].main === 'Haze'
    || data.weather[0].main === 'Dust'
    || data.weather[0].main === 'Fog'
    || data.weather[0].main === 'Sand'
    || data.weather[0].main === 'Ash'
    || data.weather[0].main === 'Squall'
  ) {
    skycon.set('icon', 'fog');
    skycon.play();
    skycon.set('icon2', 'fog');
    skycon.play();
    skycon.set('icon23', 'fog');
    skycon.play();
  } else if (data.weather[0].icon === '01n') {
    skycon.set('icon', 'clear_night');
    skycon.play();
    skycon.set('icon2', 'clear_night');
    skycon.play();
    skycon.set('icon3', 'clear_night');
    skycon.play();
  } else if (data.weather[0].icon === '01d') {
    skycon.set('icon', 'clear_day');
    skycon.play();
    skycon.set('icon2', 'clear_day');
    skycon.play();
    skycon.set('icon3', 'clear_day');
    skycon.play();
  } else if (
    data.weather[0].icon === 'Wind'
    || data.weather[0].main === 'Tornado'
  ) {
    skycon.set('icon', 'wind');
    skycon.play();
    skycon.set('icon2', 'wind');
    skycon.play();
    skycon.set('icon3', 'wind');
    skycon.play();
  } else if (data.weather[0].main === 'Snow') {
    skycon.set('icon', 'snow');
    skycon.play();
    skycon.set('icon2', 'snow');
    skycon.play();
    skycon.set('icon3', 'snow');
    skycon.play();
  } else {
    skycon.set('icon', 'clear_day');
    skycon.play();
    skycon.set('icon2', 'clear_day');
    skycon.play();
    skycon.set('icon3', 'clear_day');
    skycon.play();
  }
};

const displayData = (data) => {
  const { main } = data;
  mainTemp.innerHTML = `${Math.floor(main.temp)}°C`;
  mainLocation.innerHTML = `${data.name}, ${data.sys.country}`;
  realFeel.innerHTML = `Feels like: ${Math.floor(main.feels_like)}°C`;
  humidity.innerHTML = `Humidity: ${main.humidity}%`;
  footerDesc.innerHTML = `${data.weather[0].description}`;
  footerMax.innerHTML = `${Math.floor(main.temp_max)}°C`;
  footerMin.innerHTML = `${Math.floor(main.temp_min)}°C`;
  tomorrowTemp.innerHTML = '20°C';
  convertTemp(data);
  addSkycon(data);
};

const changeImage = (data) => {
  if (data.weather[0].icon === '01n') {
    container.classList = '';
    container.classList.add('night-img');
  } else if (data.weather[0].main === 'Clouds') {
    container.classList = '';
    container.classList.add('cloudy-img');
  } else if (data.weather[0].main === 'Snow') {
    container.classList = '';
    container.classList.add('snow-img');
  } else if (
    data.weather[0].main === 'Rain'
    || data.weather[0].main === 'Drizzle'
  ) {
    container.classList = '';
    container.classList.add('rain-img');
  } else if (data.weather[0].main === 'Thunderstorm') {
    container.classList = '';
    container.classList.add('storm-img');
  } else {
    container.classList = '';
    container.classList.add('default-img');
  }
};

async function getWeather(value) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}&units=metric`,
    );
    const result = await response.json();
    const data = result;
    displayData(data);
    changeImage(data);
  } catch (error) {
    formInput.value = '';
    formInput.classList.add('error');
    formInput.placeholder = 'Enter a valid city';
  }
}

getWeather('granada');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeather(formInput.value);
  weatherForm.reset();
  toggler.checked = false;
});
