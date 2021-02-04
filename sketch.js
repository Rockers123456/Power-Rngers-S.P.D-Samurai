
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	jumpingAnimation = loadAnimation(
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump00.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump01.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump02.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump03.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump04.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump05.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump06.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump07.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump08.png',     
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/jump09.png'    
	  );
	  runningAnimation = loadAnimation( 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run01.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run02.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run03.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/Run04.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run05.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run06.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run07.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run08.png',     
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/adventureMan/run09.png'    
	  );
	  
	  jumpingAnimation = loadAnimation(
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump00.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump01.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump02.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump03.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump04.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump05.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump06.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump07.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump08.png',     
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/jump09.png'    
	  );
	  runningAnimation = loadAnimation(
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/run00.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/run01.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/run02.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/run03.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/run04.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/run05.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/run06.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/robot/run07.png'   
	  );
	  jumpingAnimation = loadAnimation(
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump00.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump01.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump02.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump03.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump04.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump05.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump06.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump07.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump08.png',     
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump09.png'    
	  );
	  Pnrunning  = loadAnimation(
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run00.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run01.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run02.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run03.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run04.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run05.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run06.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run07.png', 
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run08.png',     
		'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/run09.png'    
	  );
							

	  gameBackground = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/environments/industrialBackground.png');
platformBackground = loadImage('https://la-wit.github.io/build-an-infinite-runner/build/images/environments/industrialPlatform.png');
gameFont = loadFont('https://la-wit.github.io/build-an-infinite-runner/build/fonts/ARCADE_R.TTF');
gameMusic = loadSound('https://la-wit.github.io/build-an-infinite-runner/build/sounds/generic-game-loop-4.mp3');
gameOverMusic = loadSound('https://la-wit.github.io/build-an-infinite-runner/build/sounds/over.mp3');
jumpSound = loadSound('https://la-wit.github.io/build-an-infinite-runner/build/sounds/jump07.mp3');
                      
}

function setup() {
	createCanvas(800,400);
	backgr=createSprite(400,200,1600,400);
	backgr.addImage(gameBackground);
	backgr.scale=1.0;
	backgr.velocityX=-2;
	backgr.x=backgr.width/2;

	platbg1=createSprite(15,350,50,30);
	platbg1.addImage(platformBackground);
	platbg1.velocityX=-1.5;
	platbg1.scale=0.75;

	grum=createSprite(350,150,50,50);
	grum.addAnimation("running",Pnrunning)



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if (backgr.x<0) {
	backgr.x=backgr.width/2;  
  }
  drawSprites();
 
}



