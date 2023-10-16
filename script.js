//variables
const apiKey =  "f23e435017d6ee279843c3b207b5f0b6"
const apiCountry = "https://flagsapi.com//flat/64.png"

const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")

const cityElement = document.querySelector("#namecity")
const countyImg = document.querySelector(".country-img")
const temperature = document.querySelector(".temperature")
const description = document.querySelector(".description")
const icon = document.querySelector(".weather-icon")
const cityUmidity = document.querySelector(".umidity span")
const cityWind = document.querySelector(".wind span")

//functions
//Função assincrona pois ela pode demorar um tempo para responder
const getWetherData = async(city) =>{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    console.log(data)
}

const dataWeather = (city) =>{
    getWetherData(city)
}

//events 
searchBtn.addEventListener("click", (e) =>{
    e.preventDefault()

    const city = cityInput.value;

    dataWeather(city)
})