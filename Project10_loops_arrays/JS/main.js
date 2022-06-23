function Call_Loop(){
    i=0;
    var varOutput=""; 
    var newVarOutput="";
    var stLen=0;
    while(i < 14){
        stLen=0;
        newVarOutput = "<br />" + i + " is less than 14"
        varOutput=varOutput + newVarOutput;
        stLen=newVarOutput.length;
        varOutput=varOutput + "(that sentence was " + stLen + " characters long).";
        i++;
        document.getElementById("Loop").innerHTML = varOutput;
    }
}
function For_Loop(){
    var Instruments = ["Guitar", "Sittar", "testing", "Bulbitar", "Kazoomitar", "Drums","Russian Lute"];
    var Content = "";
    var i=0;
    do_loop();
    function do_loop(){
        for (i=0; i< Instruments.length; i++){  //next 2 lines incorporate challenge 15
            if(Instruments[i]=="testing"){continue;} //if it is a testing entry, just skip it.
            if(Instruments[i].slice(0,7)=="Russian"){break;} //sanctions stop us from having russian content. stop if found
            //console.log(Instruments[i] + "<br />");
            Content+= "I can play the " + Instruments[i] + ".<br />";
        }
        Content+="<br />Batta Batta Boom.<br /><br />Note we skipped test entries, and stopped if found any Russian instruments.";
        document.getElementById("LoopA").innerHTML = Content;
    }
}
function arrayFunc(){
    var Things=["thing1", "thing2", "thingRed", "thingBlue"];
    var i=0;
    var Content="Oh no- here comes the things.... <br />";
    for (i=0;i<Things.length; i++){
        Content+="Here is " + Things[i] + "<br />";
    }
    Content+="<br />now whatcha gonna do?";
    document.getElementById("Array").innerHTML = Content;
}
function constFunc(){
    var Content="";
    const allT={called:"Eternal", lifespan:"as old as the universe", location:"everywhere"};
    allT.location="everywhere and nowhere";allT.lifespan="as old as time";
    Content="I am " + allT.called + " and I am " + allT.lifespan + " and you can find me " + allT.location + "<br />";
    let X="<br />I am the alpha and the omega."; //assignment 54
    Content+=X; 
    document.getElementById("ConstantT").innerHTML = Content;
}
function returnMe(){
    var x=10;
    return x;
    x=x+10;
    return x; //will not return 20 as func done after return
}
function returnMeStart(){
    y=returnMe();
    document.getElementById("r1").innerHTML = y;
}
function checkOutBook(){
    let book1={
            title:"the big book of things", 
            pages:"452", 
            year:"2002", 
            style:"hard cover", 
            author:"Mr.Mister",
            descr : function(){
                return ("The book titled "+ this.title+ " was written in "+ this.year + " by " + this.author);
            }
    };
    document.getElementById("o1").innerHTML = book1.descr;
}
