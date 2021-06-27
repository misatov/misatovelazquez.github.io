const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=8bbd262e26fa22b9acfd7a7ad5b87217&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    // document.querySelector('')
  });