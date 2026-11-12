const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];

// Filter: toon alleen scores boven de 50 in #result-filtered
const filtered = scores.filter(score => score > 50)

document.getElementById('result-filtered').innerHTML =
filtered.map(score => `<li>${score}</li>`).join('')

 
// Map: verdubbel alle scores en toon in #result-map
const doubled = scores.map(score => score * 2)

document.getElementById('result-map').innerHTML =
 doubled.map(score => `<li>${score}</li>`).join('')
 
// Sort: sorteer van laag naar hoog en toon in #result-sorted
const sorted = [...scores].sort((a, b) => a - b)

document.getElementById('result-sorted').innerHTML =
sorted.map(score => `<li>${score}</li>`).join('')
 
