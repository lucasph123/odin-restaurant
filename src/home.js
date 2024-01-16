function createHome()
{
    
    const home = document.createElement('div')
    const main = document.querySelector('#container');
    home.classList.add('menu')
    main.removeChild(main.lastChild);
    home.textContent = 'home';
    main.appendChild(home);
    
    return home;

}

export default createHome;