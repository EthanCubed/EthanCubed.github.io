const FrameStates = {
    Strike: 2,
    Spare: 1,
    Open: 0
}

class Pin{
    number;
    value;

    constructor(num, val){
        this.number = num;
        this.value = val;
    }
}

class Frame{
    number;
    value;
    firstShotScore;
    firstShotPins = Pin[10];
    secondShotScore;
    secondShotPins = Pin[10];

    constructor(num, firstPins, secondPins){
        this.number = num;
        this.firstShotPins = firstPins;
        this.secondShotPins = secondPins;
    }

    calculateFrameScore(){
        
    }
}