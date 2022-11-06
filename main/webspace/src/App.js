import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
//import images
//START WEATHER API

const API_KEY_W = '5818deb42cf8a589318779074872fec4';
const lat = 41.99
const lon = -72.54
const API_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + API_KEY_W;

//KEY: 5818deb42cf8a589318779074872fec4
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// 60 calls per min of curr weather
// codes: (ID PARAM) https://openweathermap.org/weather-conditions

const Weather = () => {

    const [weatherdata, setWeatherData] = useState([]);
    const updateWeather = async () => {
        const response = await fetch(`${API_WEATHER_URL}`);
        const data = await response.json();
        setWeatherData(data.weather[0].main);
    }
    useEffect (()=> {
        updateWeather();
    }, []);

    return (
        // PUT DATA HERE
        <div className = 'Weather'>
            <h2> Current weather {weatherdata}</h2>
        </div>
    );
}


const App = () => {
    return (
        <div className="App">
            <h1> Welcome to FOMO </h1>

            <div className = "WeatherDisplay">
                <Weather />
            </div>

            <div className = "Buttons">
                <div className='ProjectButton'>

                </div>
                <div className='AboutButton'>

                </div>
                <div className='GameButton'>

                </div>
            </div>
        </div>
    );
}

export default App;