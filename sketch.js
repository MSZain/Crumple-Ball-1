
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper (100,600,10);

	ground = new Ground (400,680,800,20);
	
	
	rightwall = new Dustbin (662,635,10,70);
	leftwall = new Dustbin (557,635,10,70);
	bottomwall = new Dustbin (610,665,100,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();
  ground.display();
  leftwall.display();
  bottomwall.display();
  rightwall.display();
  
  drawSprites();
 
}

function keyPressed () {
	if(keyCode === UP_ARROW ) {
		Matter.Body.applyForce(paper.body,paper.body.position, { x:14, y: -14 });
	}
}


