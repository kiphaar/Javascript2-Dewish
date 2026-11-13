
const user = { name: 'Anna', age: 28, city: 'Amsterdam' };
const zonderJson = document.getElementById("zonder-json")
const metJson = document.getElementById("met-json");


localStorage.setItem("user1", user)

const resultaat1 = localStorage.getItem("user1")

zonderJson.textContent += resultaat1;



localStorage.setItem("user2", JSON.stringify(user))

const resultaat2 = JSON.parse(localStorage.getItem("user2"))



metJson.textContent += JSON.stringify(resultaat2)
