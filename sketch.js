
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boySprite,ground;

function preload()
{

boy=loadImage("images/boy.png")
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground= new Ground (600,500,1200,10);

	boySprite=createSprite(200,550,50,50)
	boySprite.addImage("b",boy);
	boySprite.scale=0.1;
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  ground.display();
  
  drawSprites();
 
}



