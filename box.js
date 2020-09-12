class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'density':1.0,
        'friction':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility=255;
    this.image = loadImage("images.png");
    
    World.add(world, this.body);
  }
    display(){
    if (this.body.speed<4.5){
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }else {
      World.remove(world,this.body);
      this.visibility=this.visibility-5;
      push();
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      pop();
    }
  }

   calculateScore(){
   if(this.visibility<0 && this.visibility>-105){
     score++;
   }
 }
};