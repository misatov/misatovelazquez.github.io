const APPID = "1e25916dc15bb9ee780725c3106e29a6";
const apiURL = `http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=${APPID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });

const temperature = document.querySelector('#temperature');
temperature.textContent = jsObject.main.temp.toFixed(0);

const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array

document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);

