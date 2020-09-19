
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var ball1;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;

	


	//Create the Bodies Here.
 ground1 = new Ground (400,390,800,10);
 ball1 = new Ball (100,200,30);
 dustbin1= new Dustbin (720,380,50,10);
 


	
 Engine.run(engine);
  
}


function draw() {
  background("lightgrey");
  

  ball1.display();
  ground1.display();
  dustbin1.display();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:42,y:-42});
  }
 }


