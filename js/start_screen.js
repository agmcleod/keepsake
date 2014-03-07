var StartScreen = function() {
  this.dialogues = [
    new keepsake.Dialogue(keepsake.GRAY_FONT, "Why do we need to go back? There's nothing for us there anymore."),
    new keepsake.Dialogue(keepsake.ORANGE_FONT, "There just is. I know it. There's something we forgot along the way."),
    new keepsake.Dialogue(keepsake.BLUE_FONT, "Are you sure? We've come so far. Just to go right back...")
  ];
  this.titleMusic = game.add.audio('title', 1, true);

  this.introFontObjects = Array(7);
}

StartScreen.prototype.stage = function() {
  var y = 668;
  var x = 350;
  game.add.sprite(0, 0, 'title');

  var grayOne = game.add.bitmapText(x, y, "Press ", { font: keepsake.GRAY_FONT, align: 'left' });
  var offset = grayOne.width
  var orange = game.add.bitmapText(x + offset, y, '1', { font: keepsake.ORANGE_FONT, align: 'left' });
  offset += orange.width;
  var grayTwo = game.add.bitmapText(x + offset, y, ' or ', { font: keepsake.GRAY_FONT, align: 'left' });
  offset += grayTwo.width;
  var blue = game.add.bitmapText(x + offset, y, '2', { font: keepsake.BLUE_FONT, align: 'left' });
  offset += blue.width;
  var grayThree = game.add.bitmapText(x + offset, y, ' or ', { font: keepsake.GRAY_FONT, align: 'left' });
  offset += grayThree.width;
  var black = game.add.bitmapText(x + offset, y, '3', { font: keepsake.BLACK_FONT, align: 'left' });
  offset += black.width;
  var grayFour = game.add.bitmapText(x + offset, y, ' to start.', { font: keepsake.GRAY_FONT, align: 'left' });

  this.introFontObjects[0] = grayOne;
  this.introFontObjects[1] = orange;
  this.introFontObjects[2] = grayTwo;
  this.introFontObjects[3] = blue;
  this.introFontObjects[4] = grayThree;
  this.introFontObjects[5] = black;
  this.introFontObjects[6] = grayFour;

  this.titleMusic.play();
}

StartScreen.prototype.stageDialogue = function() {
  this.dialogueStaged = true;
  this.dialogueBox = game.add.sprite(0, game.height - 300, 'messagebox');
  this.currentDialogue = 0;

  // this may trigger garbage collection, watch for pauses
  for(var i = 0; i < this.introFontObjects.length; i++) {
    this.introFontObjects[i].destroy();
  }
  this.introFontObjects = null;

  this.dialogues[0].stageBitmapText();
}

StartScreen.prototype.update = function() {
  if(!this.dialogueStaged) {
    if(game.input.keyboard.justReleased(Phaser.Keyboard.ONE)) {
      this.transition = 1;
      this.stageDialogue();
    }

    if(game.input.keyboard.isDown(Phaser.Keyboard.TWO)) {
      this.transition = 2;
      this.stageDialogue();
    }

    if(game.input.keyboard.isDown(Phaser.Keyboard.THREE)) {
      this.transition = 3;
      this.stageDialogue();
    }
  }
}