let snake;
let w;
let h;



function setup() {
  var snakeCanvas = createCanvas(400, 400);
  snakeCanvas.parent("canvas");
  w = floor(width / resolution);
  h = floor(height / resolution);
  frameRate(5);
  snake = new Snake();
  snake.foodLocation();


}

function draw() {
  scale(resolution);
  background(51);
  if (snake.eat(food)) {
    snake.foodLocation();
  }

  snake.update();
  snake.show();

  if (snake.endGame()) {
    textSize(1.7);
    textFont('Serif');
    text('End Game', 6, 10);
    fill(255);
    textSize(1);
    text('Your score:' + " " + snakeLen*5, 6.5, 11.5);
    noLoop();
  }
  fill(255, 0, 0);
  noStroke();
  rect(food.x, food.y, 1, 1);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  }

}
function restart() {
  window.location.reload();
}