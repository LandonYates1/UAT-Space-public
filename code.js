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
    console.log("playCraps() started");
    var die1 = 0;
    var die2 = 0;
    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());
    console.log(die1);
    console.log(die2);
    document.getElementById("Die1").innerHTML = "The result for die1 is: " + die1;
    document.getElementById("Die2").innerHTML = "The result for die2 is: " + die2;
    //check if craps (7 or 11)
    var sum = die1 + die2;
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