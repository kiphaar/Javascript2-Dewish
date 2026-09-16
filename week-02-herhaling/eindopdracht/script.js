// Stap 1: Schrijf calculateTotal(bedrag, korting)

let input1 = document.getElementById('amount');
let input2 = document.getElementById('discount');  
let button = document.getElementById('btn');
let output = document.getElementById('result');

button.addEventListener('click', function(){

   event.preventDefault();
    
    if (input1.value === '' || input2.value === '') {
        output.textContent = "vul iets in homo"
    }
    else{

 
    output.textContent = calculateTotal(amount.value, discount.value) + " " + nig(input1.value);

    }

    



})


function calculateTotal(amount, discount){
  

        return amount - (amount * discount / 100 );


    
}


function nig(amount) {

    if (amount < 50){
         return "Battie Klant"}
         else if (amount <= 150) {
            return " larper klant "
         } else {
             return "Wollah Goeie Klant"

         }


}



// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon het resultaat
// Stap 3: Toon een foutmelding in #result als het bedrag of de korting leeg is
// Bonus: Schrijf getKlantniveau(bedrag) en toon het niveau erbij


