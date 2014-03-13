var LevelOne = function() {
  this.startLayer = 0;
  var layerOne = new Layer('yellow1', 'scene1-yellow', null, [
    new Dialogue('orange', "Did you find something over there?"),
    new Dialogue('gray', "Yeah. Catch."),
    new Dialogue('grayitalic', "tosses ring"),
    new Dialogue('orange', "This can't be... is it?"),
    new Dialogue('blue', "What is it?"),
    new Dialogue('orange', "It's... a ring."),
    new Dialogue('gray', "Who would wear something like that?"),
    new Dialogue('orange', "It's mine. I lost it years ago."),
    new Dialogue('gray', "Where would you even get something like that?"),
    new Dialogue('orange', "It's been passed down through the family."),
    new Dialogue('gray', "So can we go now? You've found what you're\nlooking for right?"),
    new Dialogue('orange', "This isn't what I'm looking for. I'm happy to have found it,\nbut there's something else. We need to keep going.")
  ], false);

  var layerTwo = new Layer('blue1', 'scene1-blue', null, []);
  var layerThree = new Layer('grey1', 'scene1-grey', { image: 'ring', x: 300, y: 518 }, [
    new Dialogue('grayitalic', "There's something on the ground here... maybe this is...\nIt's a ring. Looks like something out of Wonderland.\n...A bit tacky if you ask me.")
  ]);

  layerThree.attachItemCollectEvent(function() {
    keepsake.playScreen.pickupSound.play();
    DialogueManager.show();
    this.item.destroy();
    this.item = null;
    this.showDialogue = true;
    this.stageDialogue();
  });

  layerThree.dialogueCompleteEvent = (function() {
    this.layers[0].showDialogue = true;
  }).bind(this);

  layerOne.dialogueCompleteEvent = function() {
    keepsake.currentScreen.nextLevel();
  }

  this.layers = [layerOne, layerTwo, layerThree];
}

LevelOne.prototype.cleanup = function() {
  LevelHelpers.cleanup(this);
};

LevelOne.prototype.finishTransition = function() {
  LevelHelpers.finishTransition(this);
}

LevelOne.prototype.getCurrentLayer = function() {
  return this.layers[this.currentLayer];
}

LevelOne.prototype.nextDialogue = function() {
  this.getCurrentLayer().nextDialogue();
}

LevelOne.prototype.stage = function() {
  this.currentLayer = this.startLayer;
  this.getCurrentLayer().stage();
}

LevelOne.prototype.switchLayer = function(i) {
  LevelHelpers.switchLayer(this, i);
}

LevelOne.prototype.update = function() {
  if(this.transitioning) {
    LevelHelpers.drawTransition(this);
  }
}