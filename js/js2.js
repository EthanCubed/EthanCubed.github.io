class Pin{

}

class Frame{
    strike = false;
    spare = false;
    split = false;
    firstShotScore = 0;
    secondShotScore = 0;
    firstText = "-";
    secondText = "-";
    firstShotPins = [];
    secondShotPins = [];
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
    frames = [];

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
    type;
    total = 0;
    average = 0;
    amtOfGames = 1;
    games = [];
    gameLinks = [];

    constructor(date, type){
        this.seriesDate = date;
        this.type = type;
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
