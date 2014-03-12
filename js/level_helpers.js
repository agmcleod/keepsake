var LevelHelpers = function() {}

LevelHelpers.cleanup = function(level) {
  for(var i = 0; i < level.layers.length; i++) {
    level.layers[i].cleanup();
  }
}

LevelHelpers.drawTransition = function(level) {
  level.graphics.clear();
  level.graphics.lineStyle(0);
  level.graphics.beginFill(0xffffff, level.percent / 100);
  level.graphics.drawRect(0, 0, 1024, 768);
}

LevelHelpers.finishTransition = function(level) {
  level.graphics.destroy();
  level.transitioning = false;
}

LevelHelpers.switchLayer = function(level, i) {
  level.getCurrentLayer().hide();
  level.currentLayer = i;
  level.getCurrentLayer().stage();
  LevelHelpers.transitionIn(level, 400);
}

LevelHelpers.transitionIn = function(level, time) {
  if(time === null || typeof time === 'undefined') {
    time = 800;
  }
  level.graphics = game.add.graphics(0, 0);
  level.transitioning = true;
  level.percent = 100;
  var tween = game.add.tween(level).to({ percent: 0 }, time, Phaser.Easing.Linear.None, true);
  tween.onComplete.add(level.finishTransition, level);
}