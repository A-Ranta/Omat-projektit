console.log("lomakkeenvalidointi.js ladattu");
//DOM puu viitaukset
const lomakeNimiSyöte = document.getElementById("nimi");
const lomakeEmailSyöte = document.getElementById("email");
//const lomakePeliValintaSyöte = document.getElementById("pelivalinta");
const lomakeTekstiKenttäSyöte = document.getElementById("tekstialue");
//const tilauslomake = document.getElementById("tilauslomake");
const yhteydenottolomake = document.getElementById("yhteydenottolomake");
const lähetäNappi = document.getElementById("lähetäNappi");
const vuokraaNappi = document.getElementById("vuokraaNappi");
const lähetysViesti = document.getElementById("lähetysviesti");

//"Lähetä" nappi on alussa pois päältä
//lähetäNappi.disabled = true;


//nimen validointi
function isFormNameValid(value) {
    const trimmed = value.trim();

    const allowedPattern = /^[a-zA-ZäöåÄÖÅ \,\.\-]+$/;
    const lengthValid = trimmed.length >= 3 && trimmed.length <= 25;
    const charactersValid = allowedPattern.test(trimmed);
    return lengthValid && charactersValid;

}

//sähköpostin validointi validointi
function isFormEmailValid(value) {
    const trimmed = value.trim();

    const allowedPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return allowedPattern.test(trimmed);
}


/*pelivalinnan validointi
function isGameSelected(value) {
    return value !== "";


}*/



//tekstikenttäsyötteen validointi
function isFormTextareaValid(value) {
    const trimmed = value.trim();

    const lengthValid = trimmed.length >= 1 && trimmed.length <= 200;
    //estää suurimman osan HTML syötteistä <script></script>
    const denyHTMLtags = !/<[^>]*>/.test(trimmed);
    //const allowedPattern = /^[a-zA-Z0-9äöåÄÖÅ \,\.\-]+$/;
    //const lengthValid = trimmed.length >= 1 && trimmed.length <= 200;
    //const charactersValid = allowedPattern.test(trimmed);
    //return lengthValid && charactersValid;
    //return trimmed.length >= 1 && trimmed.length <= 200;
    return lengthValid && denyHTMLtags;

}

//Tapahtumankuuntelijat nimi
lomakeNimiSyöte.addEventListener("input", function () {
    const valid = isFormNameValid(lomakeNimiSyöte.value);
    setInputVisualState(lomakeNimiSyöte, valid);
});

//email
lomakeEmailSyöte.addEventListener("input", function () {
    const valid = isFormEmailValid(lomakeEmailSyöte.value);
    setInputVisualState(lomakeEmailSyöte, valid);
});

/*pelivalinta
lomakePeliValintaSyöte.addEventListener("change", function () {
    const valid = isGameSelected(lomakePeliValintaSyöte.value);
    setInputVisualState(lomakePeliValintaSyöte, valid);
});*/

//tekstikenttän validointia ei välttämättä tarvita
lomakeTekstiKenttäSyöte.addEventListener("input", function () {
    const valid = isFormTextareaValid(lomakeTekstiKenttäSyöte.value);
    setInputVisualState(lomakeTekstiKenttäSyöte, valid);
});




//visuaalinen palaute käyttäjälle
function setInputVisualState(input, valid) {
    input.classList.remove("border-black", "bg-green-500", "bg-red-500");

    if (valid) {
        input.classList.add("bg-green-500");
    }

    else {
        input.classList.add("bg-red-500");
    }

}

//tarkistaa kaikki lomakkeen syötekenttien arvon
function isFormValid() {
    return (
        isFormNameValid(lomakeNimiSyöte.value) &&
        isFormEmailValid(lomakeEmailSyöte.value) &&
        isFormTextareaValid(lomakeTekstiKenttäSyöte.value)
    );
}


//funktio yhteydenottolomakkeen validoinnille ja lähetä-napin sallimiselle
function validateForm() {
    yhteydenottolomake.addEventListener("input", function () {
        if (yhteydenottolomake.checkValidity() && isFormValid()) {
            lähetäNappi.disabled = false;
            lähetäNappi.style.background = "green";
            lähetäNappi.style.cursor ="pointer";
        }

        else {
            lähetäNappi.disabled = true;
            lähetäNappi.style.background = "red";
            lähetäNappi.style.cursor = "not-allowed";
        }
    });

    //estää lomakkeen lähetyksen ja sivun uudelleenlatauksen
    yhteydenottolomake.addEventListener("submit", function (e) {
        e.preventDefault();

        if (yhteydenottolomake.checkValidity() && isFormValid()) {
            lähetysViesti.classList.remove("hidden");
            yhteydenottolomake.reset();

            lähetäNappi.disabled = true;
            lähetäNappi.style.background = "gray";
        }

    });

}

validateForm();








