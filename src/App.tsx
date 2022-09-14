import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { BsSearch, BsPinMapFill, BsDroplet, BsWind } from 'react-icons/bs';
import { apiWeather, apiCountry } from './providers/openWeatherApi';

function App() {
  const [city, setCity] = useState('');
  const [error, setError] = useState(false);

  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [temp, setTemp] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('');
  const [humidity, setHumidity] = useState('');
  const [wind, setWind] = useState('');


  const handleSearch = (e: any) => {
    e.preventDefault();
    getWeaterData(city);
  };

  const getWeaterData = async (city: string) => {
    const response = await fetch(apiWeather(city));
    const data = await response.json();

    console.log(data);

    if (data.cod === 200) {
      setError(false);
      setCityName(data.name);
      setCountry(data.sys.country);
      setDescription(data.weather[0].description);
      setIcon(data.weather[0].icon);
      setTemp(parseInt(data.main.temp).toString());
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
    } else {
      setError(true);
    }
  }; 

  return (
    <div className="App">
      <div className="container">
        <div className="form">
          <h3>check the weather of a city now</h3>
          <div className="form-input-container">
            <input 
              type="text" 
              placeholder="city name" 
              id='city-input' 
              onChange={(e) => setCity(e.target.value)}
            />
            <button id="search" onClick={handleSearch} >
              <BsSearch />
            </button>
          </div>
        </div>
        <div id="weather-data">
          <h2>
            <BsPinMapFill />
            <span id="city-name">{cityName}</span>
            <img 
              src={`https://countryflagsapi.com/png/${country}`}
              alt="Country Flag"
              id="country"
            />
          </h2>
          <p id='temperature'><span>{temp}</span>&deg;C</p>
          <div id="description-container">
            <p id="description">{description}</p>
            <img 
              src={`http://openweathermap.org/img/wn/${icon}.png`}
              alt="Weather condition"
              id="weather-icon"
            />            
          </div>
          <div id="details-container">
            <p id="humidity">
              <BsDroplet /> <span>{humidity}</span>%              
            </p>
            <p id="wind">
              <BsWind /> <span>{wind}km/h</span>           
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
