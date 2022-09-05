var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var o1 , o2 , o3

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

o1 = loadImage("assets/obsTop2.png")
o2 = loadImage("assets/obsBottom2.png")
o3 = loadImage("assets/obsBottom3.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;

           spawnObstacles();
          
   
        drawSprites();
        
}
function spawnObstacles(){
  if(frameCount %100 === 0){
    var obstacle = createSprite(300,120,10,10)
    obstacle.velocityX = -3
    obstacle.addImage(o1)
    obstacle.y = Math.round(random(10,250));
    
    obstacle.scale = 0.1
  }
}
