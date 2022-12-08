var seriesArray = [];
var currentSeries;
var currentGame;


class Pin{
    number;
    name;
    value = true;
    element;

    constructor(num, nam){
        this.number = num;
        this.name = nam; 
        this.element = document.getElementById(nam);
    }

    changeColors(val){
        if(val == "up"){
            this.element.style.backgroundColor = "white";
            this.element.style.color = "black";
        }else if(val == "down"){
            this.element.style.backgroundColor = "darkgrey";
            this.element.style.color = "white";
        }
    }

    toggle(){
        //Triggered when pin clicked

        this.value = !this.value;
        if(value){//If pin is now standing
            this.changeColors(up);
        }else{
            this.changeColors(down);
        }
    }

    setDown(){
        this.value = false;
    }

    setUp(){
        this.value = true;
    }
}

class Frm{
    strike = false;
    spare = false;
    open = true;
    firstShotScore = 0;
    secondShotScore = 0;
    totalScore = 0;
    firstText = "-";
    secondText = "-";
    firstShotPins = [];
    secondShotPins = [];
    pins = [new Pin(1, "pin1"),
            new Pin(2, "pin2"),
            new Pin(3, "pin3"),
            new Pin(4, "pin4"),
            new Pin(5, "pin5"),
            new Pin(6, "pin6"),
            new Pin(7, "pin7"),
            new Pin(8, "pin8"),
            new Pin(9, "pin9"),
            new Pin(10, "pin10")];
    number;
    textName;
    scoreTextName;

    constructor(num, txtName, scrTxtName){
        this.number = num;
        this.textName = txtName;
        this.scoreTextName = scrTxtName;
    }

    checkValues(){
        //Check strike or spare or open
        if(this.firstShotScore == 10){
            this.strike = true;
        }else{
            this.strike = false;
        }
    }

    togglePin(num){
        pins[num - 1].toggle();
    }

}

class Game{
    gameNumber;
    spareRate = 100;
    strikeRate = 100;
    score = 0;
    frs = [];
    div = document.createElement('a');
    

    calcSpareRate(){

    }

    calcStrikeRate(){

    }

    calcScore(){

    }

    createElem(){
        this.textPart1 = "Game " + this.gameNumber + " -- ";
        this.textPart2 = " Score: " + this.score;

        var elemText = this.textPart1 + this.textPart2 + "\n";

        this.div.innerText = elemText;

        document.getElementById("gameDiv").append(this.div);
    }

    constructor(num){
        this.gameNumber = num;

        for(let i = 1; i < 11; i++){
            let frameString = "frame" + toString(i);
            let frameScoreString = "frame" + toString(i) + "Score";
            this.frs[i - 1] = new Frm(i, frameString, frameScoreString);
        }

        console.log(this.frs);

        this.div.href = "game.html";
        this.createElem();
    }
}

class Series{
    seriesDate;
    num;
    total = 0;
    average = 0;
    amtOfGames = 0;
    games = [];
    gameLinks = [];
    div = document.createElement('a');
    textPart1;
    textPart2;
    
    

    addGame(){
        this.games.push(new Game(amtOfgames));
        gameLinks[amtOfgames - 1] = document.createAttribute('a');
        this.gameLinks[amtOfGames - 1].setAttribute('class', 'game')
        amtOfGames++;
    }

    calcTotal(){
        this.total = 0;

        for(i = 0; i < this.gameScores.length; i++){
            this.total += this.gameScores[i].score;
        }
    }

    calcAverage(){
        this.average = (this.total / this.amtOfGames);
    }

    createElem(){
        this.textPart1 = "Series " + this.num + " - " + this.seriesDate;
        this.textPart2 = "Games: " + this.amtOfGames + " | " + 
                "Total: " + this.total + " | " + "Average: " + this.average;

        var elemText = this.textPart1 + "\n" + this.textPart2 + "\n";

        this.div.innerText = elemText;

        document.getElementById("seriesDiv").append(this.div);
    }

