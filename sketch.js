
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,315,20,20);  
monkey.addAnimation("run", monkey_running);  
monkey.scale=0.1
  
ground = createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x = ground.width/2;  
console.log(ground.x)
  
foodGroup = createGroup(); 
obstacleGroup = createGroup();
  
}


function draw() {
background("white")

if(keyDown("space")&& monkey.y >= 230) {
        monkey.velocityY = -10;
    }  
  
monkey.velocityY = monkey.velocityY + 0.8  
  
if (ground.x < 0){
      ground.x = ground.width/2;
    }  

food();   
obstacles();


monkey.collide(ground)  
 
stroke("white");
textSize(20);  
fill("white");  
text("Score:" + score, 500,50);  
  
stroke("black");
textSize(20);
fill("black")
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time: " + survivalTime, 100,50)  
  
drawSprites();
  
}

function food () {

if (frameCount % 80 === 0) {
var banana = createSprite(400,150,20,20)  
banana.y = Math.round(random(120,200));  
banana.addImage(bananaImage)  
banana.scale = 0.1
banana.velocityX = -4;  
banana.lifetime = 100
  
foodGroup.add (banana)
   }   
}

function obstacles() {

if (frameCount % 60 === 0){
   var obstacle = createSprite(420,320,20,20);
   obstacle.velocityX = -4;
   obstacle.addImage(obstacleImage)
   obstacle.scale = 0.2
   obstacle.lifetime=300
  
   obstacleGroup.add(obstacle)
  }
}

