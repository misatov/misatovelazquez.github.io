//create list
const list = document.querySelector('ul');
//provide input box
const input = document.querySelector('input');
//add chapter button
const button = document.querySelector('button');

//click to add list using event listener
button.addEventListener('click', () => {
  let myItem = input.value;
  input.value = '';

  //create li element
  const listItem = document.createElement('li');
  // create text in span
  const listText = document.createElement('span');
  //create delete button 
  const listBtn = document.createElement('button');

  //Use appendChild to output listItem, listText and listBtn
  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = '❌';
  list.appendChild(listItem);

  //click to remove from list using event listener
  listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  })
  input.focus();
});