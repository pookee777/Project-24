
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall,dustbin1,dustbin2,dustbin3,ground;

function setup() {
	var canvas = createCanvas(700,600);
	engine = Engine.create();
	world = engine.world;

	paperBall = new Paper(150,560,30);
	dustbin1 = new Dustbin(550,560,100,20);
	dustbin2 = new Dustbin(500,510,20,100);
	dustbin3 = new Dustbin(600,510,20,100);
	ground = new Ground(350,570,700,20);

	Engine.run(engine);
  
}


function draw() {
  background("lightBlue");
  Engine.update(engine);
  paperBall.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  
  drawSprites();
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:119,y:-119});
	}
}



