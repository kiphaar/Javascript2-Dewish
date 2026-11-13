const showWeather = (data) => {
  console.log(data);
 
  document.getElementById('weather-info').innerHTML = `
    <article>
      <h2>${data.name}</h2>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
      <p>
        <span>Temperatuur</span>
        <span>${Math.round(data.main.temp)}°C</span>
      </p>
 
      <p>
        <span>Gevoelstemperatuur</span>
        <span>${Math.round(data.main.feels_like)}°C</span>
      </p>
 
      <p>
        <span>Luchtvochtigheid</span>
        <span>${data.main.humidity}%</span>
      </p>
 
      <p>
        <span>Windsnelheid</span>
        <span>${data.wind.speed} m/s</span>
      </p>
    </article>
  `;
};
 
const getWeather = (city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`)
    .then(response => {
      if (!response.ok) {
        
        throw new Error('Stad niet gevonden')
      }

      return response.json()
    })
    .then(data => {
      console.log(data)

      showWeather(data)
    })
    .catch(error => {
      document.getElementById('weather-info').innerHTML = `

        <p>${error.message}</p>
      `;
    })
};
 
document.getElementById('search-form').addEventListener('submit', e => {
  e.preventDefault()

  const city = document.getElementById('city-input').value
  getWeather(city)

  document.getElementById('city-input').value = ''
});