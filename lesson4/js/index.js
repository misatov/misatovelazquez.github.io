// document.querySelector('#lastU').textContent= document.lastModified;
document.getElementById("copyright").innerHTML = (new Date().getFullYear());


const hambutton= document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');

hambutton = addEventListener('click', () =>
{mainnav.classList.toggle('responsive')}, false);

window.onresize = () =>{if (window.innerWidth > 760)
mainnav.classList.remove('responsive')};


// const datefield = document.querySelector("date");

// const now = new Date();
// const fulldate = new Intl.DateTimeFormat("en-US",{ datestyle: "full" }).format(now);

// datefield.textContent = fulldate;