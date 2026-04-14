//DOM puu viitaukset
const lomakeNimiKontti = document.getElementById("lomakeNimiKontti");
const lomakeEmailKontti = document.getElementById("lomakeEmailKontti");
const lomakeTekstikenttäKontti = document.getElementById("lomakeTekstikenttäKontti");
const submitNappi = document.getElementById("submitNappi");

submitNappi.disabled = true;

/*Lähetä napin avustajat
const button_Enabled_Class =
    "bg-brand-primary text-white hover:bg-brand-dark/80 shadow-soft";

const button_Disabled_Class =
    "cursor-not-allowed opacity-50"


function setButtonEnabled(button, enabled) {
    if (!button) return;

    button.disabled = !enabled;

    button.classList.toggle("cursor-not-allowed", !enabled);
    button.classList.toggle("opacity-50", !enabled);

}*/

/*luo nimisyöte
function createFormNameInput(container) {
    const input = document.createElement("input");

    input.id = "nimi";
    input.name = "nimi";
    input.type = "text";
    input.placeholder = "Kirjoita nimi tai nimimerkki";

    container.appendChild(input);
    return input;
}*/

//nimen validointi
function isFormNameValid(value) {
    const trimmed = value.trim();

    const allowedPattern = /^[A-Za-z0-9äöåÄÖÅ]{3,25}$/;
    const lengthValid = trimmed.length >= 3 && trimmed.length <= 25;
    const charactersValid = allowedPattern.test(trimmed);
    return lengthValid && charactersValid
}

/*luo sähköpostisyöte
function createFormEmailInput(container) {
    const input = document.createElement("input");

    input.id = "email";
    input.name = "email";
    input.type = "email";
    input.placeholder = "esimerkki@email.com";

    container.appendChild(input);
    return input;
}*/
    

//sähköpostin validointi validointi
function isFormEmailValid(value) {
    const trimmed = value.trim();

    const allowedPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const charactersValid = allowedPattern.test(trimmed);

    return charactersValid && allowedPattern.test(trimmed);
}

/*luo tekstikenttäsyöte
function createFormTextareaInput(container) {
    const input = document.createElement("textarea");

    input.id = "tekstikenttä";
    input.name = "tekstikenttä";
    input.type = "text";
    input.placeholder = "kirjoita viestisi tänne";

    container.appendChild(input);
    return input;
}*/


//tekstikenttäsyötteen validointi
function isFormTextareaValid(value) {
    const trimmed = value.trim();
    
    const allowedPattern = /^[A-Za-z0-9äöåÄÖÅ]{0,200}$/;
    const lengthValid = trimmed.length >= 0 && trimmed.length <= 200;
    const charactersValid = allowedPattern.test(trimmed);
    return lengthValid && charactersValid;
    
   
}


//visuaalinen palaute käyttäjälle
function setInputVisualState(input, state) {


}

//funktio lomakkeen validoinnille







