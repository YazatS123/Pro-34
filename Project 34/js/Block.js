class Block{
    constructor(x,y,width,height){
      var options ={
          'restitution': 1.0,
          'density': 0.5,
          'friction': 0.5
      }
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
      this.width = width;
      this.height = height;
    }
    display()
    {
        fill("red");
        rectMode(CENTER);
        //rectMode("CENTER");
        rect(this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }
  