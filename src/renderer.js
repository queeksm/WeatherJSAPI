const mainRenderer = (fetchData) => {
  const mainCont = document.getElementById('main');
  const mainForm = document.createElement('div');
  const error = document.createElement('div');
  const cityInput = document.createElement('input');
  const cityInputLabel = document.createElement('label');
  const submitButton = document.createElement('button');

  const dataCont = document.createElement('div');
  const dataContSpan = document.createElement('span');
  const tempCont = document.createElement('div');
  const tempContSpan = document.createElement('span');
  const currtemp = document.createElement('div');
  const mintemp = document.createElement('div');
  const maxtemp = document.createElement('div');
  const secondary = document.createElement('div');
  const secondarySpan = document.createElement('span');
  const humidity = document.createElement('div');
  const pressure = document.createElement('div');
  const wind = document.createElement('div');
  const description = document.createElement('div');

  error.setAttribute('id', 'error');
  error.setAttribute('class', 'error hidden');
  error.innerHTML = "I couldn't find that city, try again and check your spelling.";

  dataCont.setAttribute('class', 'dataContainer');
  dataCont.setAttribute('id', 'dataContainer');

  dataContSpan.setAttribute('class', 'dataConSpan');
  dataContSpan.setAttribute('id', 'dataConSpan');

  tempCont.setAttribute('class', 'temperatureContainer');
  tempCont.setAttribute('id', 'temperatureContainer');

  tempContSpan.setAttribute('class', 'tempConSpan');
  tempContSpan.setAttribute('id', 'tempConSpan');

  currtemp.setAttribute('class', 'currTemp');
  currtemp.setAttribute('id', 'currTemp');

  mintemp.setAttribute('class', 'minTemp');
  mintemp.setAttribute('id', 'minTemp');

  maxtemp.setAttribute('class', 'maxTemp');
  maxtemp.setAttribute('id', 'maxTemp');

  secondary.setAttribute('class', 'secondaryData');
  secondary.setAttribute('id', 'secondaryData');

  secondarySpan.setAttribute('class', 'secondarySpan');
  secondarySpan.setAttribute('id', 'secondarySpan');

  humidity.setAttribute('class', 'humidity');
  humidity.setAttribute('id', 'humidity');
  pressure.setAttribute('class', 'pressure');
  pressure.setAttribute('id', 'pressure');
  wind.setAttribute('class', 'windSpeed');
  wind.setAttribute('id', 'windSpeed');

  description.setAttribute('class', 'description');
  description.setAttribute('id', 'description');

  mainForm.setAttribute('id', 'mainForm');
  mainForm.setAttribute('class', 'mainForm');

  cityInput.setAttribute('id', 'cityInput');
  cityInput.setAttribute('class', 'cityInput');

  cityInputLabel.setAttribute('id', 'cityInputLabel');
  cityInputLabel.setAttribute('class', 'cityInputLabel');
  cityInputLabel.innerHTML = "How's the climate here???";

  submitButton.setAttribute('class', 'button');
  submitButton.addEventListener('click', fetchData);
  submitButton.innerHTML = 'Query';

  tempCont.appendChild(tempContSpan);
  tempCont.appendChild(currtemp);
  tempCont.appendChild(maxtemp);
  tempCont.appendChild(mintemp);

  secondary.appendChild(secondarySpan);
  secondary.appendChild(humidity);
  secondary.appendChild(pressure);
  secondary.appendChild(wind);

  dataCont.appendChild(dataContSpan);
  dataCont.appendChild(tempCont);
  dataCont.appendChild(secondary);
  dataCont.appendChild(description);

  mainForm.appendChild(cityInputLabel);
  mainForm.appendChild(cityInput);
  mainForm.appendChild(submitButton);
  mainCont.appendChild(mainForm);
  mainCont.appendChild(error);
  mainCont.appendChild(dataCont);
};

const dataRenderer = (dataObject) => {
  const dataContainer = document.getElementById('dataContainer');
  const error = document.getElementById('error');
  const dataContSpan = document.getElementById('dataConSpan');
  const currtemp = document.getElementById('currTemp');
  const mintemp = document.getElementById('minTemp');
  const maxtemp = document.getElementById('maxTemp');
  const secondarySpan = document.getElementById('secondarySpan');
  const humidity = document.getElementById('humidity');
  const pressure = document.getElementById('pressure');
  const wind = document.getElementById('windSpeed');
  const description = document.getElementById('description');

  dataContainer.classList.remove('hidden');
  error.classList.add('hidden');
  dataContSpan.innerHTML = `Weather report about ${dataObject.name}:`;
  currtemp.innerHTML = `Currently the temperature is ${(dataObject.temperature - 273).toFixed(2)} degrees Celsius or ${((dataObject.temperature - 273) * (9 / 5) + 32).toFixed(2)} Farenheit`;
  mintemp.innerHTML = `Minimum temperature of: ${(dataObject.minTemp - 273).toFixed(2)} / ${((dataObject.minTemp - 273) * (9 / 5) + 32).toFixed(2)}`;
  maxtemp.innerHTML = `Maximum temperature of: ${(dataObject.maxTemp - 273).toFixed(2)} / ${((dataObject.maxTemp - 273) * (9 / 5) + 32).toFixed(2)}`;
  secondarySpan.innerHTML = 'Data about the wind and humidity in the zone:';
  humidity.innerHTML = `${dataObject.humidity}% humidity`;
  pressure.innerHTML = `${dataObject.pressure} hPa`;
  wind.innerHTML = `${(dataObject.windSpeed * 3.6).toFixed(2)} Km/h / ${(dataObject.windSpeed * 1.944).toFixed(2)} Knots`;
  description.innerHTML = dataObject.description;
};

const errorRenderer = () => {
  const errorsSpace = document.getElementById('error');
  errorsSpace.classList.remove('hidden');
  const dataContainer = document.getElementById('dataContainer');
  dataContainer.classList.add('hidden');
};

export { mainRenderer, dataRenderer, errorRenderer };