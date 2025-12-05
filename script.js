var drop = document.getElementsByClassName("collapse");
var i;

for(i=0; i < drop.length; i++){
    drop[i].addEventListener("click", function() {
        
        var content = this.nextElementSibling;
            if (content.style.display == "block") {
        content.style.display = "none";
        }else {
        content.style.display = "block";
        }
    });
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}