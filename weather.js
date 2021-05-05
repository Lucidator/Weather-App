class Weather {
    constructor(city, state) {
        this.apiKey = 'edc2322fdb20f6af8139af1155a46919';
        this.city = city;
        this.state = state;
    }

    //Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData;
    }

    // change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}