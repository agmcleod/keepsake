var PlayScreen = function() {
  this.levelOne = new LevelOne();
}

PlayScreen.prototype.keyEvent = function(key) {
  switch(key) {
    case 'ONE':
      this.currentLevel.switchLayer(0);
      break;
    case 'TWO':
      this.currentLevel.switchLayer(1);
      break;
    case 'THREE':
      this.currentLevel.switchLayer(2);
      break;
  }
}

PlayScreen.prototype.stage = function() {
  this.levelOne.stage();
  this.currentLevel = this.levelOne;
}

PlayScreen.prototype.spaceBarEvent = function() {
  this.currentLevel.nextDialogue();
}

PlayScreen.prototype.update = function() {
  
}