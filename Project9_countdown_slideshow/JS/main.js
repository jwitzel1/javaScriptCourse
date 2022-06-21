var slideIndex = 1;
showSlides(slideIndex);

// Next/previous 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail 
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  //var slides = document.getElementsByClassName("mySlides"); 
    var slides = document.querySelectorAll(".mySlides");  //debug try - didnt make a dif.
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  if (slideIndex>=0 && slideIndex<=100 ){ //debug try. wrap for in if. didnt make a dif.
      for (i = 0; i < slides.length; i++) {
        console.log("slides "+i+" display none<br />length was " + slides.length + "and thats that.<br />"); //debug
        dump(slides); //debug.
        console.log("<br />done<br />"); //debug
        slides[i].style.display = "none";
      }
  }
  if(dots.length>=0 && dots.length<=100){ //debug try. wrap for in if. didnt make a dif.
    for (i = 0; i < dots.length; i++) {
            console.log("dots "+i+" class replaced active with nothing <br />");//debug
        dots[i].className = dots[i].className.replace(" active", "");
    }
  }
  slides[slideIndex-1].style.display = "block";
    console.log("slides "+(slideIndex-1)+" style now block<br />");//debug
  dots[slideIndex-1].className += " active";
    console.log("dots "+(slideIndex-1)+" classname now space then active<br />");//debug
} 

function dump(obj) { //debug - drop all aspects of an object into console.
    var out = '';
    for (var i in obj) {
    out += i + ": " + obj[i] + "\n";
    }
   console.log(out);
   }

function countdown(){
    var seconds = document.getElementById("seconds").value;
    function tick(){
        seconds=seconds-1;
        if(seconds>=(-1)){
            if(seconds==(-1)){
                alert("Time's up!");
                seconds="timer done."; 
            }else{
                document.getElementById('ticker').insertAdjacentHTML('beforeend', " tick ... ");
                setTimeout(tick, 1000);
            }
            document.getElementById("timer").innerHTML = seconds;
        }
    }

    tick();
}