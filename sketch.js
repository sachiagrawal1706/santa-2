var santa,santaRun,santaStand,santaHurt,santaJump
var snowman, snowmanImage
var tree,treeImage
var ob1,ob2,ob3,ob4
var ground
var counter=0
var gameState = 0
var button

function preload(){
  santaRun=loadAnimation("santa/Run (1).png","santa/Run (3).png","santa/Run (5).png")
  santaJump=loadAnimation("santa/Jump (6).png")
  santaStand=loadAnimation("santa/Idle (1).png")
  santaHurt=loadAnimation("santa/Dead (17).png")
santaSleep=loadAnimation('santa/santa sleep.png')
  snowmanImage=loadImage("bg/SnowMan.png")
  tree1=loadImage("bg/Tree_1.png")
  tree1=loadImage("bg/Tree_1.png")
bg1=loadImage('bg/bg1.jpg')
bg2=loadImage('bg/bg2.jpg')


  
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  santa=createSprite(200,500)
  santa.addAnimation('sleep',santaSleep)
    santa.addAnimation('stand',santaStand)
  santa.addAnimation('run',santaRun)
  santa.addAnimation('jump',santaJump)
  santa.addAnimation('hurt',santaHurt)

  ground= createSprite(displayWidth/2, displayHeight-100)
  button=createButton('next')
button.position(50,50)
button.size(150,80)

}

function draw() {
   background(bg1);
  textSize(50);
  strokeWeight(7)
  
  fill("black")
  

  if(gameState===0){
    text("CLICK ON NEXT TO SEE THE STORY",200,80)
  
    button.mouseClicked(function(){  counter++})
    
      
      if(counter ===1){
        textSize(50);  
        stroke("pink") 
        strokeWeight(4) 
        text("Zzzzzzzz\n Zzzzzzzz\n Zzzzzzzzzzz",50,200)
        console.log(counter)
      }
      else if(counter ===2){
        santa.changeAnimation('stand',santaStand)
        textSize(50);
        stroke("lightblue") 
        strokeWeight(4)  
        text("oh my god\n it's fifteen minutes to twelve O'clock \n i have deliver so many gifts\n i don't know how i fell a sleep",200,200)
        console.log(counter)
      }
      else if(counter ===3){
        textSize(50); 
        stroke("pink") 
        strokeWeight(4)  
        text("there is no time to waste\n i need to hurry up and start start the deliveries soon\n I would like to try some sir",200,450)
        console.log(counter)
      }
      else if(counter === 4){
        textSize(50); 
        stroke("lightblue") 
        strokeWeight(4) 
        text("will you help me deliver?\n come along it will be fun ride ",500,200)
       
        console.log(counter)
      }
      else if(counter ===5) {
        console.log(counter)
        gameState =1
       
      }
      
      
  
  }
   if (gameState===1) {
     background(bg2)
         button.mouseClicked(function(){  gameState=2})

   }     
  
  drawSprites()
}