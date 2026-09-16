// ============================================================
//  Week 2 — Oefening 2: Basis DOM-manipulatie
// ============================================================

// 1. Selecteer #title met querySelector en verander de tekst
//    naar iets anders met textContent
document.querySelector ('#title').textContent = 'De titel is verranderd';

// 2. Voeg een click event listener toe aan #toggle-btn.
//    Bij klik wisselt de tekstkleur van #message tussen rood en zwart.
//    Gebruik een variabele om bij te houden of de tekst nu rood is.
let isRed = false;

document.getElementById('toggle-btn').onclick = changeColor;

function changeColor() {
    const message = document.getElementById('message');
    if(isRed) {
        message.style.color = "black";
        isRed = false;
    } else {
        message.style.color = "red";
        isRed = true;
    }
}

// 3. Voeg een click event listener toe aan #greet-btn.
//    Lees de waarde van #name-input uit en toon 'Hallo, <naam>!' in #greeting

document.querySelector("#greet-btn").addEventListner ('click'), function(){
    const name = document.querySelector('#name-input').value;

    document.querySelector('#greeting').textContent = "hallo mijn naam is " + name;

}
