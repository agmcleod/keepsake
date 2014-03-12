var PlayScreen = function() {
  var levelOne = new LevelOne();
  var levelTwo = new LevelTwo();
  var levelThree = new LevelThree();
  this.levels = [levelOne, levelTwo, levelThree];
  this.currentLevelIndex = 0;
  this.currentLevel = this.levels[0];
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

PlayScreen.prototype.nextLevel = function() {
  this.currentLevelIndex++;
  if(this.levels[this.currentLevelIndex]) {
    this.currentLevel.cleanup();
    this.currentLevel = this.levels[this.currentLevelIndex];
    this.currentLevel.stage();
  }
};

PlayScreen.prototype.stage = function() {
  this.currentLevel.stage();
}

PlayScreen.prototype.spaceBarEvent = function() {
  this.currentLevel.nextDialogue();
}

PlayScreen.prototype.update = function() {
  
}