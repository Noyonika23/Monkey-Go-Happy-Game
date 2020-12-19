var bananaimage, obstacleimage, obstaclegroup, background;
var score=0

function preload (){
 backImage=loadImage("jungle.jpg")
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  

  bananaImage = loadImage("banana.png");
  obstacle_img = loadImage("stone.png"); 
}

function setup() {
  createCanvas(400, 400);
  background1=createSprite(200,200,400,400)
  background1.addImage(backImage)
  background1.velocityX =-4
  monkey = createSprite (50,350)
  monkey.addAnimation("running", player_running)
  monkey.scale=0.1
  ground=createSprite(200,380,400,10)
  BananaGroup= new Group();
  ObstacleGroup= new Group ();
  ground.visible = false 
  
}

function draw() {
 console.log(monkey.y)                                              
background(220);
  if (background1.x<0){
    background1.x=200
  }
  
  if (keyDown("Space")&&monkey.y>300){
    monkey.velocityY=-12
  }
   monkey.velocityY=monkey.velocityY+0.8 
  monkey.collide(ground)
  SpawnBanana();
  SpawnObstacle();
  if (BananaGroup.isTouching(monkey)){
    BananaGroup.destroyEach();
    score=score+2
  }
  switch(score){
    case 10: monkey.scale=0.12
      break;
 case 20: monkey.scale=0.14
      break;
   case 30: monkey.scale=0.16
      break;
   case 40: monkey.scale=0.18
      break;
  }
  if (ObstacleGroup.isTouching(monkey)){
    monkey.scale=0.08
  }
  drawSprites();
  stroke("white")
  textSize(20)
  fill ("white")
   text("Score: " + score, 300,20)

}

function SpawnBanana() {
if (World.frameCount%80===0){
var Banana = createSprite(400, 340);
Banana.addImage(bananaImage);
Banana.scale = (0.05);
Banana.velocityX = -3;
Banana.y = Math.round(random(200,300));
Banana.lifetime=127;
BananaGroup.add(Banana);                              
}
}
function SpawnObstacle() {
  if (World.frameCount%300===0){
 var obstacle = createSprite(400,340);
  obstacle.addImage(obstacle_img);
  obstacle.scale = (0.2)
  obstacle.velocityX = -3;
obstacle.lifetime = 300;
ObstacleGroup.add(obstacle);
 }
}
  





  







