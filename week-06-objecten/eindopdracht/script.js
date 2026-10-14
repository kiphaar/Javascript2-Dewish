const users = [
  { name: 'Jan de Vries',  email: 'jan@bedrijf.nl',  role: 'admin', active: true  },
  { name: 'Lisa Bakker',   email: 'lisa@bedrijf.nl', role: 'user',  active: true  },
  { name: 'Tom Visser',    email: 'tom@bedrijf.nl',  role: 'user',  active: false },
  { name: 'Sara Meijer',   email: 'sara@bedrijf.nl', role: 'admin', active: true  },
];
 
let filter = 'all';
 
const showUsers = (users) => {
  // Gebruik destructuring voor elke user: const { name, email, role, active } = user
  // Toon elke user als een <article> in #users
  const usersContainer = document.getElementById('users');
  usersContainer.innerHTML = '';
  users.forEach((user) => {
    const { name, email, role, active } = user;
    usersContainer.innerHTML += `
      <article>
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Role: ${role}</p>
        <p>Active: ${active ? 'Yes' : 'No'}</p>
      </article>
    `;
  });
};
 
const filterUsers = () => {
  // Als filter 'admin' is, toon alleen gebruikers met role === 'admin'
  // Anders toon je alle gebruikers
  // Roep showUsers() aan met de gefilterde lijst
  if (filter === 'admin') {
    showUsers(users.filter((user) => user.role === 'admin'));
  } else {
    showUsers(users);
  }
};
 
// Maak een eventlistener voor de #filter-admin button
// Zet filter op 'admin' en roep filterUsers() aan
document.getElementById('filter-admin').addEventListener('click', () => {
  filter = 'admin';
  filterUsers();
});
 
// Maak een eventlistener voor de #filter-all button
// Zet filter op 'all' en roep filterUsers() aan
document.getElementById('filter-all').addEventListener('click', () => {
  filter = 'all';
  filterUsers();
});
 
// Maak een eventlistener voor het #user-form submit event
// Lees naam, email en role uit de invoervelden
// Maak een nieuw user object aan met spread op een default object
// Voeg toe aan de array en roep filterUsers() aan
document.getElementById('user-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const role = document.getElementById('role').value;
  const newUser = { name, email, role, active: true };
  users.push(newUser);
  filterUsers();
});
 
filterUsers();
 
 