//find lements
var showPrevBtn = document.getElementById('show-prew-btn');
var showNextBtn = document.getElementById('show-next-btn');
var slideImage = document.getElementById('slide-image');

// events subscribe
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

// create images array
var imagesUrls = [];
imagesUrls.push('https://the-tech.kz/wp-content/uploads/2020/12/SONATA-hero-option1-764A5360-edit.jpg')
imagesUrls.push('https://www.driving.co.uk/s3/st-driving-prod/uploads/2020/02/2020-Vauxhall-Corsa-SRi-UK-01-1024x638.jpg')
imagesUrls.push('https://cdn.motor1.com/images/mgl/g6wem/s3/most-expensive-lead.jpg')
imagesUrls.push('https://www.aitrends.com/wp-content/uploads/2019/09/9-13SportsCar-2.jpg')

currentImageIndex = 0;
slideImage.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true;


// functions definitions
function onShowPrevBtnClick(){
    currentImageIndex--;
    slideImage.src = imagesUrls[currentImageIndex];
    //disable prev button if need;
    if (currentImageIndex === 0){
        showPrevBtn.disabled = true;
        showNextBtn.disabled = false;
    }

};

function onShowNextBtnClick(){
    currentImageIndex++;
slideImage.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = false;
//disable next button if need;
    if (currentImageIndex === (imagesUrls.length-1)){
        showNextBtn.disabled = true;
    }
    
};