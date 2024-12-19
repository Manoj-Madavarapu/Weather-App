import React, { useEffect, useState } from "react";
import "./weather_style.css"
let Weather=()=>{
    let [search,setsearch]=useState("");
    let [weather,setweather]=useState(null);
    let [loading,setlaoding]=useState(false);
    let api={
        base:"https://api.openweathermap.org/data/2.5/weather",
        key:"1e24a7b4da8e5be2570e71fb54e76a96"
    }
    function getTemperature(){
        if(search==false){
            alert("Enter city name to get weather report");
            console.log(weather)
        }
        else{
        setlaoding(true);
        fetch(`${api.base}?q=${search}&appid=${api.key}&units=metric`)
        .then(res=>res.json())
        .then(data=>{
        if(data.cod=="404"){
            alert("City not found");
            setweather(null);
        }
        else{
            setweather(data);
        }
            setsearch("");
            setlaoding(false)
            console.log(weather)
        })
        .catch(err=>console.log(err));
    }
    }

// for getting background images according to weather condition
let getBackgroundImage = (climate) => {
    switch (climate.toLowerCase()) {
      case "clear":
        return "clear-sky";
      case "clouds":
        return "cloudy-sky";
      case "rain":
        return "rainy-weather";
      case "snow":
        return "snowy-weather";
      case "thunderstorm":
        return "thunderstorm-weather";
      case "haze":
        return "hazy-weather";
      default:
        return "default-weather";
    }
  };

// Getting emojis according weather condition
   let getweatherEmoji=(climate)=>{
    switch(climate.toLowerCase()){
        case "clouds":
            return <span>☁️<span className="second_cloud">☁️</span></span>;
        case "clear":
            return "☀️";
        case "rain":
            return "🌧️"; 
        case "snow":
            return "❄️"; 
        case "thunderstorm":
            return "⛈️"; 
        case "haze":
            return "🌫️"; 
        default:
            return ""; 
    }
   } 

    let date = new Date();
    const time=()=>date.toLocaleTimeString();
  
    return(
        <>
        <div className="weather_app ">
        <h1 className="heading">Weather Report</h1> 
        {/* <div className="inside_div" > */}
        <div className={`inside_div ${weather ? getBackgroundImage(weather.weather[0].main) : ""}`}>
        <div>
        <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} placeholder="Enter city"/>
        <button onClick={getTemperature}><i className="fa-solid fa-magnifying-glass search_icon"></i></button> 
        </div>
        <div>
            {(loading)?
            (
            <div className="loading">
            {/* <h1>Loading...</h1> */}
            <img src="images/loading.png" alt="" />
            </div>
        ):
            (weather===null)?(
                <h1 className="enter">Enter the city <br/>to get <br/> Weather report</h1>
            ):
            (weather.main!=undefined) ?(
                <>
                <div className="time_div">
                    <h5>Current Weather</h5>
                    <h5>Time: {time()} AM</h5>
                </div>
                <div className="main">
                <h1 className="temp">{weather.main.temp}<sup>o</sup>C</h1>
                <h2 className="name">{weather.name}</h2>
                </div>
                <div className="emoji_div">
                <div>
                    <h1 className="emoji">{getweatherEmoji(weather.weather[0].main)}</h1>
                </div>
                <div>
                <h2 className="clouds">{weather.weather[0].main}</h2>
                <p>{weather.weather[0].description}</p>
                </div>
                </div>
                <div className="extra_info">
                <div className="humidity_div divs">
                    <h2 className="humid ">{weather.main.humidity}%</h2>
                    <h4 className="data">Humidity</h4>
                </div>
                <div className="wind_speed divs">
                    <h2>{weather.wind.speed}<span className="span">kmph</span></h2>
                    <h4 className="data">Wind speed</h4>
                </div>
                <div className="divs">
                    <h2>{weather.visibility}m</h2>
                    <h4 className="data">Visibility</h4>
                </div>
                <div className="divs">
                    <h2>{weather.main.pressure}mb</h2>
                    <h4 className="data">Pressure</h4>
                </div>
                </div>
            </>):
            (<h2 className="oops">Oops<br/>Data not found...</h2>)
            }
        </div>
        </div>
        </div>
    </>
    )
}
export default Weather;


// (weather.main!=undefined)?(temp):(not found)
// the above condition says that if we find main data temp condition will be performed ,if we dont find main data inside weather object it returns undefined soo undefined!=undefined false soo not found wiil be execued
