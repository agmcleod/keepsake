var LevelHelpers = function() {}

LevelHelpers.cleanup = function(level) {
  for(var i = 0; i < level.layers.length; i++) {
    level.layers[i].cleanup();
  }
}

LevelHelpers.switchLayer = function(level, i) {
  level.getCurrentLayer().hide();
  level.currentLayer = i;
  level.getCurrentLayer().stage();
}