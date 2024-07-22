const word_form = document.querySelector("#word_form");
const word = document.querySelector("#word");
const word_content = document.querySelector("#word_content");
const output_word = document.querySelector("#output_word");
pronunciation = document.querySelector("#pronunciation");
const play__word_button = document.querySelector("#play__word_button");
let word_synonyms_els;
let word_synonyms = [];

fetch_data("welcome");
word_form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch_data(search_bar.value);
})

async function fetch_data(arg_word){
    try{
        const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + arg_word);
    if(!response.ok){
        throw new Error("HTTP error! Status: " + response.status);
    }
    const response_json = await response.json();
    const word_meanings = response_json[0].meanings;
    const word_phonetics = response_json[0].phonetics;
    
    word.innerHTML = 
    `
    <div id="word_container">
        <h1 id="output_word">${response_json[0].word}</h1>
        <ul class="pronunciation">${word_phonetics.map(element => {
            if(element.text) return "<li>" +element.text + "</li>"
        }).join("")}
         </ul>
    </div>
        <div id="play__word_button">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V21L21 10.5L0 0Z" fill="#A445ED"/>
        </svg>
    </div>
    `
    
    let audios = [];
    function play_audio(audio){
        audio.play()
    }
    word_phonetics.forEach(element => {
        if(element.audio) audios.push(new Audio(element.audio));
    });
    play__word_button.addEventListener('click', () => {
        audios.forEach(el => play_audio(el));
    })

    word_content.innerHTML = 
    `
    ${word_meanings.map(element => {
        return (`
        <div class="word__type_container">
        <p class="word_type">${element.partOfSpeech}</p>
            <div class="line2"></div>
        </div>
        <div class="meanings">
            <p>Meanings: </p>
            ${element.definitions.map(element2 => ("<li>" + element2.definition + "</li>")).join("")}
        </div>
        <div class="synonyms">
            <p>Synonyms: </p>
            <div class="synonym">
            ${(element.synonyms.length > 0) ? element.synonyms.map(el => "<p class=\"word_synonym\">" + el + "</p>").join(" ") : "None"}
            </div>
        </div>
        `)
    }).join("")
    }
    `
    word_synonyms_els = document.querySelectorAll(".word_synonym");
    word_meanings.forEach(element => {
        element.synonyms.forEach(element2 => {
            if(element.synonyms.length > 0){
                word_synonyms.push(element2);
            }
        })
    })
    for(let i = 0; i < word_synonyms_els.length; i++){
        word_synonyms_els[i].addEventListener("click", () => {
            fetch_data(word_synonyms[i]);
            search_bar.value = word_synonyms[i];
        })
    }
    }
    catch(error){
        word.innerHTML = 
        `
        <div id="error_content">
            <p id="sad_emoji">😞</p>
            <p id="error_text1">No Definitions Found</p>
            <p id="error_text2">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
        </div>
        `
        word_content.innerHTML = ``;
        console.log("Error: ", error);
    }
}

