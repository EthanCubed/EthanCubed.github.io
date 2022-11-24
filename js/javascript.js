const pinCheckArray = [true, true, true, true, true, true, true, true, true, true];
//true for up, false for down

currentFrame = 1;
currentShot = 1;

const onePin = {
    name: "onePin",
    value: true,
    number: 1,
    toggle: function() {
        this.value = !this.value;
    }
};

const twoPin = {
    name: "twoPin",
    value: true,
    number: 2,
    toggle: function() {
        this.value = !this.value;
    }
};

const threePin = {
    name: "threePin",
    value: true,
    number: 3,
    toggle: function() {
        this.value = !this.value;
    }
};

const fourPin = {
    name: "fourPin",
    value: true,
    number: 4,
    toggle: function() {
        this.value = !this.value;
    }
};

const fivePin = {
    name: "fivePin",
    value: true,
    number: 5,
    toggle: function() {
        this.value = !this.value;
    }
};

const sixPin = {
    name: "sixPin",
    value: true,
    number: 6,
    toggle: function() {
        this.value = !this.value;
    }
};

const sevenPin = {
    name: "sevenPin",
    value: true,
    number: 7,
    toggle: function() {
        this.value = !this.value;
    }
};

const eightPin = {
    name: "eightPin",
    value: true,
    number: 8,
    toggle: function() {
        this.value = !this.value;
    }
};

const ninePin = {
    name: "ninePin",
    value: true,
    number: 9,
    toggle: function() {
        this.value = !this.value;
    }
};

const tenPin = {
    name: "tenPin",
    value: true,
    number: 10,
    toggle: function() {
        this.value = !this.value;
    }
};

const firstFrame = {
    name: "F1",
    scoreName: "FS1",
    firstShotScore: 0,
    seocndShotScore: 0,
    score: calcScore(this, secondFrame, thirdFrame)
};

const secondFrame = {
    name: "F2",
    scoreName: "FS2",
    firstShotScore: 0,
    seocndShotScore: 0,
    score: calcScore(this, thirdFrame, fourthFrame)
};

const thirdFrame = {
    name: "F3",
    scoreName: "FS3",
    firstShotScore: 0,
    seocndShotScore: 0,
    score: calcScore(this, fourthFrame, fifthFrame)
};

const fourthFrame = {
    name: "F4",
    scoreName: "FS4",
    firstShotScore: 0,
    seocndShotScore: 0,
    score: calcScore(this, fifthFrame, sixthFrame)
};

const fifthFrame = {
    name: "F5",
    scoreName: "FS5",
    firstShotScore: 0,
    seocndShotScore: 0,
    score: calcScore(this, sixthFrame, seventhFrame)
};

const sixthFrame = {
    name: "F6",
    scoreName: "FS6",
    firstShotScore: 0,
    seocndShotScore: 0,
    score: calcScore(this, seventhFrame, eighthFrame)
};

const seventhFrame = {
    name: "F7",
    scoreName: "FS7",
    firstShotScore: 0,
    seocndShotScore: 0,
    score: calcScore(this, eighthFrame, ninthFrame)
};

const eighthFrame = {
    name: "F8",
    scoreName: "FS8",
    firstShotScore: 0,
    seocndShotScore: 0,
    score: calcScore(this, ninthFrame, tenthFrame)
};

const ninthFrame = {
    name: "F9",
    scoreName: "FS9",
    firstShotScore: 0,
    seocndShotScore: 0,
    score: calcScore(this, tenthFrame, sixthFrame)
};

const tenthFrame = {
    name: "F10",
    scoreName: "FS10",
    firstShotScore: 0,
    seocndShotScore: 0,
    thirdShotScore: 0,
    score: function() {
        this.firstShotScore + 
        this.seocndShotScore +
        this.thirdShotScore;
    },
    thirdShotAvailable: function(){
        if((this.firstShotScore + this.seocndShotScore) >= 10){
            return true;
        }
    }
};

function calcScore(x, y, z){
    score = 0;
    if(x.firstShotScore == 10){
        score += (x.firstShotScore + y.firstShotScore);

        if(y.firstShotScore == 10){
            score += z.firstShotScore;
        }else{
            score += y.seocndShotScore;
        }
    }
    return score;
}

const pins = [onePin, twoPin, threePin, fourPin, fivePin, sixPin, sevenPin, eightPin, ninePin, tenPin];

const frmes = [firstFrame, secondFrame, thirdFrame, fourthFrame, fifthFrame, sixthFrame, seventhFrame, eighthFrame, ninthFrame, tenthFrame]

function onMouseOverPin(number){
    x = document.getElementById(pins[number - 1].name.valueOf());

    backgroundColor = x.style.backgroundColor;
    
    if(pins[number - 1].value.valueOf()){
        x.style.color = "white";
        x.style.backgroundColor = "darkgrey";
    }else{
        x.style.backgroundColor = "white";
        x.style.color = "black";
    }
}

function onMouseOutPin(name, number){
    x = document.getElementById(name);

    backgroundColor = x.style.backgroundColor;

    if(pins[number - 1].value.valueOf()){
        x.style.color = "black";
        x.style.backgroundColor = "white";
    }else{
        x.style.color = "white";
        x.style.backgroundColor = "darkgrey";
    }
}

function pinClick(name, number){
    x = document.getElementById(pins[number - 1].name.valueOf());

    if(pins[number - 1].value.valueOf()){
        x.style.color = "white";
        x.style.backgroundColor = "darkgrey";
    }else{
        x.style.color = "black";
        x.style.backgroundColor = "white";
    }

    pins[number - 1].toggle();  
    
    updateScore();
    
}

function getCount(){
    count = 0;

    for(i = 0; i < pins.length; i++){
        if(!pins[i].value.valueOf()){
            count++;
        }
    }
    return count;
}

function strikeSpare(){

    for(i = 0; i < pins.length; i++){
        pins[i].value = false;

        document.getElementById(pins[i].name.valueOf()).style.color = "white";
        document.getElementById(pins[i].name.valueOf()).style.backgroundColor = "darkgrey";
    }

    updateScore();
}

function updateScore(){
    score = 0
    for(i = 0; i < pins.length; i++){
        if(!pins[i].value.valueOf()){
            score++;
        }
    }

    if(score == 10){
        score = 'X';
    }else if(score == 0){
        score = '-';
    }

    document.getElementById("F1").innerHTML = score.valueOf();
}

function progressNext(){
    document.getElementById("F10").innerHTML = getCount();
    if(currentShot == 1){

    }
}