import React from 'react';
import './App.css';
import { BsSearch, BsPinMapFill, BsDroplet, BsWind } from 'react-icons/bs';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="form">
          <h3>check the weather of a city now</h3>
          <div className="form-input-container">
            <input type="text" placeholder="city name" id='city-input' />
            <button id="search">
              <BsSearch />
            </button>
          </div>
        </div>
        <div id="weather-data">
          <h2>
            <BsPinMapFill />
            <span id="city-name"> Cidade teste</span>
            <img 
              src="https://countryflagsapi.com/png/br"
              alt="Country Flag"
              id="country"
            />
          </h2>
          <p id='temperature'><span>38</span>&deg;C</p>
          <div id="description-container">
            <p id="description">description</p>
            <img 
              src="http://openweathermap.org/img/wn/02d.png"
              alt="Weather condition"
              id="weather-icon"
            />            
          </div>
          <div id="details-container">
            <p id="humidity">
              <BsDroplet /> <span>50</span>%              
            </p>
            <p id="wind">
              <BsWind /> <span>15km/h</span>           
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
