let allPokemon = []
const pokemonList = document.getElementById('pokemon-list')
const counter = document.getElementById('counter')
const searchBar = document.getElementById('search-bar')
 
const showPokemon = (pokemon) => {
  pokemonList.innerHTML = '';
  pokemon.forEach(p => {
    pokemonList.innerHTML += `
      <article>
        <h2>${p.name}</h2>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png">
      </article>
    `;
  })

  counter.textContent = `${pokemon.length} Pokémon gevonden`
};
 
fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {

    console.log(data)
    allPokemon = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1
    }))

    showPokemon(allPokemon)
  })
  .catch(error => console.error('Fout:', error))

 
searchBar.addEventListener('input', () => {
  const search = searchBar.value.toLowerCase()

  const filteredPokemon = allPokemon.filter(pokemon =>
    pokemon.name.includes(search)
  )

  showPokemon(filteredPokemon)
});