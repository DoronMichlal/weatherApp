export default class Weather {
    constructor(city) {
        this.apiKey = '832cdc9e65e5623bcc10bd0d1d75bb8f';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);

        const data = await response.json();

        return data;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}
