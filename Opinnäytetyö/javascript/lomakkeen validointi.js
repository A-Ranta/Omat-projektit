//DOM puu viitaukset
const lomakeNimiKontti = document.getElementById("lomakeNimiKontti");
const lomakeEmailKontti = document.getElementById("lomakeEmailKontti");
const lomakeTekstikenttäKontti = document.getElementById("lomakeTekstikenttäKontti");
const lomake = document.getElementById("yhteydenottolomake");
const submitNappi = document.getElementById("submitNappi");

//"Lähetä" nappi on alussa pois päältä
submitNappi.disabled = true;


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
    const textarea = document.createElement("textarea");

    textarea.id = "tekstikenttä";
    textarea.name = "tekstikenttä";
    textarea.type = "text";
    textarea.rows ="5";
    text.placeholder = "kirjoita viestisi tänne";

    container.appendChild(textarea);
    return textarea;
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
function validateForm() {
    lomake.addEventListener("input", function () {
        if (lomake.checkValidity()) {
            submitNappi.disabled = false;
            submitNappi.style.background = "green";
        } else {
            submitNappi.disabled = true;
            submitNappi.style.background = "gray";
        }
    });

    //estää lomakkeen lähetyksen ja sivun uudelleenlatauksen
    lomake.addEventListener("submit", function (e) {
        e.preventDefault();
    });

}

validateForm();








