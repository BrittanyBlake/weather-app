const footer = (() => {
  const footer = document.createElement("footer");
  footer.setAttribute("class", "weekly");
  //current
  const sundayDiv = document.createElement("div");
  sundayDiv.setAttribute("class", "current");
  const sundayList = document.createElement("ul");
  const sunday = document.createElement("li");
  sunday.innerHTML = "Current Weather";
  const sundayIcon = document.createElement("li");
  sundayIcon.setAttribute("class", "icon2");
  const canvasIcon = document.createElement("canvas");
  canvasIcon.setAttribute("id", "icon");
  canvasIcon.setAttribute("width", "100");
  canvasIcon.setAttribute("height", "100");
  // sundayIcon.innerHTML = "ICON";
  const sundayTemp = document.createElement("li");
  sundayTemp.setAttribute('class', 'sundayTemp')
  // sundayTemp.innerHTML = "33°C";
  //Today
  const mondayDiv = document.createElement("div");
  mondayDiv.setAttribute("class", "today");
  const mondayList = document.createElement("ul");
  const monday = document.createElement("li");
  monday.innerHTML = "Today's High";
  const mondayIcon = document.createElement("li");
  mondayIcon.setAttribute("class", "icon2");
  const canvasIconToday = document.createElement("canvas");
  canvasIconToday.setAttribute("id", "icon3");
  canvasIconToday.setAttribute("width", "100");
  canvasIconToday.setAttribute("height", "100");
  // mondayIcon.innerHTML = "ICON";
  const mondayTemp = document.createElement("li");
  mondayTemp.setAttribute("class", "mondayTemp");
  // mondayTemp.innerHTML = "20°C";
  //tonight
  const tuesdayDiv = document.createElement("div");
  tuesdayDiv.setAttribute("class", "tonight");
  const tuesdayList = document.createElement("ul");
  const tuesday = document.createElement("li");
  tuesday.innerHTML = "Tonight's Low";
  const tuesdayIcon = document.createElement("li");
  tuesdayIcon.setAttribute("class", "icon2");
  const canvasIconTonight = document.createElement("canvas");
  canvasIconTonight.setAttribute("id", "icon4");
  canvasIconTonight.setAttribute("width", "120");
  canvasIconTonight.setAttribute("height", "120");
  // tuesdayIcon.innerHTML = "ICON";
  const tuesdayTemp = document.createElement("li");
  tuesdayTemp.setAttribute("class", "tuesdayTemp");
  // tuesdayTemp.innerHTML = "20°C";
  //Tomorrow
  const wednesdayDiv = document.createElement("div");
  wednesdayDiv.setAttribute("class", "tomorrow");
  const wednesdayList = document.createElement("ul");
  const wednesday = document.createElement("li");
  wednesday.innerHTML = "Tomorrow";
  const wednesdayIcon = document.createElement("li");
  wednesdayIcon.setAttribute("class", "icon2");
  const canvasIconTomorrow = document.createElement("canvas");
  canvasIconTomorrow.setAttribute("id", "icon5");
  canvasIconTomorrow.setAttribute("width", "90");
  canvasIconTomorrow.setAttribute("height", "90");
  // wednesdayIcon.innerHTML = "ICON";
  const wednesdayTemp = document.createElement("li");
  wednesdayTemp.setAttribute("class", "wednesdayTemp");
  // wednesdayTemp.innerHTML = "20°C";
  //disregard
  const thursdayDiv = document.createElement("div");
  thursdayDiv.setAttribute("class", "day");
  const thursdayList = document.createElement("ul");
  const thursday = document.createElement("li");
  thursday.innerHTML = "Thursday";
  const thursdayIcon = document.createElement("li");
  thursdayIcon.innerHTML = "ICON";
  const thursdayTemp = document.createElement("li");
  thursdayTemp.innerHTML = "20°C";
  const fridayDiv = document.createElement("div");
  fridayDiv.setAttribute("class", "day");
  const fridayList = document.createElement("ul");
  const friday = document.createElement("li");
  friday.innerHTML = "Friday";
  const fridayIcon = document.createElement("li");
  fridayIcon.innerHTML = "ICON";
  const fridayTemp = document.createElement("li");
  fridayTemp.innerHTML = "20°C";

  fridayIcon.appendChild(fridayTemp);
  friday.appendChild(fridayIcon);
  fridayList.appendChild(friday);
  fridayDiv.appendChild(fridayList);
  thursdayIcon.appendChild(thursdayTemp);
  thursday.appendChild(thursdayIcon);
  thursdayList.appendChild(thursday);
  thursdayDiv.appendChild(thursdayList);
  //from here
  wednesdayIcon.appendChild(canvasIconTomorrow);
  wednesdayIcon.appendChild(wednesdayTemp);
  wednesday.appendChild(wednesdayIcon);
  wednesdayList.appendChild(wednesday);
  wednesdayDiv.appendChild(wednesdayList);
  tuesdayIcon.appendChild(canvasIconTonight);
  tuesdayIcon.appendChild(tuesdayTemp);
  tuesday.appendChild(tuesdayIcon);
  tuesdayList.appendChild(tuesday);
  tuesdayDiv.appendChild(tuesdayList);
  mondayIcon.appendChild(canvasIconToday);
  mondayIcon.appendChild(mondayTemp);
  monday.appendChild(mondayIcon);
  mondayList.appendChild(monday);
  mondayDiv.appendChild(mondayList);
  sundayIcon.appendChild(canvasIcon);
  sundayIcon.appendChild(sundayTemp);
  sunday.appendChild(sundayIcon);
  sundayList.appendChild(sunday);
  sundayDiv.appendChild(sundayList);

   footer.appendChild(sundayDiv);
   footer.appendChild(mondayDiv);
  footer.appendChild(tuesdayDiv);
  footer.appendChild(wednesdayDiv);

  // footer.appendChild(thursdayDiv);
  // footer.appendChild(fridayDiv);
  return footer;
})();

export default footer;
