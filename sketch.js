const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,400,60,60);
    box2 = new Box(800,400,60,60);
    box3 = new Box(1000,300,60,60);
    box4 = new Box(800,300,60,60);
    box5 = new Box(900,200,60,60);

    pig1 = new Pig(900,400,50,50);
    pig2 = new Pig(900,300,50,50);

    log1 = new Log(900,350,270,PI/2);
    log2 = new Log(900,270,270,PI/2);
    log3 = new Log(870,200,120,PI/6);
    log4 = new Log(950,200,120,-PI/6);

    bird = new Bird(100,300,50,50);

    ground = new Ground(600,height,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    ground.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}