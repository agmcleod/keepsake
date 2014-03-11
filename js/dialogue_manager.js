keepsake.DialogueManager = function() {

}

keepsake.DialogueManager.cleanup = function() {
  this.dialogueBox.destroy();
  this.instructionText.destroy();
  this.visible = false;
}

keepsake.DialogueManager.hide = function() {
  if(this.visible) {
    this.visible = false;
    this.dialogueBox.kill();
    this.instructionText.destroy();
  }
}

keepsake.DialogueManager.setupInstructions = function() {
  this.instructionText = game.add.bitmapText(600, 718, 'black', "Press Space to continue", 32);
}

keepsake.DialogueManager.show = function() {
  if(!this.visible) {
    this.visible = true;
    this.dialogueBox = game.add.sprite(0, game.height - 300, 'messagebox');
    this.setupInstructions();
  }
}

keepsake.DialogueManager.stage = function() {
  this.dialogueBox = game.add.sprite(0, game.height - 300, 'messagebox');
  this.visible = true;
  this.setupInstructions();
}

keepsake.DialogueManager.switchDialogue = function(dialogues, newIndex, currentIndex) {
  var d = dialogues[currentIndex];
  d.bitmapText.destroy();
  if(dialogues[newIndex]) {
    dialogues[newIndex].stageBitmapText();
    return true;
  }
  else {
    return false;
  }
}