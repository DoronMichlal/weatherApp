export default class UI {
    constructor(params) {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].description;
        this.string.innerHTML = `${Math.round(weather.main.temp)}&#8451;`;
        this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);

        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.feelsLike.innerHTML = `Feels like: ${Math.round(weather.main.feels_like)}&#8451;`;

        this.dewpoint.innerHTML = `Dew point: ${Math.round(weather.main.temp_min)}&#8451;}`;
        this.wind.textContent = `Wind: ${weather.wind.speed}m/s, ${weather.wind.deg}deg`;
    }
}
