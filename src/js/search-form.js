const form = (() => {
  const nav = document.createElement("nav");
  const form = document.createElement("form");
  form.setAttribute("class", "form");
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("class", "search");
  input.setAttribute("placeholder", "Enter a city");
  const button = document.createElement("button");
  button.setAttribute("class", "button");
  button.setAttribute("type", "submit");
  button.textContent = "SEARCH";

  form.appendChild(input);
  form.appendChild(button);
  nav.appendChild(form);
  return nav;
})();

export default form;
