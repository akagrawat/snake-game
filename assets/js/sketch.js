let snake ;
let w;
let h;

function setup() {
    createCanvas(400, 400);
    w = floor(width / resolution);
    h = floor(height / resolution);
    frameRate(5);
    snake = new Snake();
    food = createVector();
   
    
  }
  
  function draw() {
      scale(resolution);
     background(51);
     if(snake.eat(food)){
         snake.foodLocation();
     }
     snake.update();
     snake.show();

     fill(255,0,0);
     rect(food.x,food.y,1,1);
    
     
    
  }

  function keyPressed(){

    if(keyCode === LEFT_ARROW ){
      snake.setDir(-1,0);  
    }else if(keyCode === RIGHT_ARROW){
        snake.setDir(1,0); 
    }else if(keyCode === UP_ARROW){
        snake.setDir(0,-1); 
    }else if(keyCode === DOWN_ARROW){
        snake.setDir(0,1); 
    }

  }