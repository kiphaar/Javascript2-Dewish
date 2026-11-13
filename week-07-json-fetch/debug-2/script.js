// Fout gevonden: { "name": "Toetsenbord", "price": 79 },
// Oplossing: { "name": "Toetsenbord", "price": 79 }

fetch('./products.json')
  .then(r => r.json())
  .then(products => {
    const list = document.querySelector('#results');
    products.forEach(product => {
      const li = document.createElement('li');
      li.textContent = `${product.name} — €${product.price}`;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
