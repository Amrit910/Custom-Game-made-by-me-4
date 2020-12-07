var charlie;
var lab, labImg;
var clouds;
var charlieImg;
var monster, monsterImg;
var boss, bossImg;
var arrow;
var score = 0;
var game, gameState = 0;
var database;
var form;

var monsterGroup, arrowGroup;

function preload(){
  labImg = loadImage("forest.png");
  charlieImg = loadImage("charlie.png");
  bossImg = loadImage("Boss.png");
  monsterImg = loadImage("monster2.jpg");

}

function setup() {
  createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  lab = createSprite(0,0,1200,400);

  lab.addImage(labImg);
  lab.scale = 6.5;

  //createSprite(400, 200, 50, 50);
  charlie = createSprite(1100,360,30,60);

  charlie.addImage(charlieImg);
  charlie.scale = 0.2;

  monsterGroup = new Group();
  arrowGroup = new Group();

  game = new Game();
  game.getState();
  game.start();
  if (gameState === 0){
    form = new Form();
    form.display();
  }
  if (gameState === 1){
    game.play();
  }
  

}
function draw() {
   background(255);

   

}

function spawnEnemy()
{
  if (frameCount%80 === 0)
  {
    enemy = createSprite(displayWidth,displayHeight-10,50,50);
    enemy.velocityX = -4;
    enemy.addImage("enemy", monsterImg);
    enemy.scale = 0.2;
    enemy.y = Math.round(random(0,displayHeight-20));
    monsterGroup.add(enemy);




  }

}

function createArrow(){
  arrow = createSprite(charlie.x,charlie.y,60,10);
  
  arrow.y = charlie.y;
  arrow.velocityX = 4;
  arrowGroup.add(arrow);

}