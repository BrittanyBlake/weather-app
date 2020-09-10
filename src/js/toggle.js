const toggleButton = (() => {
  const labelToggle = document.createElement('label');
  labelToggle.setAttribute('class', 'toggle');
  const inputToggle = document.createElement('input');
  inputToggle.setAttribute('class', 'toggler');
  inputToggle.type = 'checkBox';
  const span = document.createElement('span');
  span.setAttribute('class', 'slider round');

  labelToggle.appendChild(inputToggle);
  labelToggle.appendChild(span);

  return labelToggle;
})();

export default toggleButton;
