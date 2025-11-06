
// Open Weather App - ApiKey && ApiUrl
const APIKEY =  "8d4bf6eba35fd9a9cebdc9e42cfd0409";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Input field Function Value.
const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather_icon");
 
async function CheckWeatheir(city) {

    // Api Calls.
    const responce = await fetch( APIURL + city + '&appid='+APIKEY);
    const data = await responce.json();

   // Error Msg Thorw Invalid city name. 

   // Start Here . 
   if( responce.status == 404 ){
      document.querySelector('.error').style.display = "block";
      alert("Invalid City Name");
      document.querySelector('.weather').style.display = "none";
   }else{

        // Show Data in Console
    console.log("Weatheir deatails " , data);

   // Converting after Calls 
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + "  Km/hr";

    // Changing a Clouds Img
      if(data.weather[0].main == "Clouds"){
        weathericon.src = "Images/clouds.png";
      }else if( data.weather[0].main == "Clear"){
        weathericon.src = "Images/clear.png"
      }else if( data.weather[0].main == "Rain"){
        weathericon.src = "Images/rain.png"
      }else if( data.weather[0].main == "drizzle"){
         weathericon.src = "Images/drizzle.png";
      }else if( data.weather[0].main == "Snow"){
        weathericon.src = "Images/snow.png";
      }else{
        weathericon.src = "Images/Mist.png";
      }
      // Automate give Input data  show That
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display ="none";
   }

}

// end Here

// Event Listener
searchBtn.addEventListener('click',()=>{
    CheckWeatheir(searchbox.value);

});