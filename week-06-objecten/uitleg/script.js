const container = document.getElementById("container")



const rekening = {
    // properties aka eigenschappen
    eigenaar: "jayden de vries",
    saldo: 20,
    rekeningnummer: "nl10ingb6969696969",
    geblokkeerd: false,
    pincode: "5931",
    dagLimiet: 500,
    transacties: [],
    toonSaldo(){
      return this.saldo
    },

    changeSaldo(amount){
      this.saldo += amount

      this.transacties.push(amount)
      return `Het bedrag ${amount} is hier nu inshallah`
    }
}

console.log(rekening.transacties)
rekening.changeSaldo(1000)


console.log(rekening.toonSaldo())

container.innerHTML = `
<h2>${rekening.eigenaar}</h2> 
<h3>${rekening.saldo}</h3>
<p>${rekening.rekeningnummer}</p>
<p>${rekening.changeSaldo(1000)}</p>
`