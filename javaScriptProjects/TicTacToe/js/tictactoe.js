//turn tracker var
let activePlayer='X';
//stored move array to determine win conditions
let selectedSquares=[];

//func place x or o
function placeXOrO(squareNumber){
    //ensure not already selected
    //the .some() used to check each element of selectedSquare array to see if it contains the square number selected ie duplicate
    if(!selectedSquares.some(element=>element.includes(squareNumber))){
        //this var retrieves the html element id that was clicked
        let select = document.getElementById(squareNumber);
        //whose turn
        var im;
        if(activePlayer==='X'){im='url("images/x.png")';}else{im='url("images/o.png")';} //x or o. one or other.
          //then put it down.
        select.style.backgroundImage=im;
        console.log('drew image ' + im + ' in square ' + squareNumber + ' for player ' + activePlayer + '<br />');
        //squareNumber and activePlayer are concatenated and added to arry (push)
        selectedSquares.push(squareNumber+activePlayer);
        console.log(selectedSquares);
        //check if a winner
        checkWinConditions();
        //this calls func to check for win condition
        if(activePlayer==='X'){
            //if x change to o
            activePlayer='O';
           // console.log('set active player to O');
        } else {
            //change activeplayer to X
            activePlayer='X';
           // console.log('set active player to X');
        }
        //this func players placement sound
        audio('./media/place.mp3'); 
        //this condisiton checks to see if it is computers turn
        if(activePlayer==='O'){
           // console.log('lets go computer!<br />disable click<br />');
            //this func disables click for computer choice
            disableClick();
            //func waits 1 sec to place img and reenable clicking
           // console.log('now call computersTurn with a 1sec wait<br />');
            setTimeout(function(){computersTurn(); },1000);
           // console.log('done cpmuter turn and wait.');
        }
        //returning true is needed for our copmutersTurn() func to work
        return true;

    }

    //this func results in random square being selefcted
    function computersTurn(){
        //this boolean needed for while loop
        let success=false;
        //this var stores rand 0-8
        let pickASquare;
        //this condition allows while3 loop to keep trying if square taken
        while(!success){
            //rand 0-8
            var r=Math.floor(Math.random()*9);
            console.log('computer picked square ' + r + '<br />');
            pickASquare=String(r);
            //if rand true square open
            if(placeXOrO(pickASquare)){
                console.log('calling placeXOrO with parameter ' + pickASquare + '<br />');
                //calls func
               placeXOrO(pickASquare);
                //changes bool to end loop
                console.log('done func placeXOrO with parameter ' + pickASquare + '<br />');
                success=true;
                console.log('success set to true');
            };
        }
    }
}

//this func parses sqlectedSquares array to search for win conditions.
//drawWinLine func called to draw line if win met
function checkWinConditions(){
    // X WINS
    //x 0 1 2 
    if       (arrayIncludes('0X', '1X', '2X')){drawWinLine(50,100,558,100);}
    //x 3 4 5 
    else if  (arrayIncludes('3X', '4X', '5X')){drawWinLine(50,304,558,304);}
     //x 6 7 8 
    else if  (arrayIncludes('6X', '7X', '8X')){drawWinLine(50,508,558,508);}
    //x 0 3 6 
    else if  (arrayIncludes('0X', '3X', '6X')){drawWinLine(100,50,100,558);}
    //x 1 4 7 
    else if  (arrayIncludes('1X', '4X', '7X')){drawWinLine(304,50,304,558);}
    //x 2 5 8 
    else if  (arrayIncludes('2X', '5X', '8X')){drawWinLine(508,50,508,558);}
    //x 0 4 8 
    else if  (arrayIncludes('0X', '4X', '8X')){drawWinLine(100,100,520,520);}
    //x 2 4 6 
    else if  (arrayIncludes('2X', '4X', '6X')){drawWinLine(100,508,510,90);}
    //O WINS
    //o 0 1 2 
    else if  (arrayIncludes('0O', '1O', '2O')){drawWinLine(50,100,558,100);}
    //o 3 4 5 
    else if  (arrayIncludes('3O', '4O', '5O')){drawWinLine(50,304,558,304);}
    //o 6 7 8 
    else if  (arrayIncludes('6O', '7O', '8O')){drawWinLine(50,508,558,508);}
    //o 0 3 6 
    else if  (arrayIncludes('0O', '3O', '6O')){drawWinLine(100,50,100,558);}
    //o 1 4 7 
    else if  (arrayIncludes('1O', '4O', '7O')){drawWinLine(304,50,304,558);}
    //o 2 5 8 
    else if  (arrayIncludes('2O', '5O', '8O')){drawWinLine(508,50,508,558);}
    //o 0 4 8 
    else if  (arrayIncludes('0O', '4O', '8O')){drawWinLine(100,100,520,520);}
    //o 2 4 6 
    else if  (arrayIncludes('2O', '4O', '6O')){drawWinLine(100,508,510,90);}
    else if (selectedSquares.length >= 9){
        //this func plays the tie game sound
         audio('./media/tie.mp3');
         console.log('tie game sound played. wait 2 sec then reset');
        //this func sets 0.3 sec timer b4 resetGAme is called
        //make player user
        activePlayer='X';
        //setTimeout(function(){clear();resetGame();},2000);
        console.log('do new place');
        console.log('do new by refresh after 5 sec while sound playing.');
        setTimeout(function(){
            window.location.reload(1);
            },5000);
    }
    
    //this func checks if any array includes 3 strings.
    //is used to check for earch win condition
    function arrayIncludes(squareA, squareB, squareC){
        //the next 3 vars will be used to check for the 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if the 3 vars we pass are all included inour array true is
        //returned and our else if condition exectues the drawWinLine func
        if(a===true && b===true && c===true){return true;}
    }
}
//this func makes our body element termporarily unclickable
function disableClick(){
    //this makes our body unclickable
    body.style.pointerEvents='none';
    //this makes our body clickable again after 1 sec
    setTimeout(function(){body.style.pointerEvents = 'auto';},1000);
}

