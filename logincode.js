function checkCreds(){
    //collect the data
    var fstName = document.getElementById("fName").value;
    var lstName = document.getElementById("lName").value;
    var badgeNum = document.getElementById("badgeID").value;
    //work with the data
    var fullName = fstName + " " + lstName;
    console.log("the full name is: " + fullName);
    console.log("the badge number is: " + badgeNum);
    var fullLength = fullName.length;
    console.log("the name length is: " + fullLength);
    //check the inputs
    if(fullLength > 20 || fullLength < 2){
        document.getElementById("loginStatus").innerHTML = "Invalid name entry, please try again.";
    }
    else if(badgeNum > 999 || badgeNum < 1){
        document.getElementById("loginStatus").innerHTML = "Invalid badge number, please try again.";
    }
    else{
        alert("Access granted, welcome " + fullName)
        location.replace("./UatSPace.html")
    }
}