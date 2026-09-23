// Voeg een event listener toe aan elke knop
const button1 = document.querySelector('#btn-1')
const button2 = document.querySelector('#btn-2')
const button3 = document.querySelector('#btn-3')
const message = document.querySelector('#message')
const list = document.querySelector('#list')

// Knop 1: voeg tekst toe aan #message

button1.addEventListener('click',() => {
    message.innerHTML = "hallo neger"
})

// Knop 2: voeg een <li> toe aan #list met een tekst
button2.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent ='tristan houdt van mannen'
    list.appendChild(li)
})

// Knop 3: wissel de klasse 'active' op #message

button3.addEventListener('click', () => {
    message.classList.toggle('active') 
});





