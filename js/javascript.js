startingPinPosition = true;

class Pin{
    name;
    value = true;
    number;

    constructor(pinName, pinNumber){
        this.name = pinName;
        this.number = pinNumber;
    }


    getElement(){
        return document.getElementById(this.name);
    }

    changeColors(on){
        //true for on, false for off

        if(this.value){
            if(on){
                this.getElement().style.backgroundColor = "darkgrey";
                this.getElement().style.color = "white";
            }else{
                this.getElement().style.backgroundColor = "white";
                this.getElement().style.color = "black";
            }
        }else{
            if(!on){
                this.getElement().style.backgroundColor = "darkgrey";
                this.getElement().style.color = "white";
            }else{
                this.getElement().style.backgroundColor = "white";
                this.getElement().style.color = "black";
            }
        }
    }

    knockDown(){
        this.value = false;
        this.changeColors(false);
    }

    putUp(){
        this.value = true;
        this.changeColors(false);
    }

    toggle() {
        if(this.value){
            this.knockDown();
        }else{
            this.putUp();
        }
    }
}

class Frame{
    frameName;
    totalScoreName;
    firstShotScore = 0;
    secondShotScore = 0;
    thirdShotScore = 0;
    frameElem;
    scoreElem;
    spared = false;
    split = false;

    constructor(frameName, totalScoreName){
        this.frameName = frameName;
        this.totalScoreName = totalScoreName;

        this.frameElem = document.getElementById(frameName);
        this.scoreElem = document.getElementById(totalScoreName);
    }

    setFirstScore(score){
        this.firstShotScore = score;
        this.setFrameScore();
    }

    setSecondScore(score){
        this.secondShotScore = (score - this.firstShotScore);
        this.setFrameScore();
    }

    setThirdScore(score){
        if((this.firstShotScore + this.secondShotScore) == 10){
            this.thirdShotScore = score;
        }else if(this.firstShotScore == 10){
            this.thirdShotScore = (score - this.secondShotScore);
        }
        this.setFrameScore();
    }

    calcScore(f2, f3){
        score = (this.firstShotScore + this.secondShotScore);

        if(score == 10){
            //Spare
            score += f2.firstShotScore;

            if(this.firstShotScore == 10){
                //Strike
                if(f2.firstShotScore == 10){
                    //Double Strike
                    score += f3.firstShotScore;
                }else{
                    score += f2.secondShotScore;
                }
            }
        }

        return score;
    }

    
    setFrameScore(){

        //Check Spare
        if(this.firstShotScore + this.secondShotScore == 10 && this.firstShotScore != 10){
            this.spared = true;
        }

        if(this.firstShotScore == 10){
            this.frameElem.innerHTML = "X";
        }else if(this.spared){
            this.frameElem.innerHTML = (this.firstShotScore + "/");
        }else{
            if(this.firstShotScore == 0){
                this.frameElem.innerHTML = "-";
            }else{
                this.frameElem.innerHTML = this.firstShotScore;
            }
            if(this.secondShotScore == 0){
                this.frameElem.innerHTML += " -";
            }else{
                this.frameElem.innerHTML += " " + this.secondShotScore;
            }
        }
    }

}

class Game{

}

class Series{

}

currentFrame = 1;
currentShot = 1;

//Pin Array Start

let pinArray = [];

for(i = 0; i < 10; i++){
    namePin = "pin" + (i + 1);
    pinArray[i] = new Pin(namePin, (i + 1));
}

for(i = 0; i < pinArray.length; i++){
    console.log(pinArray[i]);
}

//Pin Array End

//Frame Array Start

let frameArray = [];

for(i = 0; i < 10; i++){

    nameFrame = "F" + (i + 1);
    scoreName = "FS" + (i + 1);
    frameArray[i] = new Frame(nameFrame, scoreName);
}

for(i = 0; i < frameArray.length; i++){
    console.log(frameArray[i]);
}

//Frame Array End
function onMouseOverPin(x){

    currPin = pinArray[x - 1];
    
    currPin.changeColors(true);
}

function onMouseOutPin(x){
    currPin = pinArray[x-1];
    element = currPin.getElement();

    currPin.changeColors(false);

}

function pinClick(x){
    currPin = pinArray[x-1];
    
    currPin.toggle();

    updateScore();
    
}

function getCount(){
    count = 0;
    return count;
}

function strikeSpare(){

    for(i = 0; i < pinArray.length; i++){
        pinArray[i].knockDown();
    }
    updateScore();
}
function updateScore(){
    score = 0

    for(i = 0; i < pinArray.length; i++){
        if(!pinArray[i].value){
            score++;
        }
    }

    if(currentShot == 1){
        frameArray[currentFrame - 1].setFirstScore(score);
        console.log(score);
    }else if(currentShot == 2){
        frameArray[currentFrame - 1].setSecondScore(score);
    }else if(currentShot == 3){
        frameArray[currentFrame - 1].setThirdScore(score);
    }
}

function getCurrentScore(){
    score = 0;
    for(i = 0; i < pinArray.length; i++){
        if(!pinArray[i].value){
            score++;
        }
    }

    return score;
}

function progressNext(){
    if(currentShot == 1){
        frameArray[currentFrame - 1].firstShotScore = getCurrentScore();

        if(getCurrentScore() == 10){
            currentFrame++;
            for(i = 0; i < pinArray.length; i++){
                pinArray[i].putUp();
            }
        }else{
            currentShot++;
        }
    }else if(currentShot == 2){

        frameArray[currentFrame - 1].secondShotScore = 
            (getCurrentScore() - frameArray[currentFrame - 1].firshotScore);

        currentShot = 1;
        currentFrame++;
        for(i = 0; i < pinArray.length; i++){
            pinArray[i].putUp();
        }
    }

    console.log("score: " + getCurrentScore());
    console.log("shot: " + currentShot);
    console.log("frame: " + currentFrame);
}

function goBack(){
    if(currentShot == 1){
        if(currentFrame != 1){
            currentFrame--;
        }
    }else if(currentShot == 2){
        currentShot = 1;
    }

    console.log("score: " + getCurrentScore());
    console.log("shot: " + currentShot);
    console.log("frame: " + currentFrame);
}

function togglePinPos(name){
    startingPinPosition = !startingPinPosition;

    x = document.getElementById("pinPositionBTN")
    if(!startingPinPosition){
        x.innerHTML = "Down";
    }else{
        x.innerHTML = "Up";
    }
}