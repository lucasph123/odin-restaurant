import './style.css';


function createContact()
{
    
    const contact = document.createElement('div')
    const main = document.querySelector('#container');
    contact.classList.add('menu')
    main.removeChild(main.lastChild);
    contact.textContent = 'contact';
    main.appendChild(contact);
    
    return contact;

}

export default createContact;