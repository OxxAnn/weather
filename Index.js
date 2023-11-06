const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key:"76af526665475b4adc2c94f3dbc5cb92",
}
const input = document.querySelector("#input");
const button = document.querySelector("#btn")
input.addEventListener("keypress", enter);


function enter(e){
//    if (e.keyCode === 13){
//        getInfo(input.value);
//    }
   button.addEventListener("click", ()=>{
    getInfo(input.value);
   })
}

async function getInfo (data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    
    if(res.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    
    const result = await res.json();

    console.log(result);
    console.log(result.main.temp);
    displayResult(result);
}
function displayResult(result){
    let city = document.querySelector("#city");
    city.textContent = `${result.name}, ${result.sys.country}`;

    getOurDate();

    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let variation = document.querySelector("#variation");
    variation.innerHTML = "Min: " + `${Math.round(result.main.temp_min)} <span>°</span>` + "Max: " + `${Math.round(result.main.temp_max)}<span>°</span>`;

    let feelslike = document.querySelector("#feelslike");
    feelslike.innerHTML = "Feels like: " + `${Math.round(result.main.feels_like)} <span>°</span>`;

    const weatherIcon = document.querySelector(".weather-icon");
    if(result.weather[0].main == "Clouds"){
        weatherIcon.src = "Cloudy.png";
    }
    else if(result.weather[0].main == "Thunderstorm"){
        weatherIcon.src = "Thunderstorm.png";
    }
    else if(result.weather[0].main == "Clear"){
        weatherIcon.src = "Clear.png";
    }
    else if(result.weather[0].main == "Drizzle"){
        weatherIcon.src = "Drizzle.png";
    }
    else if(result.weather[0].main == "Snow"){
        weatherIcon.src = "Snow.png";
    }
    else if(result.weather[0].main == "Fog"){
        weatherIcon.src = "fog.png";
    }
    else if(result.weather[0].main == "Partly cloudy"){
        weatherIcon.src = "partly cloudy.png";
    }
    else if(result.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    }
    else if(result.weather[0].main == "Windy"){
        weatherIcon.src = "windy.png";
    }
    else if(result.weather[0].main == "Haze"){
        weatherIcon.src = "Haze.png";
    }
    else if(result.weather[0].main == "Heavy rain"){
        weatherIcon.src = "Heavy rain.png";
    }

    else if(result.weather[0].main == "Heavy snow"){
        weatherIcon.src = "Heavy snow.png";
    }
    document.querySelector(".weather").style.display = "block";


    let condition = document.querySelector("#condition");
    condition.textContent = `${result.weather[0].main}`;

}

function getOurDate(){
    const myDate = new Date;
    console.log(myDate);

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[myDate.getDay()];
    console.log(day);

    let todayDate = myDate.getDate();
    console.log(todayDate);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[myDate.getMonth()];
    console.log(month);

    let year = myDate.getFullYear();
    console.log(year);
    
    let showDate = document.querySelector('#date');
    showDate.textContent = `${day}` + " " + `${todayDate}` + " " + `${month}` + " " + `${year}`
}
