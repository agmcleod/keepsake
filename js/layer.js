var Layer = function(background, music, item, dialogues, showDialogue) {
  this.background = game.add.sprite(0, 0, background);
  this.background.kill();
  if(item) {
    this.item = game.add.sprite(item.x, item.y, item.image);
    this.item.inputEnabled = true;
    this.item.input.useHandCursor = true;
    this.item.animations.add('idle', [0]);
    this.item.animations.add('hover', [1]);
    this.item.animations.play('idle');
    this.item.events.onInputOver.add(this.overItem, this);
    this.item.events.onInputOut.add(this.outItem, this);
    this.item.kill();
  }
  this.music = game.add.audio(music, 1, true);
  this.dialogues = dialogues;
  this.showDialogue = showDialogue; 
}

Layer.prototype.cleanup = function() {
  this.music.stop();
  if(this.item) {
    this.item.destroy();
  }
  this.background.destroy();
}

Layer.prototype.hide = function() {
  this.music.stop();
  if(this.item) {
    this.item.kill();
  }
  this.background.kill();
  keepsake.DialogueManager.hide();
}

Layer.prototype.outItem = function() {
  
}

Layer.prototype.overItem = function() {

}

Layer.prototype.stage = function() {
  this.music.play('', 0, 1, true);
  if(this.item) {
    this.item.revive();
  }
  this.background.revive();
  if(this.showDialogue) {
    if(keepsake.DialogueManager.hidden) {
      keepsake.DialogueManager.show();
    }
    else {
      keepsake.DialogueManager.stage();
    }
  }
}