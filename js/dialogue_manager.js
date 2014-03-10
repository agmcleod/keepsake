keepsake.DialogueManager = function() {

}

keepsake.DialogueManager.cleanup = function() {
  this.dialogueBox.destroy();
  this.instructionText.destroy();
}

keepsake.DialogueManager.hide = function() {
  this.dialogueBox.kill();
  this.instructionText.destroy();
}

keepsake.DialogueManager.setupInstructions = function() {
  this.instructionText = game.add.bitmapText(600, 718, "Press Space to continue", { font: keepsake.BLACK_FONT, align: 'left' });
}

keepsake.DialogueManager.show = function() {
  this.dialogueBox.revive();
  this.setupInstructions();
}

keepsake.DialogueManager.stage = function() {
  this.dialogueBox = game.add.sprite(0, game.height - 300, 'messagebox');
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