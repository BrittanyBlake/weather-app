const main = (() => {
  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "header");
  const mainTemp = document.createElement("div");
  mainTemp.innerHTML = `<h1 class="temp"> </h1>`;
  const mainLocation = document.createElement("div");
  mainLocation.innerHTML = `<h2 class="location"></h2>`;
  const iconDiv = document.createElement("div");
  iconDiv.setAttribute("class", "icon");
  const canvasIcon = document.createElement("canvas");
  canvasIcon.setAttribute("id", "icon");
  canvasIcon.setAttribute("width", "128");
  canvasIcon.setAttribute("height", "128");
  const smallText = document.createElement('small')
  smallText.setAttribute('class', 'weather-text')
  // smallText.innerHTML = 'few clouds'
  const descriptionDiv = document.createElement("div");
  descriptionDiv.setAttribute("class", "weather-description");
  const realFeel = document.createElement("h4");
  realFeel.setAttribute('class', 'feel description-items')
  // realFeel.innerHTML = "Feels like: 19°C";
  const high = document.createElement("h4");
  high.setAttribute("class", "high description-items");
  // high.innerHTML = "Today's High: 20°C";
  const low = document.createElement("h4");
  low.setAttribute("class", "low description-items");
  // low.innerHTML = "Today's Low: 18°C";
  const humidity = document.createElement("h4");
  humidity.setAttribute("class", "humidity description-items");
  // humidity.innerHTML = "humidity: 68%";

  mainTemp.appendChild(descriptionDiv);
  mainDiv.appendChild(mainTemp);
  iconDiv.appendChild(smallText);
  iconDiv.appendChild(canvasIcon);
  mainDiv.appendChild(iconDiv);
  mainTemp.appendChild(mainLocation);
  mainLocation.appendChild(descriptionDiv)
  descriptionDiv.appendChild(realFeel)
  descriptionDiv.appendChild(high);
  descriptionDiv.appendChild(low);
  descriptionDiv.appendChild(humidity);
  return mainDiv;
})();

export default main;