const main = (() => {
  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "header");
  const mainTemp = document.createElement("h1");
  mainTemp.setAttribute("class", "temp");
  mainTemp.innerHTML = "20° C";

  
  mainDiv.appendChild(mainTemp);
  return mainDiv;
})();

export default main;

//   <div id="header">
//         <h1 class="temp"> 20° C</h1>
//  <label for="toggle" class="toggle">
//      <input type="checkbox">
//      <span class="slider round"></span>
//  </label>
//         <h2 class="location">Granada, ES</h2>
//         <p class="date-time">23:30-Tuesday, 8 Sep'19 </p>
//         <p class="skycon"> ICON</p>
//         <small class="weather-text"> few clouds</small>

//         <div class="weather-description">
//             <h3>Feels Like: 19°C</h3>
//             <h3>High: 20°C</h3>
//             <h3>Low: 18°C</h3>
//             <h3>Humidity: 68%</h3>
//         </div>

//     </div>
