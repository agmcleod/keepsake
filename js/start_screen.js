var StartScreen = function() {
  this.dialogues = [{
    font: "",
    text: "Why do we need to go back? There's nothing for us there anymore."
  }];
  this.titleMusic = game.add.audio('title');
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
  game.add.bitmapText(x + offset, y, ' to start.', { font: keepsake.GRAY_FONT, align: 'left' });
  this.titleMusic.play();
}

StartScreen.prototype.stageDialogue = function() {
  this.dialogueStaged = true;
  this.dialogueBox = game.add.sprite(0, game.height - 300, 'messagebox');
}

StartScreen.prototype.update = function() {
  if(game.input.keyboard.isDown(Phaser.Keyboard.ONE)) {
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