
export default class Player {
    constructor(number, paddle, isComputer) {
        this.number = number;
        this.paddle = paddle;
        this.isComputer = isComputer;
        this.pointCounter = 0;
    }

    score() {
        this.pointCounter ++;
    }

    getScore() {
        return this.pointCounter;
    }
}