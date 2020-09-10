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
  canvasIcon.setAttribute("id", "icon2");
  canvasIcon.setAttribute("width", "128");
  canvasIcon.setAttribute("height", "128");
  const smallText = document.createElement("small");
  smallText.setAttribute("class", "weather-text");
  const descriptionDiv = document.createElement("div");
  descriptionDiv.setAttribute("class", "weather-description");
  const realFeel = document.createElement("h4");
  realFeel.setAttribute("class", "feel description-items");
  const high = document.createElement("h4");
  high.setAttribute("class", "high description-items");
  const low = document.createElement("h4");
  low.setAttribute("class", "low description-items");
  const humidity = document.createElement("h4");
  humidity.setAttribute("class", "humidity description-items");

  mainTemp.appendChild(descriptionDiv);
  mainDiv.appendChild(canvasIcon);
  mainDiv.appendChild(mainTemp);
  iconDiv.appendChild(smallText);
  
  mainDiv.appendChild(iconDiv);
  mainDiv.appendChild(mainLocation)
  // mainTemp.appendChild(mainLocation);
  mainLocation.appendChild(mainTemp);
  descriptionDiv.appendChild(realFeel);
  descriptionDiv.appendChild(high);
  descriptionDiv.appendChild(low);
  descriptionDiv.appendChild(humidity);
  return mainDiv;
})();

export default main;
