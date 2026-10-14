<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
const people = [
  { name: 'Lisa', age: 28, city: 'Amsterdam' },
  { name: 'Mark', age: 34, city: 'Rotterdam' },
  { name: 'Sara', age: 22, city: 'Utrecht' },
];

// 1. Toon in #origineel de originele lijst met alleen namen en steden.
//    Gebruik destructuring in je .map().
<<<<<<< Updated upstream
// 2. Maak met .map() en de spread operator een nieuwe array waarin
//    de stad van elke persoon is gewijzigd naar 'Den Haag'.
//    De originele people-array moet onveranderd blijven.
// 3. Toon deze nieuwe lijst in #kopie, ook met destructuring.
=======
const originalOutput = document.getElementById('origineel');
const namesAndCities = people.map(({ name, city }) => {
  return `${name} woont in ${city}`;
});
 
originalOutput.innerHTML = `<p>${namesAndCities.join('<br>')}</p>`;
 
const copiedPeople = people.map(({ name, age, city }) => ({
  name,
  age,
  city: 'Den Haag',
}));
 
// 3. Toon deze nieuwe lijst in #kopie, ook met destructuring.
const copyOutput = document.getElementById('kopie');
const newNamesAndCities = copiedPeople.map(({ name, city }) => {
  return `${name} woont in ${city}`;
});
 
copyOutput.innerHTML = `<p>${newNamesAndCities.join('<br>')}</p>`;











>>>>>>> Stashed changes
