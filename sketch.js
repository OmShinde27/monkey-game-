
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
   //to create a monkey
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  //to create ground
  ground = createSprite(400,350,900,10);
  ground.velocityX=-5;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananasGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;

  
}


function draw() {
console.log(monkey.y);
  
  background("white");
  
 if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
if(keyDown("space") ) {
      monkey.velocityY = -12;
  }
  
monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
    createbananas();
    createObstacles();
  
  if(obstaclesGroup.isTouching(monkey)){
    
        ground.velocityX = 0;
        monkey.velocityY = 0;
    
        obstaclesGroup.setVelocityXEach(0);
        bananasGroup.setVelocityXEach(0);
    
        obstaclesGroup.setLifetimeEach(-1);
        bananasGroup.setLifetimeEach(-1);
    }
  stroke("black");
  textSize(20)
  fill("black");
 score=Math.ceil(frameCount/frameRate())
text("score: "+ score, 150,50);

  
drawSprites();
}

function createbananas(){
  if (frameCount % 80 === 0) {
    banana = createSprite(350,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add image of banana
     banana.addImage(bananaImage);
     banana.scale=0.05;
    
    //add each banana to the group
    bananasGroup.add(banana);
  }
}

function createObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(300,310,10,40);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 400;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }

  
}






