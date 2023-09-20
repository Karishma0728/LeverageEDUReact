import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import DownArrow from '../images/BlackDown.png';


const DownButton = styled.img`
height: 50px;
    width: 50px;
    position: fixed;
    left: 370px;
    top: 22px;
`;

const MenuUl = styled.ul`
position:fixed;
list-style-type:none;
padding: 5px 15px;
background-color:rgb(155, 146, 147,0.2);
    top: 60px;
    left: 385px;
    color: black;
    text-decoration: none;
`;

const MenuLi = styled.li`
cursor: pointer;
color: black;
`;

export default function WeatherPage() {
  const [weatherData, setWeatherData] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [city, setCity] = useState(''); // Store the city name here
  const API_KEY = 'c2b88286fb6eeebf1514ab1ca1e51c61';
  const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=5&appid=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if(data.list)
        setWeatherData(data.list);
      else
       setWeatherData([])
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
    
    const interval = setInterval(fetchData, 300000); // Refresh every 5 minutes (300,000 milliseconds)
    
    return () => clearInterval(interval); // Clear the interval on unmount
  }, [API_URL]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsMenuOpen(false); // Close the menu when an option is selected
  };

  return (
    <div>
      
      <h1>5-Day Weather Forecast</h1>
      <DownButton src={DownArrow}  onClick={toggleMenu}></DownButton>
      {isMenuOpen && (
        <MenuUl className="dropdown">
          <Link to="/weather" style={{textDecoration:'none'}}>
             <MenuLi onClick={() => handleOptionClick('Weather')}>Weather</MenuLi>
          </Link>
          <Link to="/calculator" style={{textDecoration:'none'}}>
          <MenuLi onClick={() => handleOptionClick('Calculator')}>Calculator</MenuLi>
          </Link>
          <Link to="/dashboard" style={{textDecoration:'none'}}>
          <MenuLi onClick={() => handleOptionClick('TaskBoard')}>TaskBoard</MenuLi>
          </Link>
        </MenuUl>
      )}
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <div className="weather-container">
        {weatherData.map((forecast, index) => (
          <div key={index} className="forecast-card">
            <h2>{forecast.dt_txt.split(' ')[0]}</h2>
            <img
              src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
              alt={forecast.weather[0].description}
            />
            <p>Temperature: {forecast.main.temp} °C</p>
            <p>Humidity: {forecast.main.humidity} %</p>
            <p>Wind Speed: {forecast.wind.speed} m/s</p>
            <p>Weather: {forecast.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

 
