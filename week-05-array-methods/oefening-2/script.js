const names = ['Anna', 'Bob', 'Charlotte', 'David', 'Emma', 'Frank', 'Grace', 'Henk', 'Isabel', 'Jan', 'Karen', 'Lars'];


// Sectie 1: zoek de eerste naam die begint met de ingevoerde letter
//           gebruik find() + startsWith() + toLowerCase().
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid
// Sectie 2: controleer of een ingevoerde naam in de lijst staat (uitkomst is true of false)
//           gebruik includes() + toLowerCase()
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid
 
document.getElementById('search-find').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        let input = event.target.value.toLowerCase()
        let result = names.find(name => name.toLowerCase().startsWith(input))

        document.getElementById('output-find').textContent = result || 'Niet gevonden'
        event.target.value = ''
    }
});
 
document.getElementById('search-includes').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        let input = event.target.value.toLowerCase()
        let result = names.map(name => name.toLowerCase()).includes(input)
        
        document.getElementById('output-includes').textContent = result
        event.target.value = ''
    }
});
 