var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "blue";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "yellow";

  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor = "purple";

  gameobject2 = createSprite(500,100,50,50);
  gameobject2.shapeColor = "red";

  gameobject3 = createSprite(800,100,50,50);
  gameobject3.shapeColor = "white";
}

function draw() {
  background(0);  
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //movingRect & fixedRect
  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red"; 
  }
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "yellow";
  }

  //movingRect & gameobject1
  if(isTouching(movingRect,gameobject1)){
    text("MR and GOB1 are touching!!",500,500);
  }
  else{
    text("Not touching!!",500,500);
  }

  drawSprites();
}

function isTouching(object1,object2){

  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x -object1.x<object1.width/2 + object2.width/2 &&
    object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y -object1.y<object1.height/2 + object2.height/2){

    return true;

  }
  else{

    return false;

  }

}