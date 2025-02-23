const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});




const homeLink1 = document.querySelector('.per-text1');  
const homeText2 = document.getElementById('homeText1'); 
const homeText23 = document.getElementById('home_Text');  
const homeText25 = document.getElementById('home-Text');

// Home page slider page 1
document.querySelector('.click-slider').addEventListener('click', function() {
    const slider = document.querySelector('.slider');
    const slider1 = document.querySelector('.slider1');
    
    
    if (slider.style.right === '0px') {
        homeText2.style.display = 'none'; 
        homeText23.style.display = 'inline-block'; 
        homeText25.style.display = 'inline-block'; 
        slider1.style.right = '-85%';
    }else {
        slider.style.right = '0'; 
        homeText25.style.display = 'inline-block';
        homeText2.style.display = 'none'; 
    }
});



// Home Page slider page 2
document.querySelector('.ca_Slider').addEventListener('click', function() {
    const slider = document.querySelector('.slider');
    const slider1 = document.querySelector('.slider1');
    
    
    if (slider1.style.right === '0px') {
        slider1.style.right = '-85%';
        homeText23.style.display = 'inline-block'; 
        homeText2.style.display = 'none'; 
        
    } else {
        slider1.style.right = '0';
        slider.style.right = '0';
        homeText23.style.display = 'none'
        homeText2.style.display = 'inline-block'; 
        homeText25.style.display = 'inline-block';        
    }
});

// Home Page - main 
document.querySelector('.s_wrap').addEventListener('click', function() {
    const slider = document.querySelector('.slider');
    const slider1 = document.querySelector('.slider1');
    
   
    if (slider.style.right === '0px') {
        slider.style.right = '-85%';
        slider1.style.right = '-85%';
        homeText25.style.display = 'none'; 
        homeText2.style.display = 'inline-block';         
    } 
});

$('.slider2-toggle, .slider1-toggle, .slider-toggle').click(function(){ 
    
    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
  
    if (isMobile) {
       
        
         $('.slider, .slider1').css({  'right':'-100%',});
         $('#home-Text').css('display', 'none');
    } 
    // else{
    //     console.log('ggggg');
        
    //    $('.slider, .slider1').css({  'right':'-85%',}); 
        
    // } 
   
});


// NavBar Our Team
document.querySelector('.slider2-toggle').addEventListener('click', function() {
    const slider = document.querySelector('.slider');
    const slider1 = document.querySelector('.slider1');
    
    if (slider.style.right === '0px') {
        slider.style.right = '-85%';
        slider1.style.right = '-85%';
        homeText25.style.display = 'none'; 
        homeText2.style.display = 'inline-block'; 
        
    } 
});



// Function to NavBar Persional Details
document.querySelector('.slider-toggle').addEventListener('click', function() {
    const slider = document.querySelector('.slider');
    const slider1 = document.querySelector('.slider1');
    
    if (slider.style.right === '0px') { 
        homeText2.style.display = 'none'; 
        homeText23.style.display = 'inline-block'; 
        homeText25.style.display = 'inline-block'; 
        slider1.style.right = '-85%';
    }else {
        slider.style.right = '0'; 
        homeText25.style.display = 'inline-block';
        homeText2.style.display = 'none'; 
       
    }
});



// Function to NavBar Contact Us
document.querySelector('.slider1-toggle').addEventListener('click', function() {
    const slider = document.querySelector('.slider');
    const slider1 = document.querySelector('.slider1');
    
    if (slider1.style.right === '0px') {
        slider1.style.right = '-85%';
        homeText23.style.display = 'inline-block'; 
        homeText2.style.display = 'none'; 
        
    } else {
        slider1.style.right = '0';
        slider.style.right = '0';
        homeText23.style.display = 'none'
        homeText2.style.display = 'inline-block'; 
        homeText25.style.display = 'inline-block';
        
    }
});



let slideIndex = 0;
const slides = document.querySelectorAll('.slider,.slider1');
const totalSlides = slides.length;

const slider1 = document.getElementById('cSlider');
const slider2 = document.getElementById('cSlider4');
const rightBtn = document.getElementById('right');
const leftBtn = document.getElementById('left');



rightBtn.onclick = function () {
    moveSlide(1);
};


leftBtn.onclick = function () {
    moveSlide(-1);
};


function moveSlide(direction) {
    if (direction === 1) { 
        slideIndex++;
    } else if (direction === -1) { 
        slideIndex--;
    }

   
    if (slideIndex === 0) {
        slider1.style.right = '-85%';
        slider2.style.right = '-85%';
        homeText2.style.display = 'inline-block';
        homeText23.style.display = 'inline-block';
        homeText25.style.display = 'none';
      
        
    } else if (slideIndex === 1) {
        slider1.style.right = '0';
        slider2.style.right = '-85%';
        homeText2.style.display = 'none';
        homeText23.style.display = 'inline-block';
        homeText25.style.display = 'inline-block';
        
        
    } else if (slideIndex === 2) {
        slider1.style.right = '0';
        slider2.style.right = '0';
        homeText2.style.display = 'inline-block';
        homeText23.style.display = 'inline-block';
        homeText25.style.display = 'none';
        
        
    }
    else if (slideIndex === 3) {
        slider1.style.right = '-85%';
        slider2.style.right = '-85%';
        homeText2.style.display = 'inline-block';
        homeText23.style.display = 'inline-block';
        homeText25.style.display = 'none';
       
        
    }

    // Disable the right button when reaching the end
    if (slideIndex === 3) {
        rightBtn.disabled = true;
        rightBtn.classList.add('disabled-icon');
    } else {
        rightBtn.disabled = false;
        rightBtn.classList.remove('disabled-icon');
    }

    // Disable the left button when reaching the first slide
    if (slideIndex === 0) {
        leftBtn.disabled = true;
        leftBtn.classList.add('disabled-icon');
    } else {
        leftBtn.disabled = false;
        leftBtn.classList.remove('disabled-icon');
    }
}


function resetSlides() {
    slider1.style.right = '0';
    slider2.style.right = '0';
    homeText2.style.display = 'inline-block';
    homeText23.style.display = 'inline-block';
    homeText25.style.display = 'inline-block';
    slideIndex = 1; 
}










   