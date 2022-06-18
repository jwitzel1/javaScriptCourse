var x=10;
function localFunc(){
    var x=11;
    var y=4;
    var z=x+y;
    console.log(z);
}
function addXY(){
    var z=x+y;
    console.log(z);
}
function gethoursnow(){
    var hrs=new Date().getHours();
    if (hrs!=12){
        document.getElementById("hoursNow").innerHTML = "Hours used up today: " + hrs + "<br />";
    }else{
        document.getElementById("hoursNow").innerHTML = "ITS LUNCHTIME!!!! <br />";
    }
}
function doAreYouCreative(){
    var valEntered=document.getElementById("numbr").value, returnResponse="";
    if(valEntered < 10.1 && valEntered>0.9){
        returnResponse="Correct! Not very creative, but correct...";
    }else{
        returnResponse="Well done, you are creative! There are so many colours in the rainbow, and you can use every single one!";
    }
    document.getElementById("areyoucreative").innerHTML = returnResponse;
}