    constructor(date, number){
        this.seriesDate = date;
        this.num = number;
        this.createElem();
        this.div.href = "addGame.html";
        sessionStorage.setItem('gmSerNm', number);

        this.div.onclick = function () {
            sessionStorage.setItem('gmSerNm', number)
            console.log(sessionStorage.getItem('gmSerNm'));
        }
    }

    createSer(currSeries){
        total = currSeries.total;
        average = currSeries.average;
        amtOfGames = currSeries.amtOfGames;
        games = currSeries.games;
        gameLinks = currSeries.gameLinks;
        textPart1 = currSeries.textPart1;
        textPart2 = currSeries.textPart2;
    }
}

function createSeries(){
    
    if(sessionStorage.getItem('seriesNum') > 0){
        sessionStorage.setItem('seriesNum', parseInt(sessionStorage.getItem('seriesNum'))+1);
    }else{
        sessionStorage.setItem('seriesNum', 1);
    }

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = String(today.getFullYear());

    console.log(mm + "/" + dd + "/" + yyyy);

    var date = mm + "/" + dd + "/" + yyyy;

    console.log(sessionStorage.getItem('seriesNumber'));
    console.log(sessionStorage);

    sessionStorage.setItem('series' + sessionStorage.getItem('seriesNum'), JSON.stringify(new Series(date, parseInt(sessionStorage.getItem('seriesNum')))))
    //this.seriesArray[parseInt(sessionStorage.getItem('seriesNum')) - 1] = new Series(date, parseInt(sessionStorage.getItem('seriesNum')));
    //console.log(new Series(date, 1));
    sessionStorage.setItem('seriesArr', JSON.stringify(seriesArray));

    console.log(JSON.parse(sessionStorage.getItem('series' + sessionStorage.getItem('seriesNum'))));
}

function createGame(){

    console.log(sessionStorage.getItem('gmSerNm'));
    console.log('series' + sessionStorage.getItem('gmSerNm'));
    console.log(sessionStorage.getItem('series' + sessionStorage.getItem('gmSerNm')));

    console.log(JSON.parse(sessionStorage.getItem('series' + sessionStorage.getItem('gmSerNm'))));

    currSer = JSON.parse(sessionStorage.getItem('series' + sessionStorage.getItem('gmSerNm')));
    console.log(currSer.amtOfGames);
    currSer.amtOfGames++;
    console.log(currSer.amtOfGames);
    currSer.games[currSer.amtOfGames - 1] = new Game(currSer.amtOfGames);

    sessionStorage.setItem('series' + sessionStorage.getItem('gmSerNm'), JSON.stringify(currSer));
    console.log(sessionStorage.getItem('series' + sessionStorage.getItem('gmSerNm')));
}

function setPins(){

}

function accessSeries(){

}

function accessGame(){

}

function clearss(){
    sessionStorage.clear();
    sessionStorage.removeItem('seriesArr');
    sessionStorage.removeItem('seriesNum');
    console.log("cleared");
}

function loadingSerieis(){
    var currSeries;
    for(i = 1; i <= sessionStorage.getItem('seriesNum'); i++){
        currSeries = JSON.parse(sessionStorage.getItem('series' + i));
        console.log(currSeries);
        new Series(currSeries.seriesDate, currSeries.num);
    }
}

function loadGames(){
    
    console.log(sessionStorage.getItem('gmSerNm'));
    console.log(JSON.parse(sessionStorage.getItem('series' + sessionStorage.getItem('gmSerNm'))));

    var x = JSON.parse(sessionStorage.getItem('series' + sessionStorage.getItem('gmSerNm')));
    console.log(x);
    for(i = 0; i < x.games.length; i++){
        new Game(x.games[i].gameNumber);
    }
}

function togglePinPos(name){
    
    x = document.getElementById("pinPositionBTN")
    if(x.innerText == "Up"){
        x.innerText = "Down";
    }else{
        x.innerText = "Up";
    }
}