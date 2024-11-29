const apiKey="9221698d8e7b2da06dbc713c9ebd2b9a";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector(".search_place input");
const searchBtn=document.querySelector("#search_btn");
const weathericon=document.querySelector("#weather_img");

 async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);

    // if(response.status == 404){
    //     document.querySelector(".error").style.display="block";
    // }
    console.log("fetching api.......",response);
    var data=await response.json();//this will give us main data from our api ,it will return second promise
    console.log(data);
    
    document.querySelector("#city").innerHTML=data.name;
    document.querySelector("#temp").innerHTML=Math.round(data.main.temp) + "°c";
    document.querySelector("#humidpercent").innerHTML= data.main.humidity + "%";
    document.querySelector("#wind_speed").innerHTML=data.wind.speed + " km/h";

    //to update the image according to weather condition
    if(data.weather[0].main =="Clouds"){
        weathericon.src="./images/clouds.png";
    }else if(data.weather[0].main =="Clear"){
        weathericon.src="./images/clear.png";
    }else if(data.weather[0].main =="Rain"){
        weathericon.src="./images/rain.png";
    }else if(data.weather[0].main =="Drizzle"){
        weathericon.src="./images/drizzle.png";
    }else if(data.weather[0].main =="Mist"){
        weathericon.src="./images/mist.png";
    }else if(data.weather[0].main =="Snow"){
        weathericon.src="./images/snow.png";
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

