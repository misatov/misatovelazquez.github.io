const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })


  .then(function (jsonObject) {
    console.table(jsonObject);  
  
    const prophets = jsonObject['prophets'];

    for (let i=0; i<prophets.length; i++){
        let card = document.createElement('section');
        let h2= document.createElement('h2');
        let dob = document.createElement('p');
        let pob = document.createElement('p');
        let img = document.createElement('img');
        
        

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        dob.textContent = "Date of Birth : " + prophets[i].birthdate;
        pob.textContent = "Place of Birth : " + prophets[i].birthplace;
        img.setAttribute('src', prophets[i].imageurl);
        img.setAttribute('alt', `The official portrait of ${prophets[i].name} ${prophets[i].lastname}`);
        

        card.append(h2);
        card.append(dob);
        card.append(pob);
        card.append(img);

        document.querySelector('div.cards').append(card);
    }

  });