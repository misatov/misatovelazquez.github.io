const imageToLoad = document.querySelectorAll("img[data-src]");

// option parameters being set for the IntersectionObserver
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) =>{
    image.setAttribute('src',image.getAttribute('data-src'));
    image.onload = () =>{image.removeAttribute('data-src');};

};

//first check to see if Intersection Observer is supported
if('IntersectionObserver' in window){
    const imgObserver = new IntersectionObserver((items, observer) =>{
        items.forEach((item) =>{
            if(!item.isIntersecting){
                return;
            }
            else{
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }

        });
    },imgOptions);

    imageToLoad.forEach((img) =>{
    imgObserver.observe(img);
});
}else{
    imageToLoad.forEach((img) =>{
        loadImages(img);
    });
}