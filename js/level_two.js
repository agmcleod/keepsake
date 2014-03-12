var LevelTwo = function() {
  this.startLayer = 0;
  this.canMove = false;

  var layerOne = new Layer('yellow2', 'scene2-yellow', null, [
    new Dialogue('blue', "It feels like it's been hours."),
    new Dialogue('orange', "We're not there yet, but we're getting closer. Can't you feel it?"),
    new Dialogue('gray', "Not really, you still haven't told us why we're wasting our time like this."),
    new Dialogue('orange', "You'll understand when we get there.")
  ], true);

  layerOne.dialogueCompleteEvent = (function() {
    this.canMove = true;
  }).bind(this);

  var layerTwo = new Layer('blue2', 'scene2-blue', { image: 'paper', x: 800, y: 651 }, [
    new Dialogue('blueitalic', "This seems a little out of place...")
  ]);

  layerTwo.attachItemCollectEvent(function() {
    DialogueManager.show();
    this.item.destroy();
    this.item = null;
    this.showDialogue = true;
    this.stageDialogue();
  });

  layerTwo.dialogueCompleteEvent = (function() {
    this.layers[2].showDialogue = true;
  }).bind(this);

  var layerThree = new Layer('grey2', 'scene2-grey', null, [
    new Dialogue('gray', "Hey! Where did you get that?"),
    new Dialogue('blue', "Is this yours?"),
    new Dialogue('gray', "It must have fallen somewhere along the way."),
    new Dialogue('blue', "Maybe this is what you're looking for?"),
    new Dialogue('orange', "Let me see."),
    new Dialogue('orange', "..."),
    new Dialogue('orange', "No, that's not it."),
    new Dialogue('gray', "You just read it didn't you?"),
    new Dialogue('orange', "I'm sorry, I couldn't help it."),
    new Dialogue('blue', "If I knew you felt that way, I wouldnt have\nhanded it over."),
    new Dialogue('grayitalic', "snatches paper"),
    new Dialogue('gray', "You didn't see anything."),
    new Dialogue('orange', "If you say so. We still have to keep going. Come on.")
  ], false);

  layerThree.dialogueCompleteEvent = function() {
    keepsake.currentScreen.nextLevel();
  }

  this.layers = [layerOne, layerTwo, layerThree];
}

LevelTwo.prototype.cleanup = function() {
  LevelHelpers.cleanup(this);
};

LevelTwo.prototype.getCurrentLayer = function() {
  return this.layers[this.currentLayer];
}

LevelTwo.prototype.nextDialogue = function() {
  this.getCurrentLayer().nextDialogue();
}

LevelTwo.prototype.stage = function() {
  this.currentLayer = this.startLayer;
  this.getCurrentLayer().stage();
}

LevelTwo.prototype.switchLayer = function(i) {
  if(this.canMove) {
    LevelHelpers.switchLayer(this, i);
  }
}

LevelTwo.prototype.update = function() {}