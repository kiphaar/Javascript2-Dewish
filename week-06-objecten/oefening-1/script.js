const output1 = document.getElementById('output-1')
const output2 = document.getElementById('output-2')
const output3 = document.getElementById('output-3')



const car = {
  name: 'Golf',
  brand: 'Volkswagen',
  year: 2008,
  mileage: 145000,
  description() {
   
    return  `dit is een ${this.brand} ${this.name}`  
  },
  isOld() {
    
   
      return this.year < 2010
    
  },
  drive(km) {
    
    this.mileage += km
    return this.mileage
  },
};

// Toon de resultaten in de drie output-elementen

output1.innerHTML += `<p>${car.description()}</p>`
output2.innerHTML += `<p>is dit ding van de oertijd? ${car.isOld()}</p>`
output3.innerHTML += `<p>mijn kilometerstand is ${car.drive(200)}</p>`

