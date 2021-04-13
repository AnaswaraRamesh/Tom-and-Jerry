var cat,mouse,cat2,mouse2,cat3,mouse3;
var catImg,mouseImg, cat2Img,mouse2Img,cat3Img,mouse3Img;
var garden,gardenImg;

function preload() {
    //loading the images here
    garden = loadImage("images/garden.png");
   catImg=loadAnimation("images/cat2.png","images/cat3.png")
   mouseImg = loadAnimation("images/mouse2.png","images/mouse3.png")
gardenImg= loadImage("images/garden.png")
cat2Img=loadImage("images/cat1.png")
mouse2Img = loadImage("images/mouse1.png")
mouse3Img=loadImage("images/mouse4.png")
cat3Img = loadImage("images/cat4.png")

}

function setup(){
    createCanvas(900,650);
    background(100)
    garden= createSprite(450,325,20,20)
    garden.addImage(gardenImg)
    
    //create tom and jerry sprites here
    cat = createSprite(650,530,20,20)
    cat.addImage(cat2Img)
    cat.scale=0.2;

    mouse=createSprite(150,530,20,20)
    mouse.addImage(mouse2Img)
    mouse.scale=0.1
}

function draw() {

    background(225);
    //Write condition here to evalute if tom and jerry collide
    
     text(mouseX+','+mouseY,10,45)
laststep();
     drawSprites();

}

function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      cat.velocityX=-1 
      cat.addAnimation("running",catImg);
      cat.changeAnimation("running")
      mouse.addAnimation("teasing",mouseImg)
     mouse.changeAnimation("teasing")
    }
}
function laststep(){
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        mouse.addImage("stop",mouse3Img)
        mouse.changeImage("stop") 
        cat.addImage("lastImg",cat3Img)
        cat.changeImage("lastImg")
     cat.velocityX =0;
    }
}
