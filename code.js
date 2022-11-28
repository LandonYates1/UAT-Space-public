function countdownTimer(){
    //countdownTimer will go from 50 to 0 by fives
    console.log("countdownTimer() started");
    var currTime = 50;
    document.getElementById("countDis").innerHTML = currTime + "seconds";
    //45csecond display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + "seconds";
    },5000)
    //40 second display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + "seconds";
    },10000)
    //35 second display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + "seconds";
    },15000)
    //30 second display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    },20000)
    //25 second display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    },25000)
    //20 second display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    },30000)
    //15 second display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    },35000)
    //10 second display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    },40000)
    //5 second display
    setTimeout(function(){
        currTime = currTime -5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    },45000)
}
function playCraps(){
    // startsa log of what is taking place.
    console.log("playCraps() started");
    //initiates variable 1
    var die1 = 0;
    //initiates variable 2
    var die2 = 0;
    //creates a die with six sides
    die1 = Math.ceil(6 * Math.random());
    //creates a die with six sides
    die2 = Math.ceil(6 * Math.random());
    //creates a log of die 1
    console.log(die1);
    //creates a log of die 2
    console.log(die2);
    //communicates a result of die 1
    document.getElementById("Die1").innerHTML = "The result for die1 is: " + die1;
    //communicates a result of die 2
    document.getElementById("Die2").innerHTML = "The result for die2 is: " + die2;
    // sums the values of the dice.
    var sum = die1 + die2;
    //checks if craps
    if(sum == 7 || sum == 11){
        console.log("you lose!!!!");
        document.getElementById("Gameres").innerHTML = "You did not find victory. Plz play again and WIN!";
    }
    //check for win (even doubles)
    else if(die1 % 2 == 0 && die1 == die2){
        console.log("you win!!!!");
        document.getElementById("Gameres").innerHTML = "You Won!";
    }
    //check for tie
    else{
        console.log("Tie!");
        document.getElementById("Gameres").innerHTML = "You did not win or lose";
    }
}
// btrCountdownTimer created to fulfil assignment: Mission Control We Have a Problem! Debugging Time!
function btrCountdownTimer(){
    console.log("btrCountdownTimer started");
    var count = 50;
    for(var i = 0; i < 11; i++){
        setTimeout(function(){
                console.log(count);
                document.getElementById("countDis").innerHTML = count;
                if(count == 0){
                    document.getElementById("countDis").innerHTML = "Blastoff!!!";
                }
                count = count - 5;
        }, i * 5000)
    }
}
function chgBtrCountdownTimer(){
    console.log("chgBtrCountdownTimer started");
    var count = 50;
    var ogcount = count;
    for(var i = 0; i < 11; i++){
        setTimeout(function(){
                console.log(count);
                if(count == 0){//when we finish counting down
                    document.getElementById("countDis").innerHTML = "Blastoff!!!";
                }
                else if(count < 0.5 * ogcount){//less than 1/2 left
                    document.getElementById("countDis").innerHTML = "Warning less than % way to launch, time left = " + count + " seonds";
                }
                else{//at the beginning
                    document.getElementById("countDis").innerHTML = count + " seconds";
                }
                
                if(count == 0){
                    
                }
                count = count - 5;
        }, i * 5000)
    }
}
//plays sound
function playStation(){
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3")
    mySound.play();
}
//plays audio file of the sound "source"
function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile
    //loads programs for audio into memory
    this.sound.setAttribute("preload","audio");
    // makes sure there are no controls on the screen
    this.sound.setAttribute("controls","none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    //creates a function to play the sound
    this.play = function(){
        this.sound.play();
    }
    // creates a function to stop the sound from playing
    this.stop = function(){
        this.sound.pause();
    }
}
function playBowie(){
    console.log("playBowie() started");
    mySound = new sound("us-lab-background.mp3")
    mySound.play();
}
function startFun(){
    console.log("startFun() started");
    //disable start button
    document.getElementById("startbutton").disabled = true;
    //enable disabled stop button
    document.getElementById("stopbutton").disabled = false;
    //runs updateDisplay
    document.getElementById("dataTable").rows["seconds"].innerHTML = "reading data";
    index = 0;
    timer = setInterval(updateDataDisplay, timeInterval);
}
function stopFun(){
    console.log("stopFun() started");
    //disable stop button
    document.getElementById("stopbutton").disabled = true;
    //enable disabling of start button
    document.getElementById("startbutton").disabled = false;
    clearInterval(timer);
}