//this func takes a string parameter of the path you set earlier
//for placement sound (place.mp3)
function audio(audioURL){
    let audio = new Audio(audioURL);
    //play method plays our audio sound
    audio.play();
}

function drawWinLine(coordX1,coordY1,coordX2,coordY2){
    //accesses canvas
    const canvas=document.getElementById('win-lines');
    //this line gives us access to methods and properties to use on canvas
    const c=canvas.getContext('2d');
    //this line indicates where the start of a lines x axis is
    let x1=coordX1,   //x start
        y1=coordY1,   //y start
        x2=coordX2,   //x end
        y2=coordY2,   //y end
        x=x1,y=y1;  //temp x and y axis data we update in animation


    //func interacts with canvas
    function animateLineDrawing(){
        //var creates loop for when game ends to reset
        const animationLoop=requestAnimationFrame(animateLineDrawing);
        //method clears content from last loop iteration
        c.clearRect(0,0,608,608);
        //starts new path
        c.beginPath();
        //method moves to start point for line
        c.moveTo(x1,y1);
        //method indicates end point of line
        c.lineTo(x,y);
        //method set the width of line
        c.lineWidth=10;
        //metho sets the color of line
        c.strokeStyle='rgba(70,255,33,0.8)';
        //method draws everywhing we laid above
        c.stroke();
        //conditino checks if we reach endpoint
        if(x1<=x2 && y1 <= y2){
            //this condition adds 10 to the previous end x point
            if(x < x2){x+=10;}
            //adds 10 to prev y point
            if(y < y2){y+=10;}
            //cond cancels animation loop if reach end points
            if(x>=x2 && y>=y2){cancelAnimationFrame(animationLoop);}
        }
        //this cond similar to above
        //was necessary for the 6 4 2 win cond
        if(x1<=x2 && y1>=y2){
            if(x < x2){x+=10;}
            if(y > y2){y-=10;}
            if(x>=x2 && y <=y2){cancelAnimationFrame(animationLoop);}
        }
    }

    //this fun clears canvas after win line
    function clear(){
        //this line starts our animation loop
        const animationLoop = requestAnimationFrame(clear);
        //line clears canvas
        c.clearRect(0,0,608,608);
        //line  stops animation loop
        cancelAnimationFrame(animationLoop);
    }

    //this line disallows clicking while the win sound plays
    disableClick;
    //line plays the win sound
    audio('./media/winGame.mp3');
    //line callls main animatino
    animateLineDrawing();
    //wait 1 sec then clear canvas, reset game, and allow click again
    setTimeout(function(){clear();resetGame();},1000);

}
function resetGame(){
    //for loop iterates thrgouh each square
    for (let i=0;i<9;i++){
        //gets element of i
        let square=document.getElementById(String(i));
        //remove elements background img
        square.style.backgroundImage='';
    }
    //reset array so empty and can start again
    selectedSquares=[];
    console.log(' array now: ' + selectedSquares);
}