const temp = document.querySelector('.temp').textContent;
const speed = document.querySelector('.speed').textContent;

let answer = parseFloat(  35.74 + 0.6215*temp − 35.75*Math.pow(speed,0.16) + 0.4275*temp*Math.pow(speed,0.16));

if(temp<= 50 && speed>3){
    document.querySelector('.windchill').textContent = answer;
}
else{
    document.querySelector('.windchill').textContent ="N/A";
}


