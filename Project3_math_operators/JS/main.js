
function doMathStart(){ //to keep ? in place for a few seconds after load
    setTimeout(doMath, 1000);
    setTimeout(doMath2, 2000);
    setTimeout(doMath3, 3000);
    setTimeout(doMath4, 4000);
    setTimeout(doMath5, 5000);
    setTimeout(doMath6, 6000);
    setTimeout(doMath7, 7000);
    setTimeout(doMath8, 8000);
    setTimeout(doMath9, 9000);
    setTimeout(doMath10, 10000);
}

function doMath(){  //p is doMath onload and value result is doneMath id html write
    // variable declarations and inptu 
   var add3=1+1+1;
   document.getElementById("doneMath").innerHTML=add3;
    
    //return values or just push html
   
}
function doMath2(){  //p is doMath onload and value result is doneMath id html write
    // variable declarations and inptu 
   var sub3=3-2-1;
   document.getElementById("doneMath2").innerHTML=sub3;
    
    //return values or just push html
   
   
}
function doMath3(){  //p is doMath onload and value result is doneMath id html write
    // variable declarations and inptu 
   var sub3=2*2*2;
   document.getElementById("doneMath3").innerHTML=sub3;
    
    //return values or just push html
   
   
}
function doMath4(){  //p is doMath onload and value result is doneMath id html write
    // variable declarations and inptu 
   var sub3=1000/100/10;
   document.getElementById("doneMath4").innerHTML=sub3;
    
    //return values or just push html
   
   
}
//((4th + 3rd) * 2nd)^1st
function doMath5(){  //p is doMath onload and value result is doneMath id html write
    // variable declarations and inptu 
   var sub3=((1+8)*0)**3; 
   document.getElementById("doneMath5").innerHTML=sub3;
    
    //return values or just push html
   
   
}function doMath6(){  //p is doMath onload and value result is doneMath id html write
    // variable declarations and inptu 
   var sub3=321%123 ;
   document.getElementById("doneMath6").innerHTML=sub3;
    
    //return values or just push html
   
   
}
function doMath7(){  //p is doMath onload and value result is doneMath id html write
    // variable declarations and inptu 
   var sub3=-75;
   document.getElementById("doneMath7").innerHTML=sub3;
    
    //return values or just push html
   
   
}
function doMath8(){  //p is doMath onload and value result is doneMath id html write
    // variable declarations and inptu 
   var sub3=-(75);
   sub4=sub3;
   sub5=sub3;
   var sub4++; //why is this returing -75 ??? explained - was trying to combine a=b and a++ in one statement. couldn't. 
   var sub5--;
   var answer="incrementing (++) the last answer by one gives ";
   answer+=sub4;
   answer+=" and decrementing (--) by one gives ";
   answer+=sub5;
   answer+=".";
   document.getElementById("doneMath8").innerHTML=answer;
    
    //return values or just push html
   
   
}
function doMath9(){  //p is doMath onload and value result is doneMath id html write
    // variable declarations and inptu 
    var sub3=Math.random()*197;
    sub3=Math.round(sub3);
    document.getElementById("doneMath9").innerHTML=sub3;
    //return values or just push html
   
}
function doMath10(){
    var sub3=Math.PI;
    document.getElementById("doneMath10").innerHTML=sub3;
}
