function Vote_Function(){
    var age, canVote;
    age=document.getElementById("age").value;
    canVote=(age<18)?"You're too young to vote.":"Proceed to the voting booth.";
    document.getElementById("ageResult").innerHTML=canVote;
}