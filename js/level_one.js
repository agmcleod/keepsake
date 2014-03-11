var LevelOne = function() {
  this.startLayer = 0;
  var layerOne = new Layer('yellow1', 'scene1-yellow', null, [
    new keepsake.Dialogue(keepsake.ORANGE_FONT, "Did you find something over there?"),
    new keepsake.Dialogue(keepsake.GRAY_FONT, "Yeah. Catch."),
    new keepsake.Dialogue(keepsake.GRAY_ITALIC_FONT, "**tosses ring**"),
    new keepsake.Dialogue(keepsake.ORANGE_FONT, "This can't be... is it?"),
    new keepsake.Dialogue(keepsake.BLUE_FONT, "What is it?"),
    new keepsake.Dialogue(keepsake.ORANGE_FONT, "It's... a ring."),
    new keepsake.Dialogue(keepsake.GRAY_FONT, "Who would wear something like that?"),
    new keepsake.Dialogue(keepsake.ORANGE_FONT, "It's mine. I lost it years ago."),
    new keepsake.Dialogue(keepsake.GRAY_FONT, "Where would you even get something like that?"),
    new keepsake.Dialogue(keepsake.ORANGE_FONT, "It's been passed down through the family."),
    new keepsake.Dialogue(keepsake.GRAY_FONT, "So can we go now? You've found what you're looking for right?"),
    new keepsake.Dialogue(keepsake.ORANGE_FONT, "This isn't what I'm looking for. I'm happy to have found it, but there's something else. We need to keep going.")
  ], false);

  var layerTwo = new Layer('blue1', 'scene1-blue', null, []);
  var layerThree = new Layer('grey1', 'scene1-grey', { image: 'ring', x: 300, y: 518 }, [
    new keepsake.Dialogue(keepsake.GRAY_ITALIC_FONT, "There's something on the ground here... maybe this is... It's a ring. Looks like something out of Wonderland. ...A bit tacky if you ask me.")
  ]);

  layerThree.attachItemCollectEvent(function() {
    this.showDialogue = true;
    keepsake.DialogueManager.show();
    this.item.destroy();
    this.dialogues[0].stageBitmapText();
  });

  this.layers = [layerOne, layerTwo, layerThree];
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
  this.getCurrentLayer().hide();
  this.currentLayer = i;
  this.getCurrentLayer().stage();
}