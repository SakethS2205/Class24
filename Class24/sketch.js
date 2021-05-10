const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,700,50,50);
    box2 = new Box(900,700,50,50);
    box3 = new Box(700,630,50,50);
    box4 = new Box(900,630,50,50);
    box5 = new Box(800, 560, 50, 50);
    ground = new Ground(500,height,1000,20);
    pig1 = new Pig(800,700,30,30);
    pig2 = new Pig(800, 630, 30, 30);
    log1 = new Log(800, 650, 250, PI/2);
    log2 = new Log(800, 580, 250, PI/2);
    log3 = new Log(760, 520, 100, PI/4);
    log4 = new Log(850, 520, 100, PI/-4);
    bird = new Bird(200, 560, 30, 30); 





}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}