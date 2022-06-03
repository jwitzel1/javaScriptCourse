function whatAmI(){
    var whatIam=typeof "What Am I?";
    document.getElementById("id1").innerHTML = "'what am i' is a " + whatIam + "<br />";
    //document.write("This was a " + whatIam);

}
function infinite(){
    var inf=33E333;
    document.getElementById("infiniteNumber").innerHTML=inf;
}
function negInfinite(){
    var neginf=33E333;
    document.getElementById("negInfiniteNumber").innerHTML=-neginf;
}
function nanDisplay(){
    var notnum=0/0;
    document.getElementById("nan").innerHTML=notnum;
}
function displayTrue(){
    var val=10>2;
    document.getElementById("tr").innerHTML=val;
}
function displayFalse(){
    var val=4<4;
    document.getElementById("fa").innerHTML=val;
}
function coerseMe(){
    var val='10' + 0;
    document.getElementById("co").innerHTML=val;
}
function compareMe(){
    var val1=11111*1111;
    var val2=12344321;
    var val = (val1==val2);
    document.getElementById("com").innerHTML=val;
}
function compareMeBoolean(){
    //1 equals 2/2; 'a' equals 1; 1 equals '1'; 'a' equals 'b'
    var val1='a';
    var val2=1;
    var val2b=2/2;
    var val3='1';
    var val4='b';
    var vala = (val2===val2b);
    var valb = (val1===val2);
    var valc = (val2===val3);
    var vald = (val1===val4);
    document.getElementById("comB").innerHTML="1 equals 2/2: " + vala + "<br />'a' equals 1: " + valb + "<br /> 1 equals '1': " + valc + "<br />'a' equals 'b': " + vald + "<br />";
}
// for the next 4
//1 > 0 and 2 > 0 ;  1 >= 2 and 1 >= 1 ; 1 > 0 or 2 > 0 ; 1 > 2 or 1 > 1 <
function compareOps1(){
    var b=(1>0 && 2>0);
    document.getElementById("op1").innerHTML="1 > 0 and 2 > 0 "  + b;
}
function compareOps2(){
    var b=(1 >= 2 && 1 >= 1);
    document.getElementById("op2").innerHTML="1 >= 2 and 1 >= 1 "  + b;
}
function compareOps3(){
    var b=( 1 > 0 || 2 > 0);
    document.getElementById("op3").innerHTML="1 > 0 or 2 > 0 "  + b;
}
function compareOps4(){
    var b=(1 > 2 || 1 > 1);
    document.getElementById("op4").innerHTML="1 > 2 or 1 > 1 "  + b;
}
function not1(){  // 1 is not > 2
    var b=!(1>2);
    document.getElementById("not1").innerHTML="1 is not > 2 (!1>2)"  + b;
}