
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

	//Create the Bodies Here.
	roofObject = new Roof(400,400,30,50);

	bobObject1 = new Bob(90,200,50);
	bobObject2 = new Bob(200,200,50);
	bobObject3 = new Bob(310,200,50);
	bobObject4 = new Bob(420,200,50);
	bobObject5 = new Bob(530,200,50);

	rope1 = new Rope(bobObject1,roofObject.body,-Bob.Diameter*2,0);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();

 
}



