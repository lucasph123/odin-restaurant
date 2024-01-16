import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
import './style.css';

createMainDom();

function createMainDom()
{
    const main = document.querySelector('#container');
    navBar(main);
    indexContainer(main);

}



function navBar(main)
{

    
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');
    const firstButton = document.createElement('div');
    firstButton.classList.add('btn');
    navBar.appendChild(firstButton);
    const secondButton = document.createElement('div');
    secondButton.classList.add('btn');
    navBar.appendChild(secondButton);
    const thirdButton = document.createElement('div');
    thirdButton.classList.add('btn');
    navBar.appendChild(thirdButton);
    main.appendChild(navBar);
   


    firstButton.addEventListener('click', function(){createHome()});
    secondButton.addEventListener('click',function(){ createMenu()});
    thirdButton.addEventListener('click',function(){ createContact()});

}

function indexContainer(main)
{

    const mainMenu = document.createElement('div');
        mainMenu.classList.add('menu');
        main.appendChild(mainMenu);
    const indexTitle = document.createElement('div');
        indexTitle.classList.add('title');
        indexTitle.textContent = 'Welcome';
    const indexDesc = document.createElement('div');
        indexDesc.classList.add('index-desc');
        mainMenu.appendChild(indexTitle);



}
   