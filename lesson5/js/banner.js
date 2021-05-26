// let thedate = new Date();
// console.log(thedate.getDay());

// // process - if it is friday then turn the aside display property to block
if(now.getDay() == 5){
    // console.log('Pancake day!! 💛');
   document.querySelector('#banner').style.display = 'block';
}
else{
    document.querySelector('#banner').style.display = 'none';
}

// *challenge* try in one statement if possible 
// 
//  return (thedate.getDay() == 5 ) ? 'document.querySelector('#banner').style.display = "block"' : 'document.querySelector('#banner').style.display = "none"';
// // 
// console.log(thedate.getDay());