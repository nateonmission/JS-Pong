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

const randomInt = (min, max) => { // inclusive 
    return Math.random() * (max - min) + min
}

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
    constructor(ballDiv) {
        this.ballDiv = ballDiv
        this.initVelocity =  0.025;
        this.acceleration = 0.00001;
        
        this.reset()
    }   

    get x() {
        return parseFloat(getComputedStyle(this.ballDiv).getPropertyValue("--x"));
    }

    get y() {
        return parseFloat(getComputedStyle(this.ballDiv).getPropertyValue("--y"));
    }

    set x(newValue) {
        this.ballDiv.style.setProperty("--x",newValue)
    }

    set y(newValue) {
        this.ballDiv.style.setProperty("--y",newValue)
    }

    getRect() {
        return ballDiv.getBoundingClientRect();

    }



    move (timeDelta) {
        this.x += timeDelta * this.direction.x * this.velocity ;
        this.y += timeDelta * this.direction.y * this.velocity ;
        let winInH = window.innerHeight;
        let winInW = window.innerWidth;
        console.log(`${winInH} x ${winInW}`)
        console.log(`${this.x/100 * winInW} , ${this.y/100 * winInH}`)


        // location = this.getRect();
        
        if(((this.y/100 * winInH)+6) >= window.innerHeight || ((this.y/100 * winInH)-6) <= 0){
            this.direction.y *= -1;
        }

        if(((this.x/100 * winInW)+6) >= window.innerWidth || ((this.x/100 * winInW)-6) <= 0){
            this.direction.x *= -1;
        }
    }

    reset() {
        this.x = 50;
        this.y = 50;
        this.direction = { x: 0 };
        while(
            Math.abs(this.direction.x) <= 0.1 || 
            Math.abs(this.direction.x) >= 0.9) {
            const heading = randomInt(0, 2 * Math.PI);
            this.direction = { x: Math.cos(heading), y: Math.sin(heading) };
        }
        this.velocity = this.initVelocity;
    }
}

class Paddle {
    constructor(paddleDiv) {
        this.paddle = paddleDiv;
    }
}

// Instantiate the things
const ball = new Ball(ballDiv);
const paddle1 = new Paddle(player1paddle);
const paddle2 = new Paddle(player2paddle);
const player1 = new Player(1, paddle1, false);
const player2 = new Player(1, paddle2, false);

player1.pointCounter = 15;
player2.pointCounter = 23;

const updateScore = () => {
    player1score.innerHTML = `${player1.pointCounter} Points<br>${player1.gamesWon} Games Won`;
    player2score.innerHTML = `${player2.pointCounter} Points<br>${player2.gamesWon} Games Won`;
}

// Game variables
body.addEventListener("keydown", e => {
    if(e.keyCode == "88"){
        playOn = false;
    }
}, false);

let lastTime = null;
let timeDelta = 0;
let playOn = true;

// Game Loop
updateScore();

let timeTracker;
const update = (time) => {
    if(playOn){
        if(timeTracker != null){
            const timeDelta = time - timeTracker;
            timeTracker = time;
            ball.move(timeDelta);
            //console.log(ball.direction)
            window.requestAnimationFrame(update);
        } else {
            timeTracker = time;
            window.requestAnimationFrame(update);
        }
    }
}

if(playOn){
    window.requestAnimationFrame(update);
}

console.log("End of File");
