const apiURLw = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=1e25916dc15bb9ee780725c3106e29a6&units=imperial";
const apiURLf = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=1e25916dc15bb9ee780725c3106e29a6&units=imperial";

fetch(apiURLw)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.querySelector('#current-cond').textContent = jsObject.weather[0].description;
    document.querySelector('#current-temp').innerHTML = jsObject.main.temp.toFixed(0);
    document.querySelector('#high').textContent = jsObject.main.temp_max.toFixed(0);
    document.querySelector('#humi').textContent = jsObject.main.humidity;
    document.querySelector('#speed').textContent = jsObject.wind.speed.toFixed(0);

    let temp = jsObject.main.temp;
    let windSpeed = jsObject.wind.speed;
    let windChill = (35.74 + (0.6 * temp)) - (35.7 * Math.pow(windSpeed, 0.16)) + (0.43 * temp * Math.pow(windSpeed, 0.16));
    let windChillTemp = Math.round(windChill);
    document.getElementById('windchill').textContent = windChillTemp.toFixed(0);


  });

  fetch(apiURLf)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject); 

    const daysofw = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'];
    let day = 0;

 
        const fiveDayForecast = jsObject.list.filter( forecast => forecast.dt_txt.includes('12:00:00'));
        console.log(fiveDayForecast);

fiveDayForecast.forEach( x  =>{
    let d = new Date(x.dt_txt);
    // console.log(d);
    
    let image = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
    let desc = x.weather[0].description; 
   

    document.getElementById(`dayofweek${day+1}`).textContent = daysofw[d.getDay()];
    document.getElementById(`fc-temp${day+1}`).innerHTML = x.main.temp.toFixed(0);

   
    document.getElementById(`fc-img${day+1}`).setAttribute('src', image);
    document.getElementById(`fc-img${day+1}`).setAttribute('alt', desc);

    day++;

  });
  
});