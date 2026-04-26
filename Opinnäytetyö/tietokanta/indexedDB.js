/*IndexedDBtä kätetään paikallisena tietokantana
SQL ja Backend Node.JS tilalla
*/

function indexedDBTuki() {
    return "indexedDB" in window;
}

let tietokanta;

document.addEventListener("DOMContentLoaded", () => {
    luoTietokanta();
});

function luoTietokanta() {
    if (!indexedDBTuki()) {
        throw new Error("Selaimesi ei tue indexedDB");
    }

    const pyynto = window.indexedDB.open("pelitaulu", 2);

    //tapahtuman käsittelijä
    pyynto.onerror = (e) => {
        console.error("IndexedBD virhe:", pyynto.error);
    };

    //on upgrade needed
    pyynto.onupgradeneeded = (e) => {
        console.log("Tietokanta luotu");
        tietokanta = pyynto.result;

        const objectStore = tietokanta.createObjectStore("pelit", { keyPath: "nimi" });

        //indexit
        objectStore.createIndex("alusta", "alusta");
        objectStore.createIndex("maara", "maara");

        console.log("Tietokanta ja pelitaulu luotu");
    };

    pyynto.onsuccess = () => {
        tietokanta = pyynto.result;
        console.log("Tietokanta valmis");

        const pelit = luePelit();
        lisaaPelit(pelit);
       
    };
}

function luePelit() {
    const peliInfo = document.querySelectorAll(".peli");

    return Array.from(peliInfo).map(peli => ({
        nimi: peli.dataset.nimi,
        alusta: peli.dataset.alusta,
        maara: Number(peli.dataset.maara)
    }));
}

function lisaaPelit(pelit) {
    const tx = tietokanta.transaction("pelit", "readwrite");
    const store = tx.objectStore("pelit");

    pelit.forEach(peli => {
        const pyynto = store.put(peli);

        pyynto.onsuccess = () => {
            console.log(`Lisätty: ${peli.nimi}`);
        };
    });

    tx.oncomplete = () => {
        console.log("Kaikki pelit lisätty onnistuneesti");
        lueMaara();
    };

    tx.onerror = () => {
        console.error("Virhe pelejä lisätessä");
    }
}


function lueMaara() {
    const peliInfo = document.querySelectorAll(".peli");
    const tx = tietokanta.transaction("pelit", "readonly");
    const store = tx.objectStore("pelit");

    peliInfo.forEach(info => {
        const nimi = info.dataset.nimi;
        const maara = info.querySelector(".maara");

        const pyynto = store.get(nimi);

        pyynto.onsuccess = () => {
            const peli = pyynto.result;

            maara.textContent =
                peli && peli.maara > 0
                    ? `Varastossa: ${peli.maara} kpl`
                    : `Ei varastossa`;
        };
    });
}
