//variables api's
const apiKey =  "f23e435017d6ee279843c3b207b5f0b6"
const apiCountry = "https://flagsapi.com//flat/64.png"
const apiKeyImage = "QHQ5-anRLPzgtiME4fbBD26yvpZ77T_KoByLx_UTLGQ"

//const principals
const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")
const ButtonCities = document.querySelectorAll('.buttons-city')
const Suggetions = document.querySelector('.suggetions')

//variables
const cityElement = document.querySelector("#nameCity")
const countyImg = document.querySelector(".country-img")
const temperature = document.querySelector(".temperature span")
const description = document.querySelector(".description")
const icon = document.querySelector(".weather-icon")
const cityUmidity = document.querySelector(".humidity span")
const cityWind = document.querySelector(".wind span")
const tempMax = document.querySelector(".temp-max span")
const tempMin = document.querySelector(".temp-min span")
const WeatherData = document.querySelector(".hide")

//functions
//Função assincrona pois ela pode demorar um tempo para responder
const getWetherData = async(city) =>{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    console.log(data);
    return data;
}


const switchClass = () => {
    if (!(Suggetions.classList.contains('hide'))){
        Suggetions.classList.toggle('hide')
    }

    if (WeatherData.classList.contains("hide")) {
        WeatherData.classList.toggle("weather-data")
    } else if(WeatherData.className === ""){
        WeatherData.classList.toggle("weather-data")
    }
}

const dataWeather = async(city) =>{
    const data = await getWetherData(city);
    const dataImg = await ImageWeather(city)

    cityElement.innerText = data.name;
    temperature.innerText = parseInt(data.main.temp);
    description.innerText = data.weather[0].description;
    cityUmidity.innerText = parseInt(data.main.humidity) + "%";
    cityWind.innerText = parseFloat(data.wind.speed * 3,6).toFixed(0) + "km/hr";
    tempMax.innerText = parseInt(data.main.temp_max);
    tempMin.innerText = parseInt(data.main.temp_min);

    const countryData = data.sys.country
    countyImg.src = `https://flagsapi.com/${countryData}/flat/64.png`
    const iconData = data.weather[0].icon
    icon.src = `http://openweathermap.org/img/wn/${iconData}@2x.png`

    document.body.style.backgroundImage = `url(${dataImg.urls.full})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';

    WeatherData.classList.remove("hide")

}

const ImageWeather = async(city) =>{
    const apiImageURL = `https://api.unsplash.com/photos/random?query=${city}&client_id=${apiKeyImage}`

    const response =  await fetch(apiImageURL);
    const dataImg = await response.json();

    return dataImg;
}

//events 
ButtonCities.forEach(button => {
    button.addEventListener('click', (e)=>{
        e.preventDefault();
    
        const city = button.innerHTML;
    
        dataWeather(city);
        switchClass();
    }) 
});

searchBtn.addEventListener("click", (e) =>{
    e.preventDefault()

    const city = cityInput.value;

    dataWeather(city);
    switchClass();
})

cityInput.addEventListener("keyup", (e) =>{
    if (e.code === "Enter"){
        const city = e.target.value;

        dataWeather(city);
        switchClass();
    }
})