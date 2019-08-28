let resolution = 20;
let food;

class Snake{
    constructor(){
        this.snakeBox = []; 
        this.snakeBox[0] = createVector(0, 0);
        this.snakeLen = 0;
        this.xdir = 1;
        this.ydir = 0;
    }

    setDir(x,y){
        this.xdir = x;
        this.ydir = y;
    }

    update()
    {
        let head = this.snakeBox[this.snakeBox.length-1].copy();
        console.log(this.snakeBox.length);
        this.snakeBox.shift();
        head.x += this.xdir;
        head.y += this.ydir;
        this.snakeBox.push(head);
        // this.snakeBox[0].x += this.xdir;
        // this.snakeBox[0].y += this.ydir;
    }

    grow(){
        let head = this.snakeBox[this.snakeBox.length-1].copy();
        this.snakeLen++;
        this.snakeBox.push(head);
    }

    show(){
        for(let i = 0; i<this.snakeBox.length ; i++){

        
        fill(255);
        noStroke(); 
        rect(this.snakeBox[i].x,this.snakeBox[i].y,1,1);

        }
        
    }

    foodLocation(){
        let x = floor(random(w));
        let y = floor(random(h));
        food = createVector(x,y);
    }

   
    eat(pos){
        let x = this.snakeBox[this.snakeBox.length-1].x;
        let y = this.snakeBox[this.snakeBox.length-1].y;

        if(x === pos.x && y === pos.y){
            this.grow();
            return true;
        }
            return false;
    }
 

    
}