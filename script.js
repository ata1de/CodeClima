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
// const cityElement = document.querySelector("#namecity")
// const cityElement = document.querySelector("#namecity")

//functions
const dataWeather = (city) =>{
    console.log(city)
}

//events 
searchBtn.addEventListener("click", (e) =>{
    e.preventDefault()

    const city = cityInput.value;

    dataWeather(city)
})