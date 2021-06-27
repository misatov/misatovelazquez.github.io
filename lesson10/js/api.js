const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=8bbd262e26fa22b9acfd7a7ad5b87217&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.querySelector('#current-cond').textContent = jsObject.weather[0].description;
    document.querySelector('#temp').textContent = jsObject.main.temp;
    document.querySelector('#high').textContent = jsObject.main.temp_max;
    document.querySelector('#humi').textContent = jsObject.main.humidity;

    
  });