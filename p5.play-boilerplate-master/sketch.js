var sun,sun_animation;
var planet1,planet1_animation;
var planet2,planet2_animation;
var score;
function preload(){
 sun_animation = loadImage("sprite_0.png");
 planet1_animation = loadImage("sprite_1.png");
 planet2_animation = loadImage("sprite_3.png");
}
function setup() {
  createCanvas(1200,500);
  
  sun = createSprite(600, 250, 50, 50);
  sun.addImage("sun",sun_animation);
  sun.scale = 0.7;
  sun.debug = true;
  
  planet1 = createSprite(300,250,1,2);
  planet1.addImage("planet1",planet1_animation);
  planet1.scale = 0.5;
  planet1.debug = true;
  planet2 = createSprite(900,250,1,2);
  planet2.addImage("planet2",planet2_animation);
  planet2.scale = 0.5;
  planet2.debug = true;
   

}

function draw() {
  background(0);  
  sun.setCollider("circle",0,0,70);
  planet1.setCollider("circle",0,0,40);
  planet2.setCollider("circle",0,0,25);
  planet1.velocityY = -2;  
    if(planet1.y < 90){
     planet1.velocityY = 0;
     planet1.velocityX = 2; 
    }
    if(planet1.x > 900){
      planet1.velocityY = 2;
      planet1.velocityX = 0; 
    }
    if(planet1.y > 400){
      planet1.velocityX = -2;
      planet1.velocityY = 0;
    }
    if(planet1.x < 300 ){
      planet1.velocityX = 0;
      planet1.velocityY = -2;
    }
    planet2.velocityY = 2;
    if(planet2.y > 400){
      planet2.velocityX = -2;
      planet2.velocityY = 0;
    }
    if(planet2.x < 300 ){
      planet2.velocityX = 0;
      planet2.velocityY = -2;
    }
    if(planet2.y < 90){
      planet2.velocityX = 2;
      planet2.velocityY = 0;
    }
    if(planet2.x > 900){
      planet2.velocityY = 2;
      planet2.velocityX = 0; 
    }
  drawSprites();

}