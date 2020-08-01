
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paperBody = new Paper (150,400 ,2)
	
	wall1= new Dustbin(360,268,15,70);
	wall2= new Dustbin(290,268,15,70);
	wall3= new Dustbin(325,290,140,15);

	//Create a Ground
	ground = new Ground(400,600,800,20);
 	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  wall1.display();
  wall2.display();
  wall3.display();
paperBody.display();
ground.display();


drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
	
	Matter.Body.applyForce(paperBody.body,paperBody.body.position,{x:18,y:-18})
	
}
}


