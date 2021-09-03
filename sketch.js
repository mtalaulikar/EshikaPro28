const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 580);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	ball = new Ball(400,200,70,70);

	dustbin1 = new Dustbin(1150,540,250,20);
    dustbin2 = new Ground(1250,450,20,220);
	dustbin3 = new Ground(1050,450,20,220);

	ground = new Ground(700,570,1500,25);

	wall = new Ground(1290,70,20,1000);

	launcher = new Launcher(ball.body,{x:400,y:200});

	  Engine.run(engine);

  

}


function draw() {
  rectMode(CENTER);
  background(0,2050,2000);

  dustbin2.display();
  dustbin3.display();

  ball.display();

  dustbin1.display();

  ground.display();

  wall.display();

  launcher.display();
  
  drawSprites();
 
}

//function keyPressed(){
	//if (keyCode === UP_ARROW){

		//Matter.Body.applyForce(ball.body,ball.body.position,{x:155,y:-200});
	//}
//}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcher.fly();
}