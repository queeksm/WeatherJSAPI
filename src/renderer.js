const mainRenderer = (fetchData) => {
  const mainCont = document.getElementById('main');
  const mainForm = document.createElement('div');
  const error = document.createElement('div');
  const cityInput = document.createElement('input');
  const cityInputLabel = document.createElement('label');
  const submitButton = document.createElement('button');
  const topsideContainer = document.createElement('div');
  const switchLabel = document.createElement('label');
  const switchInput = document.createElement('input');
  const switchSpan = document.createElement('span');
  const switchText = document.createElement('div');
  const apiKey = document.createElement('div');
  const apiKeyLabel = document.createElement('input');
  const apiText = document.createElement('span');

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

  topsideContainer.setAttribute('class', 'topSide');
  apiKey.setAttribute('class', 'api');
  apiKeyLabel.setAttribute('id', 'key');
  apiKeyLabel.setAttribute('class', 'key');
  apiKeyLabel.setAttribute('type', 'text');
  apiText.setAttribute('class', 'apiText');
  apiText.innerHTML = 'Enter Your API key';

  switchLabel.setAttribute('class', 'toggle');
  switchInput.setAttribute('id', 'toggleswitch');
  switchInput.setAttribute('type', 'checkbox');
  switchSpan.setAttribute('class', 'roundbutton');
  switchText.setAttribute('class', 'switchText');

  switchText.innerHTML = 'Activate this to query data on imperial units';

  error.setAttribute('id', 'error');
  error.setAttribute('class', 'error hidden');
  error.innerHTML = "I couldn't find that city, try again and check your spelling or check your API key.";

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

  topsideContainer.appendChild(switchLabel);
  topsideContainer.appendChild(switchText);
  switchLabel.appendChild(switchInput);
  switchLabel.appendChild(switchSpan);

  topsideContainer.appendChild(apiKey);
  apiKey.appendChild(apiText);
  apiKey.appendChild(apiKeyLabel);

  mainForm.appendChild(cityInputLabel);
  mainForm.appendChild(cityInput);
  mainForm.appendChild(submitButton);
  mainCont.appendChild(topsideContainer);
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
  const flag = document.getElementById('toggleswitch');
  const changeCont = document.getElementById('temperatureContainer');

  if ((dataObject.temperature - 273) <= 0) {
    changeCont.classList.add('cold');
    changeCont.classList.remove('warm');
    changeCont.classList.remove('hot');
  } else if ((dataObject.temperature - 273) >= 0 && (dataObject.temperature - 273) <= 27) {
    changeCont.classList.add('warm');
    changeCont.classList.remove('hot');
    changeCont.classList.remove('cold');
  } else {
    changeCont.classList.add('hot');
    changeCont.classList.remove('warm');
    changeCont.classList.remove('cold');
  }

  if (flag.checked === true) {
    dataContainer.classList.remove('hidden');
    error.classList.add('hidden');
    dataContSpan.innerHTML = `Weather report about ${dataObject.name}:`;
    currtemp.innerHTML = `Currently the temperature is ${((dataObject.temperature - 273) * (9 / 5) + 32).toFixed(2)} Farenheit`;
    mintemp.innerHTML = `Minimum temperature of: ${((dataObject.minTemp - 273) * (9 / 5) + 32).toFixed(2)} Farenheit`;
    maxtemp.innerHTML = `Maximum temperature of: ${((dataObject.maxTemp - 273) * (9 / 5) + 32).toFixed(2)} Farenheit`;
    secondarySpan.innerHTML = 'Data about the wind and humidity in the zone:';
    humidity.innerHTML = `${dataObject.humidity}% humidity`;
    pressure.innerHTML = `${dataObject.pressure} hPa`;
    wind.innerHTML = `${(dataObject.windSpeed * 1.944).toFixed(2)} Knots`;
    description.innerHTML = dataObject.description;
  } else {
    dataContainer.classList.remove('hidden');
    error.classList.add('hidden');
    dataContSpan.innerHTML = `Weather report about ${dataObject.name}:`;
    currtemp.innerHTML = `Currently the temperature is ${(dataObject.temperature - 273).toFixed(2)} degrees Celsius`;
    mintemp.innerHTML = `Minimum temperature of: ${(dataObject.minTemp - 273).toFixed(2)} Celsius`;
    maxtemp.innerHTML = `Maximum temperature of: ${(dataObject.maxTemp - 273).toFixed(2)} Celsius`;
    secondarySpan.innerHTML = 'Data about the wind and humidity in the zone:';
    humidity.innerHTML = `${dataObject.humidity}% humidity`;
    pressure.innerHTML = `${dataObject.pressure} hPa`;
    wind.innerHTML = `${(dataObject.windSpeed * 3.6).toFixed(2)} Km/h`;
    description.innerHTML = dataObject.description;
  }
};

const errorRenderer = () => {
  const errorsSpace = document.getElementById('error');
  errorsSpace.classList.remove('hidden');
  const dataContainer = document.getElementById('dataContainer');
  dataContainer.classList.add('hidden');
};

export { mainRenderer, dataRenderer, errorRenderer };