var quizQnA = [
    ["What is his off-stage name?","Nicolas Kim Coppola","Nicolas Cageson","Nicolas Coppa","Nicolas Harry Cage"],
    ["In which year was he born","1964","1965","1966","1967"],
    ["In  which year did he start acting?","1981","1980","1983","1984"]
];

var QuizButtonIDs = ["quizOne", "quizTwo", "quizThree", "quizFour"];

var quizPreviousQnA = [];
var quizScore = 0;
var quizAttemptCount = 0;
var quizQnAClone;
var quizCorrectButton = "";
var quizButtonIDsClone;
var quizCorrectAnswser = "";
var quizLastCorrect = "";

function shuffle(arr){
    newArr = [];
    arrayLength = arr.length;
    for(let i = 0; i < arrayLength; i++){
        newArr[i] = arr.splice([Math.ceil(Math.random() * arr.length - 1)], 1);
    }
    return newArr;
}

function dublicate(arr){
    var newArr = [];
    arrLength = arr.length;
    for (let i = 0; i < arrLength; i++){
        newArr.push(arr[i]);
    }
    return newArr;
}


function quizUpdateTextBoxValues(){
    if(quizAttemptCount != 0){
        document.getElementById("quizlastCorrect").innerHTML = "Last correct : " + quizLastCorrect; // update lastcoorect text box
    }
    quizLastCorrect = quizCorrectAnswser;

    document.getElementById("quizAttemptDisplay").innerHTML = "attempt : " + ++quizAttemptCount; 
    document.getElementById("quizScore").innerHTML = "Score : " + quizScore;
    
    if  (document.getElementById("quizStart").value === "Start"){ // change button value
        document.getElementById("quizStart").value="Next image";
    }
}

function quizUpdateButtons(){
    quizButtonIDsClone = dublicate(QuizButtonIDs);
    quizCorrectButton = Math.ceil(Math.random() * QuizButtonIDs.length - 1); // assigns random button
    document.getElementById(quizButtonIDsClone.splice(quizCorrectButton ,1)).value = quizCorrectAnswser; // sets value of correct button and removes it from the array
    quizQnAClone = shuffle(quizQnAClone); //shuffle QnA
    quizButtonIDsClone = shuffle(quizButtonIDsClone); //shuffle Buttoons
    do{
        document.getElementById(quizButtonIDsClone.shift()).value = quizQnAClone.shift();
    }while (quizButtonIDsClone.length > 0)
}

function quizGetQnA(){
    do{
        quizQnAClone = dublicate(quizQnA[Math.ceil(Math.random() * quizQnA.length - 1)]); //get new question
    }while (quizQnAClone[0] === quizPreviousQnA[0])// insures it doent show same question twice in a row
    quizPreviousQnA = dublicate(quizQnAClone); // update previous QnA
    document.getElementById("quizQuestion").innerHTML = quizQnAClone.shift();
    quizCorrectAnswser = quizQnAClone.shift();
}

function quizMain() {
    quizGetQnA();
    quizUpdateButtons();
    quizUpdateTextBoxValues();

}

function quizButtonQuessCheck(quizInputNum){
    quizCorrectButton === quizInputNum? quizScore++ : quizScore--;
    quizMain();
}