function arrayTest1(){
    var myClasses = ["CSC 102", "CSC 100", "SPT 100"]
    console.log(myClasses[1]);
    myClasses[1] = "CSC 100";
    console.log(myClasses[1]);
    for(var i = 0; i < 4; i++){
        console.log([i]);
    }
}