var bullet, wall;
var speed, weight, thickness;


function setup() {
  createCanvas(1600,400);
  wall= createSprite(1200, 200, thickness, height/2);
  bullet= createSprite(50,200,50,50);
  
  speed= random(223,321);
  weight= random(400,1500)
  thickness=random(22,83)
  bullet.velocityX=speed; 
  
  
}

function draw() {
  background("Black");

  console.log((0.5) * (weight) * (speed) * (speed)/(thickness * thickness* thickness));
  
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.x=wall.x-55;
    bullet.velocityX=0;
    var damage= 0.5 * weight * speed * speed/(thickness * thickness* thickness);
    if(damage>10){
      bullet.shapeColor="red";
    }
    
    else if(damage<10){
      bullet.shapeColor="green";
    }
  }
  drawSprites();
}