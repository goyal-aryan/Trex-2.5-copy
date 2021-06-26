var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImg;
var cloud;

var score;

// function to preload the image
function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImg = loadImage("cloud.png");
  
 
  
}

function setup() {

  createCanvas(600,200);
  
  
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  

}

function draw() {
  
  
  //set background color
  background("lightblue");
  
  console.log(trex.y);
  
  strokeWeight(20);
    stroke("black");
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y > 161) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds();
  
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
  
  // to check if the remainder is 0
  if(World.frameCount % 40 === 0){
    
    
 // create cloud sprite 
  var cloud = createSprite(600,50,20,20);
    
    //to move the cloud
  cloud.velocityX = -3;
    
    // to add image for the cloud
  cloud.addImage(cloudImg);
    
    //to resize the cloud
  cloud.scale = 0.5;
    
    //to make the cloud appear at ramdom positions on Y axis
  cloud.y = Math.round (random(10,100));
    
    //to make some part of cloud disappear behind Trex
    cloud.depth = trex.depth;
    trex.depth = trex.depth +1;
     }
}



