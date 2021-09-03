class Dustbin {
    constructor(x,y,width,height){
       var options={
          isStatic: true
       }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       this.image = loadImage("Sprites/dustbingreen.png");

       World.add(world, this.body);
    }
    display(){
     var pos =this.body.position;
     var angle = this.body.angle;
     
     push();
     translate(pos.x, pos.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.image,0,0-109,this.width,this.height+250);
     pop();
  }
}