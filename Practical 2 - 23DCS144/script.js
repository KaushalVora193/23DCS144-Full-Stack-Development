// weatherData object with hardcoded weather information
const weatherData = {
    Ahmedabad: '40°C',
    Mumbai: '32°C',
    Delhi: '38°C'
};

// Event listener for the Get Weather button
document.getElementById('getWeather').addEventListener('click', () => {
    const cityInput = document.getElementById('cityInput').value.trim();
    fetchWeather(cityInput);
});

// Fetching weather function
const fetchWeather = (city) => {
    const resultElement = document.getElementById('weatherResult');
    if (weatherData[city]) {
        resultElement.textContent = `The weather in ${city} is ${weatherData[city]}`;
    } else {
        resultElement.textContent = 'City not found.';
    }
};