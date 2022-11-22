const pinCheckArray = [true, true, true, true, true, true, true, true, true, true];
//true for up, false for down

const pins = 
    [["onePin", true],
    ["twoPin", true],
    ["threePin", true],
    ["fourPin", true],
    ["fivePin", true],
    ["sixPin", true],
    ["sevenPin", true],
    ["eightPin", true],
    ["ninePin", true],
    ["tenPin", true]
    ];



function onMouseOverPin(number){
    x = document.getElementById(pins[number-1][0]);

    backgroundColor = x.style.backgroundColor;
    
    if(pinCheckArray[number - 1].valueOf()){
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

    if(pinCheckArray[number - 1].valueOf()){
        x.style.color = "black";
        x.style.backgroundColor = "white";
    }else{
        x.style.color = "white";
        x.style.backgroundColor = "darkgrey";
    }
}

function pinClick(name, number){
    x = document.getElementById(name);

    if(pinCheckArray[number - 1].valueOf()){
        x.style.color = "white";
        x.style.backgroundColor = "darkgrey";
    }else{
        x.style.color = "black";
        x.style.backgroundColor = "white";
    }

    pinCheckArray[number - 1] = !pinCheckArray[number - 1];
    
    updateScore(0);
    
}

function updateScore(){
    score = 0
    for(i = 0; i < pinCheckArray.length; i++){
        if(!pinCheckArray[i].valueOf()){
            score++;
        }
    }

    if(score == 10){
        score = 'X';
    }

    document.getElementById("F1_S1").innerHTML = score.valueOf();
}

function progressNext(){

}