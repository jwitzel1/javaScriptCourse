function findMe(){  
    // variable declarations and concatination. 
    var A="I am id1 and this is variable A";
    var B="I am id2 and this is variable B";
    var C="Now you know my names!";
    C+="<br />BAM!<br />";
    
    //adding the variables to the html on function call
    document.getElementById("id1").innerHTML=A;
    document.getElementById("id2").innerHTML=B;
    document.getElementById("id3").innerHTML=C;
   
}