fetch('https://rickandmortyapi.com/api/character')
  .then(r => r.json())
  .then(data => {

    console.log(data)
    const characters = document.getElementById('characters')
    
    data.results.forEach(character => {
      characters.innerHTML += `
        <article>
          <h2>${character.name}</h2>
          <img src="${character.image}" alt="${character.name}">
        </article>
      `

    });
  })

  .catch(error => console.error('Fout:', error));