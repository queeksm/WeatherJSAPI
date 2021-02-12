import './style.css';
import { mainRenderer, dataRenderer, errorRenderer } from './renderer';

const ubicationFetcher = () => {
  const cityName = document.getElementById('cityInput').value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2e0d735d7064a37cb51d4a9a46c2042e`, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      const dataFetcherObject = {
        name: response.name,
        temperature: response.main.temp,
        minTemp: response.main.temp_min,
        maxTemp: response.main.temp_max,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        pressure: response.main.pressure,
        windSpeed: response.wind.speed,
      };
      dataRenderer(dataFetcherObject);
      return dataFetcherObject;
    })
    .catch(() => {
      errorRenderer();
      return 'error';
    });
};

mainRenderer(ubicationFetcher);