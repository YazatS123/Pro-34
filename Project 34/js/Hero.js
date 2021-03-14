class Hero{
    constructor(x, y, width){
        var options ={
            'restitution':0.5,
            'friction':0.5,
            'density':0.8
        }
        this.body = Bodies.rectangle(x, y, width, width, options);
        this.width = width;
        this.height = width;
        World.add(world, this.body);
    }
    display(col){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(col);
        rect(pos.x, pos.y, this.width, this.height);
    }
}