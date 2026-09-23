
// Stap 1: Selecteer het formulier en de profielenlijst

const profileForm = document.querySelector('#profile-form')
const naam = document.querySelector('#name')
const role = document.querySelector('#role')
const department = document.querySelector('#department')
const submit = document.querySelector('submit')
const profilesList  = document.querySelector('#profiles-list')


// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon een profielkaart met innerHTML +=

    profileForm.addEventListener('submit', (event) => {
        event.preventDefault()
        profilesList.innerHTML += `
        <div>
        ${naam.value}
        ${role.value}
        ${department.value}
        </div>
        `
    })



// Stap 3 (bonus): Voeg een verwijderknop toe aan elke kaart

