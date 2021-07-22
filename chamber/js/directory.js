const requestURL = 'json/directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })


  .then(function (jsonObject) {
    console.table(jsonObject);  

    const members = jsonObject['directory'];
  

    for(let i=0; i<members.length; i++){
        let card = document.createElement('section'); // container
        let h3= document.createElement('h3');
        let name = document.createElement('p');
        let city = document.createElement('p');
        let website = document.createElement('a');
   
        let secDiv = document.createElement('div'); // div container

        h3.textContent = members[i].name;
        name.textContent = members[i].name ;
        city.textContent = members[i].city;
        website.textContent = members[i].website;
        website.setAttribute('href', website);
    //     rainFall.textContent = "Average Rain Fall: " + members[i].averageRainfall;
    //     img.setAttribute('src', `images/${members[i].photo}`);
    //     img.setAttribute('alt', `${members[i].name}`);
    //     secDiv.setAttribute('class', 'secDiv');


        card.append(secDiv);
        secDiv.append(h3);
        secDiv.append(name);
        secDiv.append(city);
        secDiv.append(website);
    //     secDiv.append(rainFall);
    //     card.append(img);
        


        document.querySelector('div.cards').append(card);
    }

    });
  
