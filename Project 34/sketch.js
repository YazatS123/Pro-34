const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var rope, hero, block, ground, monster;
function preload() {
  //preload the images here

}

function setup() {
  createCanvas(1500, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  hero = new Hero(200, 180, 40);
  monster = new Hero(750, 465, 60)
  rope = new Rope(hero.body, {x:200, y:100})
  ground = new Ground(500, 500, 750, 20);
  block = [];
  for(var db = 0; db < 320; db = db + 40){
    var bal = new Block(350, db + 30, 30, 40);
    block.push(bal);
  }
  for(var b = 0; b < 400; b = b + 40){
    var bl = new Block(300, b, 30, 40);
    block.push(bl);
  }
  for(var dab = 0; dab < 440; dab = dab + 40){
    var bala = new Block(400, dab - 10, 30, 40);
    block.push(bala)
  }
  
}

function draw() {
  Engine.update(engine);
  background(230);
  hero.display("white");
  ground.display();
  //console.log(monster.x)
  for(var c = 0; c < block.length; c++){
    block[c].display();
  }
  monster.display("darkred");
  if(monster.body.position.y > 500){
    textSize(60)
    //console.log("D")
    text("You win!", 800, 200);
    text("The monster fell!", 800, 100)
  }
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY})
}
