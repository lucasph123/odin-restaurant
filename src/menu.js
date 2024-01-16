function createMenu()
{
    
    const menu = document.createElement('div')
    const main = document.querySelector('#container');
    menu.classList.add('menu')
    main.removeChild(main.lastChild);
    menu.textContent = 'menu';
    main.appendChild(menu);
    
    return menu;

}

export default createMenu;