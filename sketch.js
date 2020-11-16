var car, wall;
var speed,weight;
var carImg, cr,crImg, wallImg;

function preload(){
carImg=loadImage("cr5.jpg");
cr=loadImage("car3.png");
crImg=loadImage("car6.jpg");
wallImg=loadImage("wall1.jpg");
}
 
function setup() {
  createCanvas(1200,400);

  car=createSprite(50,200,50,50);

  wall=createSprite(1100,200,60,height/2);
  wall.addImage("wall", wallImg);
  wall.scale=0.9;
  wall.shapeColor="black";
 
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {  
  background(250);
  drawSprites();

  car.velocityX=speed;

  if(wall.x-car.x<(car.width/wall.width)/2){

   car.velocityX=0;
   var deformation=0.5*weight*speed*speed/22500;
   if(deformation>180){
    car.addImage("car", carImg);
    car.scale=0.3;
    car.depth=wall.depth;
    car.depth=car.depth+1;
   }

   if(deformation<180 && deformation>100){
   car.addImage("car", cr);
   car.scale=0.3;
   car.depth=wall.depth;
   car.depth=car.depth+1;
  }

  if(deformation<100){
    car.addImage("car3",crImg);
    car.scale=0.3;
    car.depth=wall.depth;
    car.depth=car.depth+1;
  }
  }
}