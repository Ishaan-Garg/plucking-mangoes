
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boySprite,ground,stone,stoneimg;

function preload()
{

boy=loadImage("images/boy.png")

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	

	boySprite=createSprite(200,550,50,50);
	boySprite.addImage("b",boy);
	boySprite.scale=0.1;
	
	stone= new Stone (150,500,25,25);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  stone.display();
  
  drawSprites();
 
}



