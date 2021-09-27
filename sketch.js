function setup() {
  createCanvas(800,800);
  snake = new Snake(200,200)
  food = new Food(400,400)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}