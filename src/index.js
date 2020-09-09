import './styles/style.scss';
import form from './js/search-form'
import main from './js/main-content'
import toggleButton from "./js/toggle";


const container = document.querySelector('#container')
container.appendChild(form)

container.appendChild(main)
container.appendChild(toggleButton);

