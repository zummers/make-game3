var spacebackground
var space

var astronaunt
var gear

function preload(){
spacebackground=loadImage("space.jpg")

gear=loadImage("space man1.png")
}

function setup() {
  createCanvas(1200,500);

  
  
  astronaunt=createSprite(50, 250, 50, 50);
  astronaunt.addImage(gear)
  astronaunt.scale=0.2
}

function draw() {
  background(spacebackground);
  
  if(keyDown("up")){
    astronaunt.y=astronaunt.y-10
  }

  if(keyDown("down")){
    astronaunt.y=astronaunt.y+10
  }

  
  drawSprites();
}