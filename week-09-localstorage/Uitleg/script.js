
let message = "dit is een message"

let input = document.querySelector('#input')
let button = document.querySelector('#btn')

button.addEventListener("click", () => {
   let inputValue = input.value.trim()
   localStorage.setItem('input value', inputValue)
})

let getItemFromStore = localStorage.getItem("input value")
console.log(getItemFromStore)       