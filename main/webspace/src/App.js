import React from 'react'
import { useState, useEffect } from 'react';
import styles from './modules/weather.module.css';
//import images
//START WEATHER API


// TODO: FIX API (current requests are unauthorized)
const weather_enabled = false;
const API_KEY_W = '608b3005b7bbaa3617980fb7e235e016';
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
        if(!weather_enabled){
            setWeatherData('api disabled');
            return;
        }
        const response = await fetch(`${API_WEATHER_URL}`);
        const data = await response.json();
        setWeatherData(data.weather[0].main);
    }
    useEffect (()=> {
        updateWeather();
    }, []);

    return (
        // PUT DATA HERE
        // TO DO : FORMAT WEATHER WIDGET WITH COOL IMAGES n stuff
        <div>
            <p className = {styles.weather}> 
                Current weather {weatherdata}
            </p>
        </div>
    );
}


const App = () => {
    return (
        <div>
            <h1> Welcome to FOMO </h1>

            <div className={styles.weather}>
               <Weather />
            </div>

            <div className = "Buttons">
                <div className='ProjectButton'>

                </div>
                <div className='AboutButton'>

                </div>
                <div className='GameButton'>

                </div>
                <div className='ContactButton'>

                </div>
            </div>
        </div>
    );
}

export default App;