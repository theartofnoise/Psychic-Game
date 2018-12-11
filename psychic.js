
    
    var win = document.getElementById("wins");
    var loss = document.getElementById("losses");
    var soFar = document.getElementById("soFar");
    var letters="qwertyuiopasdfghjklzxcvbnm";
    var compLetter = letters.charAt(Math.floor(Math.random()* letters.length));
    var tries = document.getElementById("tries");
    console.log(compLetter);
    var chances = 3;
    var losses = 0;
    var used=[];
    var wins=0;
    loss.textContent=losses;
    win.textContent=wins;
    tries.textContent=chances;
document.onkeyup = function(keyPress) {
    var userGuess = keyPress.key;  
    used.push(userGuess);
    console.log(" "+used);
    soFar.textContent=" "+used;
    chances --;
    tries.textContent=chances;
    function reStart() {
        compLetter=letters.charAt(Math.floor(Math.random()* letters.length));
        console.log(compLetter);
        clear(used);
    }
    function clear(bye) {
            for (i=0;i < used.length+2;i++){
            bye.pop();
            }
        } 
    if (chances===0 && userGuess!==compLetter) {
        
        alert("You lose!!!!");
        loss.textContent=losses++;
        chances=3; 
        tries.textContent=chances; 
        reStart();      
    }
    if (userGuess===compLetter) {
        alert("You guessed it!!!");
        wins++;
        win.textContent=wins;
        chances=3; 
        tries.textContent=chances;
        reStart();
        
        
    } else {
        console.log("loss");
        loss.textContent=losses;
        
    }

};


