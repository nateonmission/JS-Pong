
// Build the Board
const body = document.querySelector("body");

const player1score = document.createElement("div");
player1score.setAttribute("id","player1score");
player1score.setAttribute("class","playerScore");

const player2score = document.createElement("div");
player2score.setAttribute("id", "player2score");
player2score.setAttribute("class","playerScore");

const scoreboard = document.createElement("div");
scoreboard.setAttribute("id","scoreboard")



const player1paddle = document.createElement("div");
player1paddle.setAttribute("id","player1paddle");
player1paddle.setAttribute("class","playerPaddle");

const player2paddle = document.createElement("div");
player2paddle.setAttribute("id","player2paddle");
player2paddle.setAttribute("class","playerPaddle");

const ballDiv = document.createElement("div");
ballDiv.setAttribute("id","ball");

body.append(scoreboard)
scoreboard.append(player1score);
scoreboard.append(player2score);
body.append(player1paddle);
body.append(player2paddle);
body.append(ballDiv);

// Define the classes
class Player {
    constructor(number, paddle, isComputer) {
        this.number = number;
        this.paddle = paddle;
        this.isComputer = isComputer;
        this.pointCounter = 0;
        this.gamesWon = 0;
    }

    score() {
        this.pointCounter ++;
    }

    getScore() {
        return this.pointCounter;
    }
}

class Ball {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.speed = 0.01;

    }

    
}

class Paddle {
    constructor(paddleDiv) {
        this.paddle = paddleDiv;
    }

}



// Instantiate the things
const ball = new Ball();
const paddle1 = new Paddle(player1paddle);
const paddle2 = new Paddle(player2paddle);
const player1 = new Player(1, paddle1, false);
const player2 = new Player(1, paddle2, false);

player1.pointCounter = 15;
player2.pointCounter = 23;


// Define game functions
const updateScore = () => {
    player1score.innerHTML = `${player1.pointCounter} Points<br>${player1.gamesWon} Games Won`;
    player2score.innerHTML = `${player2.pointCounter} Points<br>${player2.gamesWon} Games Won`;
}


// Game variables
var today = new Date();
let lastTime = null;
let timeDelta = 0;

let playOn = true;


// Game Loop

// while(playOn) {
//     if (lastTime === null){
//         lastTime = today;
//     } else {
//         timeDelta = today - lastTime;
//         console.log(timeDelta);
//     }

// }
 
updateScore();


