"use strict";



async function requests() {
    let responseUrls = axios.get('https://rickandmortyapi.com/api');
    let urls = (await responseUrls).data;

    let responseCharacters = axios.get(urls.characters);
    let characters = (await responseCharacters).data;
    console.log(characters);
}

// requests();

function addButtons() {
    let main = document.querySelector('main')
    main.insertAdjacentHTML('beforeend', `
    <button class="content">
        <div class="content__picture">
            <img class="content__picture__img" width="240" height="168" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" height="168" alt="character">
        </div>
        <div class="content__text">
            <div class="content__text__name">
                Rick Sanchez
            </div>
            <div class="content__text__species">
                Human
            </div>
        </div>
    </button>
    `);
}

for (let i = 0; i < 10; i++)
    addButtons();
