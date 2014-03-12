DialogueManager = function() {

}

DialogueManager.cleanup = function() {
  this.dialogueBox.destroy();
  this.instructionText.destroy();
  this.visible = false;
}

DialogueManager.hide = function() {
  if(this.visible) {
    this.visible = false;
    this.dialogueBox.kill();
    this.instructionText.destroy();
  }
}

DialogueManager.setupInstructions = function() {
  this.instructionText = game.add.bitmapText(600, 718, 'black', "Press Space to continue", 32);
}

DialogueManager.show = function() {
  if(!this.visible) {
    this.visible = true;
    this.dialogueBox = game.add.sprite(0, game.height - 300, 'messagebox');
    this.setupInstructions();
  }
}

DialogueManager.stage = function() {
  this.dialogueBox = game.add.sprite(0, game.height - 300, 'messagebox');
  this.visible = true;
  this.setupInstructions();
}

DialogueManager.switchDialogue = function(dialogues, newIndex, currentIndex) {
  var d = dialogues[currentIndex];
  d.destroyBitmapText();
  if(dialogues[newIndex]) {
    dialogues[newIndex].stageBitmapText();
    return true;
  }
  else {
    return false;
  }
}