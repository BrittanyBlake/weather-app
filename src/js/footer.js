const footer = (() => {
     const footer = document.createElement('footer')
     footer.setAttribute("class", "weekly")
     const sundayDiv = document.createElement('div')
     sundayDiv.setAttribute("class", "day")
     const sundayList = document.createElement('ul')
     const sunday = document.createElement('li') 
     sunday.innerHTML= 'Sunday'
     const sundayIcon = document.createElement('li')
     sundayIcon.innerHTML = 'ICON'
     const sundayTemp = document.createElement('li')
     sundayTemp.innerHTML = "33°C";
     //next
     const mondayDiv = document.createElement("div");
     mondayDiv.setAttribute("class", "day");
     const mondayList = document.createElement("ul");
     const monday = document.createElement("li");
     monday.innerHTML = "Monday";
     const mondayIcon = document.createElement("li");
     mondayIcon.innerHTML = "ICON";
     const mondayTemp = document.createElement("li");
     mondayTemp.innerHTML = "20°C";
     //next
     const tuesdayDiv = document.createElement("div");
     tuesdayDiv.setAttribute("class", "day");
     const tuesdayList = document.createElement("ul");
     const tuesday = document.createElement("li");
     tuesday.innerHTML = "Tuesday";
     const tuesdayIcon = document.createElement("li");
     tuesdayIcon.innerHTML = "ICON";
     const tuesdayTemp = document.createElement("li");
     tuesdayTemp.innerHTML = "20°C";
     //next
     const wednesdayDiv = document.createElement("div");
     wednesdayDiv.setAttribute("class", "day");
     const wednesdayList = document.createElement("ul");
     const wednesday = document.createElement("li");
     wednesday.innerHTML = "Wednesday";
     const wednesdayIcon = document.createElement("li");
     wednesdayIcon.innerHTML = "ICON";
     const wednesdayTemp = document.createElement("li");
     wednesdayTemp.innerHTML = "20°C";
     //next
     const thursdayDiv = document.createElement("div");
     thursdayDiv.setAttribute("class", "day");
     const thursdayList = document.createElement("ul");
     const thursday = document.createElement("li");
     thursday.innerHTML = "Thursday";
     const thursdayIcon = document.createElement("li");
     thursdayIcon.innerHTML = "ICON";
     const thursdayTemp = document.createElement("li");
     thursdayTemp.innerHTML = "20°C";
     //next
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

     wednesdayIcon.appendChild(wednesdayTemp);
     wednesday.appendChild(wednesdayIcon);
     wednesdayList.appendChild(wednesday);
     wednesdayDiv.appendChild(wednesdayList);

     tuesdayIcon.appendChild(tuesdayTemp);
     tuesday.appendChild(tuesdayIcon);
     tuesdayList.appendChild(tuesday);
     tuesdayDiv.appendChild(tuesdayList);

     mondayIcon.appendChild(mondayTemp);
     monday.appendChild(mondayIcon);
     mondayList.appendChild(monday);
     mondayDiv.appendChild(mondayList);

     sundayIcon.appendChild(sundayTemp)
     sunday.appendChild(sundayIcon)
     sundayList.appendChild(sunday)
     sundayDiv.appendChild(sundayList)
     
     footer.appendChild(sundayDiv)
     footer.appendChild(mondayDiv);
     footer.appendChild(tuesdayDiv)
     footer.appendChild(wednesdayDiv);
     footer.appendChild(thursdayDiv);
     footer.appendChild(fridayDiv);
    return footer;
})();

export default footer



// <footer class="weekly">
//   <div class="day">
//     <ul>
//       <li>Sunday</li>
//       <li>Icon</li>
//       <li>33°C</li>
//     </ul>
//   </div>
//   <div class="day">
//     <ul>
//       <li>Monday</li>
//       <li>Icon</li>
//       <li>33°C</li>
//     </ul>
//   </div>
//   <div class="day">
//     <ul>
//       <li>Tuesday</li>
//       <li>Icon</li>
//       <li>20°C</li>
//     </ul>
//   </div>
//   <div class="day">
//     <ul>
//       <li>Wednesday</li>
//       <li>Icon</li>
//       <li>28°C</li>
//     </ul>
//   </div>
//   <div class="day">
//     <ul>
//       <li>Thursday</li>
//       <li>Icon</li>
//       <li>27°C</li>
//     </ul>
//   </div>
//   <div class="day">
//     <ul>
//       <li>Friday</li>
//       <li>Icon</li>
//       <li>27°C</li>
//     </ul>
//   </div>
//   <div class="day">
//     <ul>
//       <li>Saturday</li>
//       <li>Icon</li>
//       <li>27°C</li>
//     </ul>
//   </div>
// </footer>;
