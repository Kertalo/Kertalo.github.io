"use strict";

const url_characters = "https://rickandmortyapi.com/api/character";
const url_locations = "https://rickandmortyapi.com/api/location";
const url_episodes = "https://rickandmortyapi.com/api/episode";

const main = document.querySelector('main')

let page = 1;
async function addContent(str) {
    let param = "?page=" + page + (str == "" ? "" : "&name=" + str);
    axios.get(url_characters + param)
    .then((response) =>
    {
        console.log('e');
        let characters = response.data;
        if (page == 1)
            main.innerHTML = "";
        if (characters.info.next == null)
            button.style.display = 'none';
        else
            button.style.display = 'block';
        for (let i = 0; i < characters.results.length; i++)
        {
            main.insertAdjacentHTML('beforeend',
            `<button class="content">
                <div class="content__picture">
                    <img src="` + characters.results[i].image + `" class="content__picture__img" width="240" height="168" alt="character">
                </div>
                <div class="content__text">
                    <div class="content__text__name">`
                        + characters.results[i].name +
                        `</div>
                    <div class="content__text__species">`
                        + characters.results[i].species +
                    `</div>
                </div>
            </button>`);
        }
    })
    .catch(() => 
    {
        console.log('DOW');
        main.innerHTML = "";
        button.style.display = 'none';
    });
}

addContent("");

const button = document.querySelector('button');
button.addEventListener('click', function() {
    page++;
    addContent("");
})

const input = document.querySelector('input');
input.addEventListener('input', function() {
    page = 1;
    addContent(input.value);
})