var posterImgDir = ["Images/One.jpg","Images/Two.jpg","Images/Three.jpg","Images/Four.jpg"] // list of img directories 
var posterCorrentSrc = "";
var posterNewSrc = "";
var posterCorrectButton = "";
var posterFalseButtonTxt1 = "";
var posterFalseButtonTxt2 = "";
var posterScore = 0;
var posterAttemptCount = 0;

var posterMovieNames = {
    "Images/One.jpg" : "Leaving Las Vegas",
    "Images/Two.jpg" : "Face Off",
    "Images/Three.jpg" : "The Rock",
    "Images/Four.jpg" : "Lord Of War"
}

var buttonIDs = ["posterOne","posterTwo","posterThree"];


function posterMain() {
    posterUpdateImage();
    posterUpdateTextBoxValues();
    posterUpdateButtons();

}

function posterButtonQuessCheck(inputNum){
    posterCorrectButton === inputNum? posterScore++ : posterScore--;
    document.getElementById("posterLastCorrect").innerHTML = "Last correct : " + posterMovieNames[posterNewSrc]; // update lastcoorect text box
    posterMain();

}


function posterUpdateImage(){
    posterCorrentSrc = document.getElementById('posterImage').src;  //get corrent src

    var posterImage = document.getElementById('posterImage');
    
    posterNewSrc = posterImgDir[Math.ceil(Math.random() * posterImgDir.length - 1)];  // gets new src
    while(posterNewSrc === posterCorrentSrc.substring(posterCorrentSrc.length - posterNewSrc.length, posterCorrentSrc.length)){ // insures it doesnt show same image
        posterNewSrc = posterImgDir[Math.ceil(Math.random() * posterImgDir.length - 1)];  // gets new src if nececery
    }

    posterImage.src = posterNewSrc; // sets new image
}


function posterUpdateButtons(){
    posterCorrectButton = Math.ceil(Math.random() * 3); // assigns random button
    document.getElementById(buttonIDs.splice(posterCorrectButton - 1 ,1)).value = posterMovieNames[posterNewSrc]; // sets value of correct button and removes it from the array

    posterFalseButtonTxt1 = posterMovieNames[posterImgDir[Math.ceil(Math.random() * (posterImgDir.length - 1)) - 1]]; // sets false txt to be random txt from movie titles
    while (posterFalseButtonTxt1 === posterMovieNames[posterNewSrc]){ // insures button txt is different to the correct button txt
        posterFalseButtonTxt1 = posterMovieNames[posterImgDir[Math.ceil(Math.random() * (posterImgDir.length - 1)) - 1]];
    }

    posterFalseButtonTxt2 = posterMovieNames[posterImgDir[Math.ceil(Math.random() * (posterImgDir.length - 1)) - 1]];// sets false txt to be random txt from movie titles
    while (posterFalseButtonTxt2 === posterMovieNames[posterNewSrc] || posterFalseButtonTxt2 === posterFalseButtonTxt1){ //insures button txt is different to the correct button txt and previuse button
        posterFalseButtonTxt2 = posterMovieNames[posterImgDir[Math.ceil(Math.random() * (posterImgDir.length - 1)) - 1]];
    }
    document.getElementById(buttonIDs[1]).value = posterFalseButtonTxt1;
    document.getElementById(buttonIDs[0]).value = posterFalseButtonTxt2;
    buttonIDs = ["One","Two","Three"];
}

function posterUpdateTextBoxValues(){
    
    document.getElementById("posterAttemptDisplay").innerHTML = "attempt : " + ++posterAttemptCount; 
    
    document.getElementById("posterScore").innerHTML = "Score : " + posterScore;
    
    if  (document.getElementById("posterStart").value === "Start"){ // change button value
        document.getElementById("posterStart").value="Next image";
    }
}