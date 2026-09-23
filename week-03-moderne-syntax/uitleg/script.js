let getName = document.getElementById('showName')


// function showName(name){
//     return "Mijn Naam is " + name
// }

const showName = (name) => {
    return `Mijn Naam is ${name} `
}

showName("dewish")

getName.textContent = showName('Dewish')  


let fruits = ["<br> </br>", "appel", "banaan", "perzik" ]

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

for(let fruit of fruits){
    getName.innerHTML += fruit + '<br>' ;
}


let title = document.getElementById('title');
let button = document.getElementById('btn');
let section = document.getElementById('section');

button.addEventListener('click', () => {
    title.textContent = 'inshallah klik';
    title.classList.toggle('active')

    const p = document.createElement('p')

    p.textContent = "ik ben gay";
    section.appendChild(p)
})



