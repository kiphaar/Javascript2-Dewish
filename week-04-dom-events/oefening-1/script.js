// Voeg een event listener toe aan de knop
// Maak een <li> element aan met de tekst uit het invoerveld
// Voeg een verwijderknop toe aan elk <li> element

const button = document.getElementById('add');
let list = document.getElementById('list');
const putin = document.getElementById('input');

button.addEventListener('click', () => {
    const input = putin.value.trim()

    const likken = document.createElement('li')
    likken.textContent = input 

    list.appendChild(likken)
    putin.value = ''

   const deleteButton = document.createElement('button')
   deleteButton.textContent = 'haal weg bro' 

   likken.appendChild(deleteButton)
   deleteButton.addEventListener("click", () => {
    likken.remove();
   })
})