var StartScreen = function() {
  this.dialogues = [];
  this.titleMusic = game.add.audio('title');
}

StartScreen.prototype.stage = function() {
  var y = 668;
  var x = 350;
  game.add.sprite(0, 0, 'title');

  var grayOne = game.add.bitmapText(x, y, "Press ", { font: '32px AveriaGray', align: 'left' });
  var offset = grayOne.width
  var orange = game.add.bitmapText(x + offset, y, '1', { font: '32px AveriaOrange', align: 'left' });
  offset += orange.width;
  var grayTwo = game.add.bitmapText(x + offset, y, ' or ', { font: '32px AveriaGray', align: 'left' });
  offset += grayTwo.width;
  var blue = game.add.bitmapText(x + offset, y, '2', { font: '32px AveriaBlue', align: 'left' });
  offset += blue.width;
  var grayThree = game.add.bitmapText(x + offset, y, ' or ', { font: '32px AveriaGray', align: 'left' });
  offset += grayThree.width;
  var black = game.add.bitmapText(x + offset, y, '3', { font: '32px AveriaBlack', align: 'left' });
  offset += black.width;
  game.add.bitmapText(x + offset, y, ' to start.', { font: '32px AveriaGray', align: 'left' });
  this.titleMusic.play();
}