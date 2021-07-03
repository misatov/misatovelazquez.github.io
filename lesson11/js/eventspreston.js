const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {  
      console.table(jsonObject);

      const towns = jsonObject['towns'];
      const onlyOne = towns.filter((towns => towns.name == 'Preston' ));

      for(let i=0; i<onlyOne.length; i++){
        
        let card = document.createElement('section');
        let threeEvents = document.createElement('p');
        let threeEvents1 = document.createElement('p');
        let threeEvents2 = document.createElement('p');
        

        threeEvents.textContent =  onlyOne[i].events[0];
        threeEvents1.textContent =  onlyOne[i].events[1];
        threeEvents2.textContent =  onlyOne[i].events[2];

        card.append(threeEvents);
        card.append(threeEvents1);
        card.append(threeEvents2);
        document.querySelector('div.events').appendChild(card);
      }
    });
