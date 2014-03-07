keepsake.DialogueManager = function() {

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