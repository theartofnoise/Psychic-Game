
    
    var win = document.getElementById("wins");
    var loss = document.getElementById("losses");
    var soFar = document.getElementById("soFar");
    var letters="qwertyuiopasdfghjklzxcvbnm";
    //creates random character from letters
    var compLetter = letters.charAt(Math.floor(Math.random()* letters.length));
    var tries = document.getElementById("tries");
    //the cheat lol
    function cheat() {console.log("don't type letter "+compLetter);};
    cheat();
    var chances = 10;
    var losses = 0;
    var used=[];
    var wins=0;
    loss.textContent=losses;
    win.textContent=wins;
    tries.textContent=chances;
    //keydown starts the game
document.onkeyup = function(keyPress) {
    var userGuess = keyPress.key;  
    used.push(userGuess);
    console.log(" "+used);
    soFar.textContent=" "+used.join(" ");
    chances --;
    tries.textContent=chances;
    //restarts the game
    function reStart() {
        clear(used);
        compLetter=letters.charAt(Math.floor(Math.random()* letters.length));
        cheat();
        
    }
    //best way i could figure out how to clear the used guesses
    function clear(bye) {
            for (i=0;i < chances;i++){
            bye.pop();
            }
        } 
        //checks for chances left and incorrect guess
    if (chances===0 && userGuess!==compLetter) {       
        loss.textContent=losses++;
        chances=10; 
        tries.textContent=chances;
        alert("I was thinking of "+compLetter);          
        reStart(); 
        alert("You lose!!!!");  
    }
    //checks for correct guess
    if (userGuess===compLetter) {
        
        wins++;
        win.textContent=wins;
        chances=10; 
        tries.textContent=chances;
        reStart();
        alert("You guessed it!!!");
        
    //you lost 
    } else {
        console.log("loss");
        loss.textContent=losses;
        
    }

};


