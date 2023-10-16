//variables api's
const apiKey =  "f23e435017d6ee279843c3b207b5f0b6"
const apiCountry = "https://flagsapi.com//flat/64.png"
const apiKeyImage = "QHQ5-anRLPzgtiME4fbBD26yvpZ77T_KoByLx_UTLGQ"

//const principals
const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")

//variables
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
    const dataImg = await ImageWeather(city)

    cityElement.innerText = data.name;
    temperature.innerText = parseInt(data.main.temp);
    description.innerText = data.weather[0].description;
    cityUmidity.innerText = parseInt(data.main.humidity) + "%";
    cityWind.innerText = parseInt(data.wind.speed) + "km/hr";

    const countryData = data.sys.country
    countyImg.src = `https://flagsapi.com/${countryData}/flat/64.png`

    const iconData = data.weather[0].icon
    icon.src = `http://openweathermap.org/img/wn/${iconData}@2x.png`

    document.body.style.backgroundImage = `url(${dataImg.urls.full})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';

}

const ImageWeather = async(city) =>{
    const apiImageURL = `https://api.unsplash.com/photos/random?query=${city}&client_id=${apiKeyImage}`

    const response =  await fetch(apiImageURL)
    const dataImg = await response.json()

    return dataImg
}

//events 
searchBtn.addEventListener("click", (e) =>{
    e.preventDefault()

    const city = cityInput.value;

    dataWeather(city)
})