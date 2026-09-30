const button = document.getElementById('btn');
let list = document.getElementById('songList');
const songInput = document.getElementById('songInput');


button.addEventListener('click', () => {
    const input = songInput.value.trim()

    const lijst = document.createElement('li')
    lijst.textContent = input
   

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'verwijder die ding '

    lijst.appendChild(deleteButton)
    deleteButton.addEventListener('click', () => {
     lijst.remove();
    } )

     list.appendChild(lijst)
    songInput.value = ''
} )