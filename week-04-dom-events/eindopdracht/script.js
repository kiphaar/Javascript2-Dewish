// Selecteer het formulier, invoerveld, takenlijst en teller
// taakToevoegen() — maak een <li> aan met een checkbox en verwijderknop
// toonTaken() — werk de teller bij
// Voeg listeners toe aan het formulier en de taken

const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const tasks = document.getElementById('tasks');
const counter = document.getElementById('counter');

function taakToevoegen(tekst) {
 const li = document.createElement('li')
}
 

const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

const verwijderKnop = document.createElement('button')
verwijderKnop.textContent = 'verwijder'


lijst.appendChild(checkbox);
lijst.appendChild(knop)
tasks.appendChild(lijst)

function toonTaken() {
counter.textContent = tasks.children.length + ' taken'
}



form.addEventListener('submit', (event) => {
    event.preventDefault();

    taakToevoegen(input.value);
    input.value = '';
    toonTaken();
})

tasks.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
    event.target.parentElement.remove();
    toonTaken();
 })







   
