let resolution = 20;
let food;
let snakeLen = 0;

class Snake {
    constructor() {
        this.snakeBox = [];
        this.snakeBox[0] = createVector(0, 0);
        
        this.xdir = 1;
        this.ydir = 0;
    }

    setDir(x, y) {
        this.xdir = x;
        this.ydir = y;
    }

    update() {
        let head = this.snakeBox[this.snakeBox.length - 1].copy();
        this.snakeBox.shift();
        head.x += this.xdir;
        head.y += this.ydir;
        this.snakeBox.push(head);

        // this.snakeBox[0].x += this.xdir;
        // this.snakeBox[0].y += this.ydir;

    }

    grow(pos) {
        snakeLen++;
        this.snakeBox.push(pos);
    }

    show() {
        for (let i = 0; i < this.snakeBox.length; i++) {
            fill(0, 255, 0);
            noStroke();
            rect(this.snakeBox[i].x, this.snakeBox[i].y, 1, 1);
        }

    }

    foodLocation() {
        let x = floor(random(w));
        let y = floor(random(h));
        food = createVector(x, y);
    }


    eat(pos) {
        let x = this.snakeBox[this.snakeBox.length - 1].x;
        let y = this.snakeBox[this.snakeBox.length - 1].y;

        if (x === pos.x && y === pos.y) {
            this.grow(pos);
            return true;
        }
        return false;
    }

    endGame() {
        let x = this.snakeBox[this.snakeBox.length - 1].x;
        let y = this.snakeBox[this.snakeBox.length - 1].y;

        if (x > w - 1 || x < 0 || y > h - 1 || h < 0) {
            return true;
        }

        for (let i = 0; i < this.snakeBox.length - 1; i++) {
            let snakeBody = this.snakeBox[i];
            if (snakeBody.x == x && snakeBody.y == y) {
                return true;
            }

        }
    }

}