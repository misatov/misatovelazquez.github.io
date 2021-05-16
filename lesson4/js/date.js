
const datefield = document.querySelector("date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US",{ datestyle: 'full' }).format(now);

datefield.textContent = fulldate;