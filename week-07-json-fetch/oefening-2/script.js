fetch('./movies.json')
  .then(response => response.json())
  .then(movies => {

    const section = document.querySelector('#films')

    movies.forEach(movie => {
      const p = document.createElement('p')

      p.textContent = movie.title + ' - ' + movie.director + ' (' + movie.year + ') - ' + movie.genre
      section.appendChild(p)
    });
  })
  .catch(error => console.error('Fout:', error))
