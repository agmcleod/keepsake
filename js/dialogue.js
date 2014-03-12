Dialogue = function(font, text) {
  this.font = font;
  this.text = text;
}

Dialogue.prototype.destroyBitmapText = function() {
  if(this.bitmapText) {
    this.bitmapText.destroy();
  }
}

Dialogue.prototype.stageBitmapText = function() {
  this.bitmapText = game.add.bitmapText(Dialogue.LEFT_TEXT_PADDING, Dialogue.Y, this.font, this.text, 32);
}

Dialogue.LEFT_TEXT_PADDING = 42;
Dialogue.MAX_TEXT_WIDTH = 940;
Dialogue.Y = 495;