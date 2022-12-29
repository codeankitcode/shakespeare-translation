const inputEl = document.querySelector("#input-el")
const btn = document.querySelector("#btn")
const outputEl = document.querySelector("#output-el")
// console.log(outputEl)

const serverUrl = "https://api.funtranslations.com/translate/shakespeare.json"



function eventhandler(){
    let inputVal = inputEl.value
    fetch(translationUrl(inputVal))
    .then(response => response.json())
    .then(json => outputEl.textContent = json.contents.translated)
    .catch(err => console.log("request failed", err))
}
function translationUrl(text){
    return serverUrl + "?text=" + text
}

btn.addEventListener("click", eventhandler)