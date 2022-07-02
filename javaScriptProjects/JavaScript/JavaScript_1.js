function getAge(){
    var results;
    var decadeBorn=document.getElementById("decade").value;
    
    switch(decadeBorn){
        case "1930":
            results="You are frugal with water and try not to waste anything. You know wha the Hindenberg explosion is."; 
        break;
        case "1940":
            results="You are a patriot and dislike Nazis.  You have nostalgia for trains."; 
        break;
        case "1950":
            results="You view your car as a personality statement.  You remember nuclear fallout drills in school. "; 
        break;
        case "1960":
            results="You have a strong opinion about hippies and Cuba.  You view space travel as a national achievement."; 
        break;
        case "1970":
            results="You have childhood pictures with you in overalls and bell bottoms.  The Star Wars movies are a fond memory, and you rode a banana seat bicycle."; 
        break;
        case "1980":
            results="You know that video killed the radio star.  You have rented a VCR player, and know the difference between VHS and Beta.  You likely have poor taste in music."; 
        break;
        case "1990":
            results="You feel you are a new type of human, connected digitally to your world and peers.  Everyone before you is old-fashioned. You have raged against the machine... "; 
        break;
        case "2000":
            results="You feel you will never own a home (or your parents bought you one).  Room-mates is a way of life. You have more than 5 monthly subscriptiosn / payments."; 
        break;
        case "2010":
            results="You believe that social media is social life.  You have taken over 100 selfies.  You use 'boomer' and 'Karen' as insults."; 
        break;
        case "2020":
            results="How are you even reading this? You are a genius!"; 
        break;
        default: 
            results="maybe you were born out of time. Therefore you are a time traveller!! Or just REALLY old. Or maybe you're a vampire.";

    }
    var C=document.getElementsByClassName("displayText");
    C[0].innerHTML = results; //assignment 57 - use elementByClassName
    //it is too bad you cannot use the C general to change ALL of that class element. Makes it just like a div sort of otherwise.. 
}
function drawCanvas(){
    //size is 300 x 300. do circles decrement by 10 with radious 130 to start.
    var s=130;
    var d=20;
    
        var c = document.getElementById("canvasID");
        var ctx = c.getContext("2d");
        ctx.beginPath();
       // for (s=130;s>0;s-d){
            ctx.arc(s,s,s,0,2*Math.PI); 
      //  } 
        ctx.stroke();
    }