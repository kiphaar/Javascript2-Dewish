// Fout gevonden: de commas missen in de json
// Oplossing: commas zetten bij de eerste 2 arrays

fetch('./users')
  .then(r => r.json())
  .then(users => {
    const list = document.querySelector('#result');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      list.appendChild(list);
    });
  })
  .catch(error => console.error('Fout:', error));
