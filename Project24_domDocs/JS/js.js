function findMe(){
    var w="url: "+document.URL;
    document.getElementById('founded').innerHTML=w;
}
function findRef(){
    var r=document.referrer;
    if(r.length<1){
        r="You came from nowhere - you came directly here."
    }else{
        r="You came from " + r + ".";
    }
    document.getElementById('foundRef').innerHTML=r;
}