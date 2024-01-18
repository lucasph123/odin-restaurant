import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
import './style.css';

createMainDom();

function createMainDom() {
    const main = document.querySelector('#container');
    navBar(main);
    indexContainer(main);

}



function navBar(main) {


    const navBar = document.createElement('div');
        navBar.classList.add('nav-bar');
    const firstButton = document.createElement('div');
        firstButton.classList.add('btn');
        firstButton.textContent = 'Home';
        navBar.appendChild(firstButton);
    const secondButton = document.createElement('div');
        secondButton.classList.add('btn');
        secondButton.textContent = 'Menu';
        navBar.appendChild(secondButton);
    const thirdButton = document.createElement('div');
        thirdButton.classList.add('btn');
        thirdButton.textContent = 'Contact';
        navBar.appendChild(thirdButton);
        main.appendChild(navBar);



    firstButton.addEventListener('click', function () { createHome() });
    secondButton.addEventListener('click', function () { createMenu() });
    thirdButton.addEventListener('click', function () { createContact() });

}

function indexContainer(main) {

    const mainMenu = document.createElement('div');
        mainMenu.classList.add('menu');
        main.appendChild(mainMenu);
    const indexTitle = document.createElement('div');
        indexTitle.classList.add('title');
        indexTitle.textContent = 'Welcome';
    const indexDesc = document.createElement('div');
        indexDesc.classList.add('index-desc');
        indexDesc.textContent = 'Here you can see our informations on Home tab on the Navigation bar Above, the Menu of the Odin Restaurant in Menu Tab, Contact us in the Contact Tab'
        mainMenu.appendChild(indexTitle);
        mainMenu.appendChild(indexDesc);




}
