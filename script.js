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

const ball = document.createElement("div");
ball.setAttribute("id","ball");

body.append(scoreboard)
scoreboard.append(player1score);
scoreboard.append(player2score);
body.append(player1paddle);
body.append(player2paddle);
body.append(ball);



let player1scoreValue = 15;
let player2scoreValue = 23;

const updateScore = () => {
    player1score.innerText = player1scoreValue;
    player2score.innerText = player2scoreValue;
}



let playOn = true;
var counter = 0;
while(playOn){

 
    updateScore();
}

