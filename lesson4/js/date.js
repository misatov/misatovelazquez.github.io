
const datefield = document.querySelector("date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US",{ dateStyle: 'full' , formatMatcher:"best fit"}).format(now);

datefield.textContent = fulldate;