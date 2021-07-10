var backgroundimage 
var player, playerimage 
var bullet,bulletimage,bulletGroup
var invisibleGround
var Zombie,ZombieImage,ZombieGroup
var Zarr,Zindex=0,Brr,Bindex=0
var gameState="start";
var END=0;
var score =0
var X0




function preload(){
backgroundimage = loadImage("baackkgroundimage/backgroundimage.jpg")
playerimage = loadAnimation("player/player1.png","player/player2.png","player/player3.png"
,"player/player4.png","player/player5.png","player/player6.png","player/player7.png","player/player8.png"
,"player/player9.png","player/player10.png","player/player11.png")
bulletimage=loadImage("bullet/bullet.png")
ZombieImage = loadAnimation("zombie/zombie1.png","zombie/zombie2.png","zombie/zombie3.png"
,"zombie/zombie4.png","zombie/zombie5.png","zombie/zombie6.png","zombie/zombie7.png"
,"zombie/zombie8.png","zombie/zombie9.png","zombie/zombie10.png","zombie/zombie11.png","zombie/zombie12.png")

}



function setup() {
  createCanvas(displayWidth,displayHeight);
  player=createSprite(120, 400, 50, 50);
  player.addAnimation("playerimage",playerimage)
  player.scale = 0.6
  player.setCollider("rectangle",12,100,150,300)
  player.debug = false
  
  invisibleGround=createSprite(140,565,200,20)
  invisibleGround.visible=false

  ZombieGroup1= new Group()
  ZombieGroup2 = new Group()
  bulletGroup = new Group()

  chances = 1

  X0=createSprite(2,500,10,1000)
  X0.visible = false


  
}

function draw() {
  background(backgroundimage);

  if(gameState === "start"){
    fill("white");
    strokeWeight(8);
    stroke("red");
    textSize(65);
    text("INSTRUCTIONS",400,90);
    textSize(40);
    text("Press w to move up",450,180);
    text("Press s to move down",450,230);
    text("click mouse to shoot",450,280);
    textSize(50);
    text("Press space to start",430,400);

    if(keyDown("space")){
      gameState = "play";
    }
  }

  if(gameState==="play"){
  
 
  player.collide(invisibleGround)
  

  if(keyDown("W")){
  player.y=player.y-4
  }
  if(keyDown("S")){
  player.y=player.y+4
  }


  spwanZombie1()
  spwanZombie2()
 


  if(ZombieGroup1.isTouching(X0) || ZombieGroup2.isTouching(X0) || 
  ZombieGroup1.isTouching(player) || ZombieGroup2.isTouching(player)){
       gameState = "end";
    }
  
  
  if(bulletGroup.isTouching(ZombieGroup1)){
   ZombieGroup1.destroyEach()
   bulletGroup.destroyEach()
   score = score+1
   
 }

 if(bulletGroup.isTouching(ZombieGroup2)){
  ZombieGroup2.destroyEach()
  bulletGroup.destroyEach()
  score = score+1
  
}

}
if(gameState==="end"){
    ZombieGroup1.destroyEach();
    ZombieGroup2.destroyEach();
    player.visible = false;
    fill("white");
    strokeWeight(8);
    stroke("red");
    textSize(65);
    text("GameOver",500,300);
    textSize(50);
    text("Press 'R' to restart",450,350);

    if(keyDown("R")){
       reset();
    }
}

fill("white")
textSize(18)
text("score Board:" + score,1000,25);

  drawSprites();
}

function reset(){
   gameState = "play";
   player.visible = true;
   score = 0;
}

function mouseReleased(){
  bullet= createSprite(210,482.134,50,50)
  bullet.addImage("bulletimage",bulletimage)
  bullet.scale = 0.05
  bullet.velocityX=40
  bullet.y = player.y+78
  bullet.x = player.x+90
  bullet.setCollider("rectangle",0,0,5,5)
  bulletGroup.add(bullet)
  bullet.debug = false
}

function spwanZombie1(){
if(frameCount%236===0){
  Zombie1= createSprite(width,129,0,0)
  Zombie1.y= Math.round(random(50,400))
    Zombie1.addAnimation("ZombieImage",ZombieImage)
  Zombie1.scale = 0.3
  Zombie1.velocityX= -4
  Zombie1.lifetime = 320
  Zombie1.setCollider("circle",62,10,100)
   Zombie1.debug=true

  ZombieGroup1.add(Zombie1)
}

}
function spwanZombie2(){
  if(frameCount%967==0){
    Zombie2= createSprite(width,129,0,0)
    Zombie2.y= Math.round(random(50,400))
    Zombie2.addAnimation("ZombieImage",ZombieImage)
    Zombie2.scale = 0.3
    Zombie2.velocityX= -4
    Zombie2.lifetime = 320
    Zombie2.setCollider("circle",62,10,100)
    Zombie2.debug=true
    ZombieGroup2.add(Zombie2)
  }
}






