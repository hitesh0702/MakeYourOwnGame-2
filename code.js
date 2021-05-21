var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["20d26a62-039c-4e2a-9ad0-aa9a06e071e3"],"propsByKey":{"20d26a62-039c-4e2a-9ad0-aa9a06e071e3":{"name":"striker","sourceUrl":"assets/api/v1/animation-library/gamelab/QLplTpu00ayI7h28O_xxwQhs1KTbX_ay/category_gameplay/pieceYellow_multi10.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"QLplTpu00ayI7h28O_xxwQhs1KTbX_ay","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/QLplTpu00ayI7h28O_xxwQhs1KTbX_ay/category_gameplay/pieceYellow_multi10.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//white lines
var line1 = createSprite(4, 400,6,800);
line1.shapeColor = "white";
var line2 = createSprite(0, 4,800,6);
line2.shapeColor="white";
var line3 = createSprite(396, 400,6,800);
line3.shapeColor = "whity";
var line4 = createSprite(0,396, 800,6);
line4.shapeColor = "white";
var line5 = createSprite(0,133,800,6);
line5.shapeColor = "white";
var line6 = createSprite(0,260,800,6);
line6.shapeColor = "white";
var line7 = createSprite(20,380,6,800);
line7.shapeColor =  "white";
var line8  = createSprite(24,381,800,6);
line8.shapeColor = "white";
var line9 = createSprite(18,20,800,6);
line9.shapeColor = "white";
var line10 = createSprite(380,385,6,800);
line10.shapeColor = "white";




//objects
var striker = createSprite(200, 200,10,10);
striker.shapeColor = "white";
striker.setAnimation("striker")
striker.scale = 0.5;

var  computerMallet = createSprite(200,50,50,10);
computerMallet.shapeColor = "silver";
var playerMallet1 = createSprite(200, 350,50,10);
playerMallet1.shapeColor = "silver";
var goal = createSprite(200, 34,100,20);
goal.shapeColor = "yellow";
var goal2 = createSprite(200, 368,100,20);
goal2.shapeColor = "yellow";

//different state of games 

var score1 = 0;
var computerscore = 0;




// sore different state
var gamestate = "serve";





function draw(){
  background("blue");
   createEdgeSprites();
   
 
  
  
    //place info text in the center
  if (gamestate === "serve") {
    fill("yellow")
    textSize(23)
    text("Press Space to Serve",120,180);
    
  }
  
   
    //display scores
    fill("yellow");
    textSize(20)
  text(score1, 30,240);
  text(computerscore, 30,160);
  
  
    //make mallet move with arrow keys
 if (keyDown("LEFT_ARROW")) {
   playerMallet1.x = playerMallet1.x-10;
    
  }
    if (keyDown("RIGHT_ARROW")) { 
   playerMallet1.x = playerMallet1.x+10;
    
  }
 if (keyDown("UP_ARROW")) {
   if (playerMallet1.y>270) {
     playerMallet1.y =playerMallet1.y-10;
     
   }
   }
     if (keyDown("DOWN_ARROW")) {
   if (playerMallet1.y<350) {
     playerMallet1.y =playerMallet1.y+10;
     
   }
   } 
  
  
  for (var i = 0; i < 400; i=i+20) {
  line(i,200,i+10,200);
}
  striker.bounceOff(topEdge);
  striker.bounceOff(bottomEdge);
  striker.bounceOff(leftEdge);
  striker.bounceOff(rightEdge);
  striker.bounceOff(playerMallet1);
  striker.bounceOff(computerMallet);
  playerMallet1.bounce(rightEdge);
   playerMallet1.bounce(leftEdge);
    computerMallet.bounce(rightEdge);
     computerMallet.bounce(leftEdge);
  
  computerMallet.x = striker.x;
  
  
  if (  keyDown("space") &&  gamestate === "serve") {
  
    serve();
    gamestate = "play";
  }
  
  
if (striker.isTouching(goal)|| striker.isTouching(goal2)) {
   if(striker.isTouching(goal)) {
     striker.bounceOff(goal)
      computerscore = computerscore + 1;
     
    }
  
    
    if(striker.isTouching(goal2)) {
      striker.bounceOff(goal2)
      score1 = score1 + 1;
    }
    reset();
    gamestate = "serve";
  }
  
  if (score1 === 5 || computerscore === 5){
    
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
    reset();
    gameState = "over";
  }
  
  if (keyDown("r") && gameState === "over") {
    
    score1 = 0;
    computerscore = 0;
   
    gamestate = "serve";
  }
    
    
    function serve() {
  striker.velocityX = 4;
  striker.velocityY = 7;
}
  function reset() {
  striker.x = 200;
  striker.y = 200;
  striker.velocityX = 0;
  striker.velocityY = 0;
}
  drawSprites();
}
  
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
