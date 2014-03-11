keepsake.Dialogue = function(font, text) {
  this.font = font;
  this.text = text;
}

keepsake.Dialogue.prototype.stageBitmapText = function() {
  this.bitmapText = game.add.bitmapText(keepsake.Dialogue.LEFT_TEXT_PADDING, keepsake.Dialogue.Y, this.font, this.text, 32);
}

keepsake.Dialogue.LEFT_TEXT_PADDING = 42;
keepsake.Dialogue.MAX_TEXT_WIDTH = 940;
keepsake.Dialogue.Y = 495;