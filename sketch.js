const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinO,groundO;
var world;
var paper;

//function preload(){
//dustbinObj = loadImage("dustbingreen.png");
//}

function setup() {
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	groundO = new Ground(width/2,670,width,20);
	paper = new Paper(999,650);
	dustbinO  = new Dustbin(1200,650);
}

function draw() {
  rectMode(CENTER);
  background(230);

  groundO.display();
  dustbinO.display();
  paper.display();
}
 
function keypress(){
	if(KeyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-145});
	}
}