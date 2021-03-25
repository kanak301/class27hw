
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

const Render = Matter.Render;



var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  var render = Render.create({ element: document.body, engine: engine, options: { width: 800, height: 700, wireframes: false } });

	//Create the Bodies Here.

	bob1 = new bobClass(300,350,25);
	bob2 = new bobClass(350,350,25);
	bob3 = new bobClass(400,350,25);
	bob4 = new bobClass(450,350,25);
  bob5 = new bobClass(500,350,25);
	
	roof = new roofClass(400,100,300,20);

	rope1 = new ropeClass(bob1.body,roof.body,-100,0);
  //rope1.setCollider("rectangle",0,0,100,rope1.height);

	rope2 = new ropeClass(bob2.body,roof.body,-50,0);
	rope3 = new ropeClass(bob3.body,roof.body,0,0);
	rope4 = new ropeClass(bob4.body,roof.body,50,0);
	rope5 = new ropeClass(bob5.body,roof.body,100,0);

    Engine.run(engine);
    Render.run(render);

  
}

function draw() {
  rectMode(CENTER);
  background(255);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  //keyPressed();
  drawSprites();
 
}

function keyPressed(){

	if (keyCode == 32){

    console.log("hi");
		Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-70});
    
	}
  }






