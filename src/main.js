import restaurantBackground from './assets/restaurant-bg.jpg';
import './styles.css'
import { renderMenu } from './menu';
const hero = document.querySelector('.content');
const homeButton = document.querySelector('.nav__button--home');
const menuButton = document.querySelector('.nav__button--menu');
const aboutButton = document.querySelector('.nav__button--about');

const renderHeroContent = () => {
    hero.innerHTML = '';
    let heading = document.createElement('h1')
    let image = document.createElement('img')
    let description = document.createElement('p');
    heading.textContent = 'Zata Tradi England';
    heading.classList.add('hero__heading')
    image.src = restaurantBackground;
    image.classList.add('hero__image')
    image.style.width = '100%'
    description.innerHTML = `<span class="hero__name">Zata Tradi</span> - Such a wonderfull restaurant in Liverpool.`
    description.classList.add('hero__description');
    hero.append(heading, image, description);
}


document.addEventListener('DOMContentLoaded', renderHeroContent);
homeButton.addEventListener('click', renderHeroContent);
menuButton.addEventListener('click', renderMenu);