const hero = document.querySelector('.content');

export const renderContacts = () => {
    hero.innerHTML = '';
    const contactsTitle = document.createElement('h1');
    contactsTitle.textContent = 'Contacts';
    contactsTitle.classList.add('contacts__title')
    const contactsInfo = document.createElement('div');
    contactsInfo.classList.add('contacts__info');
    contactsInfo.innerHTML = `
            <div>
          <p>Adress:</p>
          <p>4 Queen Square, Liverpool L1 1RH</p>
        </div>
        <div>
          <p>Working hours:</p>
          <p>Daily 13:00 - 24:00</p>
        </div>
        <div>
          <p>Reservations</p>
          <a href="mailto: book@zata.rest">book@zata.rest</a>
        </div>
        <div>
          <p>General Manager</p>
          <a href="mailto: gm@zata.rest">gm@zata.rest</a>
        </div>
    `

    hero.append(contactsTitle, contactsInfo);
}