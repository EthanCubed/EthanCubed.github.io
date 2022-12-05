class Pin{

}

class Frame{
    strike = false;
    spare = false;
    split = false;
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
            new Pin(6, "pin6")];
    number;
    textName;
    scoreTextName;

    constructor(num, txtName, scrTxtName){
        this.number = num;
        this.textName = txtName;
        this.scoreTextName = scrTxtName;
    }

}

class Game{
    gameNumber;
    spareRate = 100;
    strikeRate = 100;
    score = 0;
    frames = [new Frame(1, "frame1", "frame1Score"),
                new Frame(2, "frame2", "frame2Score"),
                new Frame(3, "frame3", "frame3Score"),
                new Frame(4, "frame4", "frame4Score")];

    constructor(num){
        this.gameNumber = num;
    }

    calcSpareRate(){

    }

    calcStrikeRate(){

    }

    calcScore(){

    }
}

class Series{
    seriesDate;
    num;
    total = 0;
    average = 0;
    amtOfGames = 1;
    games = [];
    gameLinks = [];

    constructor(date, number){
        this.seriesDate = date;
        this.num = number;
    }

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
}
