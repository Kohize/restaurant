const hero = document.querySelector('.content');
import kebab from './assets/menu-kebab.webp';
import pasta from './assets/menu-pasta.webp';
import burger from './assets/menu-burger.webp';
import salad from './assets/menu-salad.webp';
import pizza from './assets/menu-pizza.webp';
export const renderMenu = () => {
    const menuTitle = document.createElement('h1');
    const menuWrapper = document.createElement('div');
    const menuType = document.createElement('h2');
    const menuList = document.createElement('ul');
    menuTitle.textContent = 'Menu';
    menuTitle.classList.add('menu__title');
    menuType.textContent = 'Seasonal Menu';
    menuWrapper.classList.add('menu__wrapper');
    menuList.classList.add('menu__list');
    menuList.innerHTML = `
         <li class="5">
            <img src="${kebab}" alt="kebab" />
            <div class="menu__description">
            <p>Kebab</p>
            <p>220g.</p>
            <p class="menu__price">£15</p>
            </div>
          </li>
               <li class="5">
            <img src="${pasta}" alt="" />
             <div class="menu__description">
            <p>Pasta</p>
            <p>320g.</p>
            <p class="menu__price">£17</p>
            </div>
          </li>
               <li class="5">
            <img src="${pizza}" alt="" />
             <div class="menu__description">
            <p>Pizza</p>
            <p>550g.</p>
            <p class="menu__price">£35</p>
            </div>
          </li>
               <li class="5">
            <img src="${burger}" alt="" />
             <div class="menu__description">
            <p>Burger</p>
            <p>480g.</p>
            <p class="menu__price">£30</p>
            </div>
          </li>
               <li class="5">
            <img src="${salad}" alt="" />
             <div class="menu__description">
            <p>Salad</p>
            <p>250g.</p>
            <p class="menu__price">£21</p>
            </div>
          </li>
    `
    menuWrapper.append(menuType, menuList)
    hero.append(menuTitle, menuWrapper)
}
