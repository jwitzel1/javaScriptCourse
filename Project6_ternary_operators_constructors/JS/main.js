function Ride_Function(){
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52)?"You are too short ":"You are tall enough ";
    document.getElementById("Ride").innerHTML=Can_ride + "to ride ";
}
function doNested(){ //could be taught to count in any base
    var textCountDisplay="";
    for (let i=0; i< 4;i++){
        textCountDisplay+="<br />doing " + i + "'s ... <br />";
        for (let j=0; j < 10; j++){
            textCountDisplay+=i+""+j+"<br />";
        }
    }
    document.getElementById("Nested_Function").innerHTML=textCountDisplay;
}