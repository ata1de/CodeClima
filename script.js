//variables
const apiKey =  "f23e435017d6ee279843c3b207b5f0b6"
const apiCountry = "https://flagsapi.com//flat/64.png"

const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")

const cityElement = document.querySelector("#nameCity")
const countyImg = document.querySelector(".country-img")
const temperature = document.querySelector(".temperature span")
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

    console.log(data);
    return data;
}



const dataWeather = async(city) =>{
    const data = await getWetherData(city);

    cityElement.innerText = data.name;
    temperature.innerText = parseInt(data.main.temp);
    description.innerText = data.weather[0].description;
    cityUmidity.innerText = parseInt(data.main.humidity) + "%";
    cityWind.innerText = parseInt(data.wind.speed) + "km/hr";

    const countryData = data.sys.country
    countyImg.src = `https://flagsapi.com/${countryData}/flat/64.png`

    const iconData = data.weather[0].icon
    icon.src = `http://openweathermap.org/img/wn/${iconData}@2x.png`

}

//events 
searchBtn.addEventListener("click", (e) =>{
    e.preventDefault()

    const city = cityInput.value;

    dataWeather(city)
})