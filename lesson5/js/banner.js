let thedate = new Date();
// console.log(thedate.getDay());

// process - if it is friday then turn the aside display property to block
if(thedate.getDay() == 6){
    // console.log('Pancake day!! 💛');
   document.querySelector('#banner').style.display = 'block';
}
else{
    document.querySelector('#banner').style.display = "none";
}

// try in one statement if possible 