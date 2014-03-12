var LevelThree = function() {
  this.startLayer = 2;
  this.canMove = false;

  var layerOne = new Layer('yellow3', 'scene3-yellow', { image: 'bear', x: 100, y: 400 }, [
    new Dialogue('orangeitalic', "Wow, I haven't seen this in a long time. I wonder...")
  ], false);

  layerOne.attachItemCollectEvent(function() {
    DialogueManager.show();
    this.item.destroy();
    this.item = null;
    this.showDialogue = true;
    this.stageDialogue();
  });

  layerOne.dialogueCompleteEvent = (function() {
    this.layers[1].showDialogue = true;
  }).bind(this);

  var layerTwo = new Layer('blue3', 'scene3-blue', null, [
    new Dialogue('orange', "Hey!", "yellow"),
    new Dialogue('blue', "Yeah?", "blue"),
    new Dialogue('orange', "This is yours isn't it?!", "yellow"),
    new Dialogue('blue', "It's... oh my. Yeah, it is. I haven't seen it in years.", "blue"),
    new Dialogue('gray', "Looks a little run-down.", "gray"),
    new Dialogue('blue', "No, it's not!", "blue"),
    new Dialogue('gray', "The eye is falling out and half of the stuffing is gone.", "gray"),
    new Dialogue('blue', "It adds character!", "blue"),
    new Dialogue('gray', "It's filthy. You should throw it away.", "gray"),
    new Dialogue('blue', "Just let me have this.\nWe gave you back that silly little piece of paper."),
    new Dialogue('gray', "...Fine", "gray"),
    new Dialogue('orange', "...we're here.")
  ]);

  layerTwo.dialogueCompleteEvent = function() {
    keepsake.currentScreen.nextLevel();
  }

  var layerThree = new Layer('grey3', 'scene3-grey', null, [
    new Dialogue('gray', "Don't you think it's been long enough? I'm so tired."),
    new Dialogue('orange', "Not much longer."),
    new Dialogue('blue', "I think I can see it now."),
    new Dialogue('orange', "I'm glad you're starting to see it, too.")
  ], true);

  layerThree.dialogueCompleteEvent = (function() {
    this.canMove = true;
  }).bind(this);

  this.layers = [layerOne, layerTwo, layerThree];
}

LevelThree.prototype.cleanup = function() {
  LevelHelpers.cleanup(this);
};

LevelThree.prototype.getCurrentLayer = function() {
  return this.layers[this.currentLayer];
}

LevelThree.prototype.nextDialogue = function() {
  this.getCurrentLayer().nextDialogue();
}

LevelThree.prototype.stage = function() {
  this.currentLayer = this.startLayer;
  this.getCurrentLayer().stage();
}

LevelThree.prototype.switchLayer = function(i) {
  if(this.canMove) {
    LevelHelpers.switchLayer(this, i);
  }
}