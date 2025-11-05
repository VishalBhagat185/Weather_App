
// Open Weather App - ApiKey && ApiUrl
const APIKEY =  "8d4bf6eba35fd9a9cebdc9e42cfd0409";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=pune";
 
async function CheckWeatheir() {

    // Api Calls.
    const responce = await fetch( APIURL + '&appid=${APIKEY}');
    const data = await responce.json();

    // Show Data in Console
    console.log("Weatheir deatails " , data);

    // Converting after Calls 
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + "  Km/hr";
}

CheckWeatheir();  