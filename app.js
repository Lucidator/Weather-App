//Init storage
const storage = new Storage();
//get stored location data
const weatherLocation = storage.getLocationData();
//Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
//Init UI
const ui = new UI();

//Get weather on DOM  load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);

    //set location in ls
    storage.setLocationData(city, state);


    //Get and Display weather
    getWeather();

    //close modal
    $('#locModal').modal('hide');
});



function getWeather() {
    weather.getWeather()
        .then(results => {
            console.log(results);
            ui.paint(results);
        })
    .catch(err => console.log(err));
}