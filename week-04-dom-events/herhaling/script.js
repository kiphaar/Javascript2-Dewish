const form = document.querySelector("#shop-form")
const btn = document.querySelector("#btn")
const input = document.querySelector("#shop-input")
const counter = document.querySelector("#counter")
const list = document.querySelector("#list")


const updateTeller = () => {
    const taken = list.querySelectorAll('li').length
    const klaar = list.querySelectorAll('input:checked').length

    counter.textContent = `je hebt ${taken} items waarvan ${klaar} afgevinkt`
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const tekst = input.value.trim()

    if (tekst === "") {
        return
    }

    const li = document.createElement('li')
    li.textContent = tekst

    const verwijder = document.createElement('button')
    verwijder.textContent = 'verwijder'
    
    li.appendChild(verwijder)

    verwijder.addEventListener('click', () => {
        li.remove()
        updateTeller()
    })

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    li.appendChild(checkbox)

    checkbox.addEventListener('change', () => {
        li.classList.toggle('gekocht')
        updateTeller()
    })

    list.appendChild(li)
    updateTeller()
    input.value = ""
})