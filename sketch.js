const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world,bob1,bob2,bob3,bob4,bob5,Rope1,Rope2,Rope3,Rope4,Rope5;

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	Roof= new roof(600,100,200,20);
	Bob1=new bob(620,300,40);
	Bob2=new bob(660,300,40);
	Bob3=new bob(700,300,40);
	Bob4=new bob(740,300,40);
	Bob5=new bob(780,300,40);
	Rope1= new rope(bob1.body,roof.body,-bobDiameter*2,0);
	Rope2= new rope(bob2.body,roof.body,-bobDiameter*2,0);
	Rope3= new rope(bob3.body,roof.body,-bobDiameter*2,0);
	Rope4= new rope(bob4.body,roof.body,-bobDiameter*2,0);
	Rope5= new rope(bob5.body,roof.body,-bobDiameter*2,0);
   
	Engine.run(engine);
  }

function draw() {
  rectMode(CENTER);
  background(0);
  Bob5.collide( Bob4);
  Bob4.collide( Bob3);
  Bob3.collide( Bob2);
  Bob2.collide( Bob1);
  Roof.display();
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
  
  drawSprites();
 }

 function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:45,y:-45});
  
	}
}


