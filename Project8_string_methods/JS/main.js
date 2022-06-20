function doFunc(){
    var x="I am the left. ";
    var w="I am the middle. "
    var y="I am the right. ";
    var z = x.concat(w,y);
    document.getElementById("id1").innerHTML=z;
}
function doFunc2(){
    var x="I am the alpha and the omega. ";
    var y=x.slice(0,4);
    document.getElementById("id2").innerHTML=y;
}
function doFunc3(){
    var x=document.getElementById("id3b").value;
    var cX=(x.toUpperCase());
    document.getElementById("id3").innerHTML=cX;
    //find the string if it is in there, and report.
    var positionX = cX.search(/text/i);
    var finish="";
    if(positionX==-1){finish="not found in your string.";}
    else{finish="found at position (starting at 0) " + positionX + ".";}
    document.getElementById("id4").innerHTML=positionX + " : The word 'text' was " + finish;
}
function doFunc4(){
    var x=999;
    document.getElementById("id5").innerHTML=x.toString();
}
//999.999888777 to prec 7
function doFunc5(){
    var x=999.999888777;
    document.getElementById("id6").innerHTML=x.toPrecision(7);
}
function doFunc7(){
    var x=1.23456;
    document.getElementById("id7").innerHTML=x.toFixed(4);
}
function doFunc8(){
    var x="bye there";
    document.getElementById("id8").innerHTML=x.valueOf();
}