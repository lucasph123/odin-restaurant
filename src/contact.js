import './style.css';


function createContact()
{
    
    const contact = document.createElement('div')
    const main = document.querySelector('#container');
    contact.classList.add('menu')
    main.removeChild(main.lastChild);
    main.appendChild(contact);

    displayContact(contact);
    return contact;

}

function displayContact(contact)
{
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    const contactTitle = document.createElement('div');
    contactTitle.classList.add('title');
    contactTitle.textContent = 'Contacts';
    contact.appendChild(contactTitle);
    contact.appendChild(contactContainer);

    const contactDesc = document.createElement('div');
    contactDesc.classList.add('contact-desc');
    const contactsObj = contacts();
    for (const key in contactsObj.contacts) {
        const contactList = document.createElement('div');
        contactList.textContent =key +': '+ contactsObj.contacts[key];
        contactDesc.appendChild(contactList);
    }
    contactContainer.appendChild(contactDesc);

}



function contacts()
{
    const contacts = {
        emailOne: 'EmailOne@email.com',
        emailTwo: 'EmailTwo@email.com',
        telOne: '1234-1234',
        telTwo: '6789-6789',
        adress: '43 Fulton Rd.Lakeville, MN 55044',
    }
    return {contacts};
}

export default createContact;