
var fixedRect;
var movingRect;
//var box1,box2;

function setup() {
  createCanvas(800,800);
  fixedRect= createSprite(200, 100, 50, 50);
  fixedRect.velocityY=5;
  fixedRect.shapeColor="green";

  movingRect= createSprite(200,600,50,50);
  movingRect.shapeColor="red";
  movingRect.velocityY=-5

  // box1= createSprite(100,100,50,50);
  // box1.shapeColor="green";


  // box2 = createSprite(200,200,50,50)
  // box2.shapeColor="green";
}

function draw() {
  background(0);  

  

  bounceOff(movingRect,fixedRect);

  // if(isTouching(movingRect,box1)){
  //   movingRect.shapeColor="yellow";
  //   box1.shapeColor="yellow";
  // }
  // else{
  //   movingRect.shapeColor="green";
  //   box1.shapeColor="green";
  // }
  
 
  
  drawSprites();
}
 