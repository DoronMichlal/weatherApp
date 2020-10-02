import Weather from './weather.js';
import UI from './ui.js';
import Storage from './storage.js';

// Initialize storage object
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Initialize weather object + UI
const weather = new Weather(weatherLocation);
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    // Change the city
    weather.changeLocation(city);

    // Set city in local storage
    storage.setLocationData(city);

    // Get and display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
});

function getWeather() {
    weather
        .getWeather()
        .then((results) => ui.paint(results))
        .catch((err) => console.log(err));
}
