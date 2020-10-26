var car 

var wall

var speed

var weight

function setup() {
  createCanvas(1600,800);

  speed = random (55,90)
  weight = random (400,1200)

  car = createSprite (400,400,50,50)
    car.velocityX = speed

  wall = createSprite (1200,400,50,80)

}

function draw() {
  background(0);  
// wall.x- car.x < wall.width/2 + car.width/2 // formula for collition
if(wall.x- car.x < wall.width/2 + car.width/2){
car.velocityX = 0
var deformation 
deformation = 0.5 * weight * speed * speed / 22500

if(deformation < 100 ){
car.shapeColor = color (0, 255, 0)

}

if(deformation > 100 && deformation < 180){
car.shapeColor = color (230, 230, 0)

}

if(deformation > 180 ){
car.shapeColor = color (255, 0, 0)

}

}
  drawSprites();
}