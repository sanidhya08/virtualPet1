//Create variables here
var dog 
var dog_img
var happyDog
var happyDog_img
var database
var foodS
var foodStock

function preload()
{
	dog_img = loadImage("images/dogImg.png")
  happyDog_img = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,300,20,20);
  dog.addImage(dog_img);
  dog.scale = .2
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog_img)
}
  drawSprites();
  //add styles here

  fill(255,255,254);
 stroke("black");
 text("Food remaining : " +foodS,190,200);
 textSize(13);
 text("Note: Press UP_ARROW Key To Feed Drago Milk!",100,10,300,20);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref("/").update({
    Food:x
  })
}


