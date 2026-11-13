
let allPokemon = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const saveFavorites = () => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
};

const showItems = (items) => {

  
    document.querySelector('#results').innerHTML = items.map((pokemon, i) => {

      
        const isFavorite = favorites.includes(pokemon.name);

        return `
            <article>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
                <h2>${pokemon.name}</h2>
                <button class="favorite-btn" ${isFavorite ? 'disabled' : ''}>
                    ${isFavorite ? 'Favoriet' : 'Favoriet maken'}
                </button>
            </article>
        `;
    }).join('');

    // Voeg click event toe aan elke favorietenknop
    document.querySelectorAll('.favorite-btn').forEach((btn, i) => {
        btn.addEventListener('click', () => {

            favorites.push(items[i].name)

            saveFavorites();

            showItems(items);
        });
    });
};


// Laat zien dat de Pokémon worden geladen
document.querySelector('#loading').textContent = 'Laden...'


// Haal Pokémon op via de API
fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(r => r.json())
    .then(data => {

        document.querySelector('#loading').textContent = ''

        // Voeg een ID toe aan elke Pokémon
        allPokemon = data.results.map((pokemon, i) => {
            return {
                ...pokemon,
                id: i + 1
            }
        });

        showItems(allPokemon);

    })
    .catch(error => {
        document.querySelector('#loading').textContent = 'Er is iets misgegaan.'
        console.error('Fout:', error)
    });


document.querySelector('#show-all').addEventListener('click', () => {
    showItems(allPokemon);
});



document.querySelector('#show-favorites').addEventListener('click', () => {

    const favoritePokemon = allPokemon.filter(pokemon =>
        favorites.includes(pokemon.name)
    );

    showItems(favoritePokemon)
});
