

let button = document.querySelector('.Check');

button.addEventListener('click',  () => {
    let cityValue = document.querySelector('.City').value;
    let countryValue = document.querySelector('.Country').value;
    let temp;
    let humidity;
    let windDegree;
    let windSpeed;
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityValue}&country=${countryValue}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8680b9ad72msh08f4b18b54619aap18a457jsn1909a2bbf824',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch(url, options)
    .then(Response => Response.json())
    .then(Response =>   (
        temp = Response.temp,
        humidity  = Response.humidity,
        windSpeed = Response.wind_speed,
        windDegree = Response.wind_degrees,
        document.getElementById('temp').innerText = `${temp}°C`,
        document.getElementById('humidity').innerText = `${humidity}%`,
        document.getElementById('wind-speed').innerText = `${windSpeed}KM/H`,
        document.getElementById('wind-degree').innerText = `${windDegree} Degree`,
        console.log(Response)
    ))
    .catch (err => console.error(err));
});