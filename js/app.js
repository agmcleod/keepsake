var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'app', { preload: preload, create: create, update: update });
var keepsake = {};

function preload() {
  // images
  game.load.spritesheet('bear', 'data/images/items/bear.png', 165, 180);
  game.load.image('bear-inventory', 'data/images/items/inventory/bear.png');
  game.load.image('blank', 'data/images/stage4/blank.png');

  game.load.image('blue1', 'data/images/stage1/blue1.png');
  game.load.image('blue2', 'data/images/stage2/blue2.png');
  game.load.image('blue3', 'data/images/stage3/blue3.png');
  game.load.image('blue4', 'data/images/stage4/blue.png');

  game.load.image('grey1', 'data/images/stage1/grey1.png');
  game.load.image('grey2', 'data/images/stage2/grey2.png');
  game.load.image('grey3', 'data/images/stage3/grey3.png');
  game.load.image('grey4', 'data/images/stage4/grey.png');

  game.load.image('inventory', 'data/images/inventory.png');
  game.load.image('messagebox', 'data/images/messagebox.png');

  game.load.spritesheet('paper', 'data/images/items/paper.png', 182, 117);
  game.load.image('paper-inventory', 'data/images/items/inventory/paper.png');
  game.load.spritesheet('ring', 'data/images/items/ring.png', 46, 42);
  game.load.image('ring-inventory', 'data/images/items/inventory/ring.png');  
  game.load.image('title', 'data/images/title.png');

  game.load.image('yellow1', 'data/images/stage1/yellow1.png');
  game.load.image('yellow2', 'data/images/stage2/yellow2.png');
  game.load.image('yellow3', 'data/images/stage3/yellow3.png');
  game.load.image('yellow4', 'data/images/stage4/yellow.png');

  // audio

  // shared
  game.load.audio('inventory', ['data/music/inventory.mp3']);
  game.load.audio('title', ['data/music/title.mp3']);
  game.load.audio('transition', ['data/music/transition.mp3']);

  // scene 1
  game.load.audio('scene1-blue', ['data/music/scene1/blue.mp3']);
  game.load.audio('scene1-grey', ['data/music/scene1/grey.mp3']);
  game.load.audio('scene1-yellow', ['data/music/scene1/yellow.mp3']);

  // scene 2
  game.load.audio('scene2-blue', ['data/music/scene2/blue.mp3']);
  game.load.audio('scene2-grey', ['data/music/scene2/grey.mp3']);
  game.load.audio('scene2-yellow', ['data/music/scene2/yellow.mp3']);

  // scene 3
  game.load.audio('scene3-blue', ['data/music/scene3/blue.mp3']);
  game.load.audio('scene3-grey', ['data/music/scene3/grey.mp3']);
  game.load.audio('scene3-yellow', ['data/music/scene3/yellow.mp3']);

  // scene 4
  game.load.audio('blue', ['data/music/scene4/blue.mp3']);
  game.load.audio('bluegrey', ['data/music/scene4/bluegrey.mp3']);
  game.load.audio('bluegreyyellow', ['data/music/scene4/bluegreyyellow.mp3']);
  game.load.audio('blueyellow', ['data/music/scene4/blueyellow.mp3']);
  game.load.audio('finale', ['data/music/scene4/finale.mp3']);
  game.load.audio('grey', ['data/music/scene4/grey.mp3']);
  game.load.audio('greyyellow', ['data/music/scene4/greyyellow.mp3']);
  game.load.audio('yellow', ['data/music/scene4/yellow.mp3']);

  game.load.bitmapFont('black', 'data/font/blackfont.png', 'data/font/blackfont.xml');
  game.load.bitmapFont('blackitalic', 'data/font/blackitalicfont.png', 'data/font/blackitalicfont.xml');
  game.load.bitmapFont('blue', 'data/font/bluefont.png', 'data/font/bluefont.xml');
  game.load.bitmapFont('blueitalic', 'data/font/blueitalicfont.png', 'data/font/blueitalicfont.xml');
  game.load.bitmapFont('gray', 'data/font/grayfont.png', 'data/font/grayfont.xml');
  game.load.bitmapFont('grayitalic', 'data/font/grayitalicfont.png', 'data/font/grayitalicfont.xml');
  game.load.bitmapFont('green', 'data/font/greenfont.png', 'data/font/greenfont.xml');
  game.load.bitmapFont('greenitalic', 'data/font/greenitalicfont.png', 'data/font/greenitalicfont.xml');
  game.load.bitmapFont('orange', 'data/font/orangefont.png', 'data/font/orangefont.xml');
  game.load.bitmapFont('orangeitalic', 'data/font/orangeitalicfont.png', 'data/font/orangeitalicfont.xml');
  game.load.bitmapFont('white', 'data/font/whitefont.png', 'data/font/whitefont.xml');
  game.load.bitmapFont('whiteitalic', 'data/font/whiteitalicfont.png', 'data/font/whiteitalicfont.xml');
}

function create() {

  keepsake.playScreen = new PlayScreen();
  keepsake.startScreen = new StartScreen();

  keepsake.startScreen.stage();
  keepsake.currentScreen = keepsake.startScreen;
  keepsake.space_key = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  keepsake.space_key.onDown.add(proxySpaceEvent, this);

  keepsake.one_key = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
  keepsake.two_key = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
  keepsake.three_key = game.input.keyboard.addKey(Phaser.Keyboard.THREE);

  keepsake.one_key.onDown.add(function() {
    keepsake.currentScreen.keyEvent('ONE')
  }, this);
  keepsake.two_key.onDown.add(function() {
    keepsake.currentScreen.keyEvent('TWO')
  }, this);
  keepsake.three_key.onDown.add(function() {
    keepsake.currentScreen.keyEvent('THREE')
  }, this);
}

function loadPlayScreen() {
  keepsake.startScreen.cleanup();
  keepsake.currentScreen = keepsake.playScreen;
  keepsake.currentScreen.stage();
}

function proxySpaceEvent() {
  keepsake.currentScreen.spaceBarEvent();
}

function update() {
  keepsake.currentScreen.update();
}