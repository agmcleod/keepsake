var StartScreen = function() {
  this.dialogues = [
    new Dialogue('gray', "Why do we need to go back?\nThere's nothing for us there anymore."),
    new Dialogue('orange', "There just is. I know it. There's something\nwe forgot along the way."),
    new Dialogue('blue', "Are you sure? We've come so far.\nJust to go right back...")
  ];
  this.titleMusic = game.add.audio('title', 1, true);

  this.introFontObjects = Array(7);
}

StartScreen.prototype.cleanup = function() {
  this.titleMusic.stop();
  this.background.destroy();
  DialogueManager.cleanup();
}

StartScreen.prototype.keyEvent = function(key) {
  switch(key) {
    case 'ONE':
      this.stageDialogue();
      break;
    case 'TWO':
      keepsake.playScreen.currentLevel.startLayer = 1;
      this.stageDialogue();
      break;
    case 'THREE':
      keepsake.playScreen.currentLevel.startLayer = 2;
      this.stageDialogue();
      break;
  }
}

StartScreen.prototype.stage = function() {
  var y = 668;
  var x = 350;
  this.background = game.add.sprite(0, 0, 'title');

  var grayOne = game.add.bitmapText(x, y, 'gray', "Press ", 32);
  var offset = grayOne.textWidth
  var orange = game.add.bitmapText(x + offset, y, 'orange', '1', 32);
  offset += orange.textWidth;
  var grayTwo = game.add.bitmapText(x + offset, y, 'gray', ' or ', 32);
  offset += grayTwo.textWidth;
  var blue = game.add.bitmapText(x + offset, y, 'blue', '2', 32);
  offset += blue.textWidth;
  var grayThree = game.add.bitmapText(x + offset, y, 'gray', ' or ', 32);
  offset += grayThree.textWidth;
  var black = game.add.bitmapText(x + offset, y, 'black', '3', 32);
  offset += black.textWidth;
  var grayFour = game.add.bitmapText(x + offset, y, 'gray', ' to start.', 32);

  this.introFontObjects[0] = grayOne;
  this.introFontObjects[1] = orange;
  this.introFontObjects[2] = grayTwo;
  this.introFontObjects[3] = blue;
  this.introFontObjects[4] = grayThree;
  this.introFontObjects[5] = black;
  this.introFontObjects[6] = grayFour;

  this.titleMusic.play('', 0, 1, true);
}

StartScreen.prototype.spaceBarEvent = function() {
  var nextDialogue = this.currentDialogue + 1;
  if(DialogueManager.switchDialogue(this.dialogues, nextDialogue, this.currentDialogue)) {
    this.currentDialogue++;
  }
  else {
    loadPlayScreen();
  }
}

StartScreen.prototype.stageDialogue = function() {
  this.dialogueStaged = true;
  DialogueManager.stage();
  this.currentDialogue = 0;

  // this may trigger garbage collection, watch for pauses
  for(var i = 0; i < this.introFontObjects.length; i++) {
    this.introFontObjects[i].destroy();
  }
  this.introFontObjects = null;

  this.dialogues[0].stageBitmapText();
}

StartScreen.prototype.update = function() {
  
}
