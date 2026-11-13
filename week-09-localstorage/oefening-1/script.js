
const input = document.getElementById("input")
const save = document.getElementById("save")
const retrieve = document.getElementById("retrieve")
const result = document.getElementById("result")


save.addEventListener("click", function() {

    localStorage.setItem("tekst", input.value)

    result.textContent = "Tekst opgeslagen!"
});


retrieve.addEventListener("click", function() {

    const opgeslagenTekst = localStorage.getItem("tekst")

    if (opgeslagenTekst === null) {
        
        result.textContent = "Er is nog niets opgeslagen!"
    } else {

        result.textContent = opgeslagenTekst;
    }
});
