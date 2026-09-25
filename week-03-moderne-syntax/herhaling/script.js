const title = document.getElementById('title');
const button = document.getElementById('btn');
const section = document.getElementById('section');

const naam = "dewish";
const opleiding = "software development";
let aantalKlikken = 0;


const berekenPunten = (aantalKlikken) => {
    return aantalKlikken * 10 
   
} 

console.log(berekenPunten(3));

button.addEventListener('click', () => {
  aantalKlikken++ ;
  console.log(berekenPunten(aantalKlikken));

  title.textContent = `Hoi, ik ben ${naam} en ik doe ${opleiding}`
  title.classList.toggle('active');
  
  const p = document.createElement('p')
  p.textContent = `Klik ${aantalKlikken}: je hebt nu ${berekenPunten(aantalKlikken)} punten`
  section.appendChild(p);

})


