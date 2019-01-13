class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.temp = document.getElementById('w-temp');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.wind = document.getElementById('w-wind');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.temp.textContent = weather.main.temp;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.wind.textContent = `Wind: ${weather.wind.speed}`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
  }
}