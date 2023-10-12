const hamburger = document.querySelector('.header .nav-bar .nav-list .burger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 30) {
		header.style.backgroundColor = 'burlywood';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => { 
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("photos");
  let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
  
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
 
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

var section = document.querySelectorAll('section');
    var li =document.querySelectorAll('ul li ');

    window.addEventListener("scroll",()=>{
      
      let current =""; 
      section.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if(pageYOffset > sectionTop - sectionHeight/3){
          current = section.getAttribute('id');
        }
      })

      li.forEach(li=>{
        li.classList.remove('active');
        if(li.classList.contains(current)){
          li.classList.add('active' );
        }
      })

    })