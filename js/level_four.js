var LevelFour = function() {
  this.dialogues = [
    new Dialogue('blue', "This is it?"),
    new Dialogue('orange', "Yeah."),
    new Dialogue('gray', "I don't get it. It's like we came here for nothing."),
    new Dialogue('blue', "Now or never I suppose.")
  ];

  this.dialoguesTwo = [
    new Dialogue('green', "This is..."),
    new Dialogue('green', "From so long ago."),
    new Dialogue('green', "I remember it like it was yesterday. We were all there."),
    new Dialogue('green', "Is this what we were looking for?"),
    new Dialogue('green', "..."),
    new Dialogue('green', "Yeah. It was."),
    new Dialogue('green', "I needed to see it just one more time."),
    new Dialogue('green', "So I could find those feelings again."),
    new Dialogue('green', "I think I'll keep it this time."),
    new Dialogue('green', "We should move on though."),
    new Dialogue('green', "We shouldn't dwell here any longer than we need to."),
    new Dialogue('green', "This time I won't forget")
  ];
  this.currentDialogue = 0;
  this.bearRect = new Phaser.Rectangle(442, 325, 166, 217);
  this.paperRect = new Phaser.Rectangle(699, 436, 105, 155);
  this.ringRect = new Phaser.Rectangle(331, 488, 32, 45);
  this.titleMusic = game.add.audio('title', 1, true);
  this.musicString = '';
  this.showDialogue = true;
  this.currentDialogueSet = 0;
}

LevelFour.prototype.appendMusicString = function(value) {
  this.titleMusic.stop();
  if(value === "bear") {
    this.musicString = "blue" + this.musicString;
  }
  else if(value === "paper") {
    if(this.musicString === "") {
      this.musicString = "grey";
    }
    else if(this.musicString === "yellow") {
      this.musicString = "greyyellow";
    }
    else if(this.musicString === "blueyellow") {
      this.musicString = "bluegreyyellow";
    }
  }
  else if(value === "ring") {
    this.musicString += "yellow";
  }

  this.titleMusic = game.add.audio(this.musicString, 1, true);
  this.titleMusic.play('', 0, 1, true);
}

LevelFour.prototype.endScene = function() {
  this.graphics = game.add.graphics(0, 0);
  this.percent = 0.0;
  game.add.tween(this).to({ percent: 100 }, 4000, Phaser.Easing.Linear.None, true);
  this.titleMusic.stop();
  this.titleMusic = game.add.audio('finale', 1, true);
  this.titleMusic.play('', 0, 1, true);
}

LevelFour.prototype.loadSecondDialogue = function() {
  if(this.bearPlaced && this.paperPlaced && this.ringPlaced) {
    this.showDialogue = true;
    DialogueManager.show();
    this.dialoguesTwo[0].stageBitmapText();
  }
}

LevelFour.prototype.nextDialogue = function() {
  if(this.showDialogue) {
    if(this.currentDialogueSet === 0) {
      if(DialogueManager.switchDialogue(this.dialogues, this.currentDialogue + 1, this.currentDialogue)) {
        this.currentDialogue++;
      }
      else {
        this.currentDialogueSet = 1;
        this.currentDialogue = 0;
        this.showDialogue = false;
        DialogueManager.hide();
      }
    }
    else {
      if(DialogueManager.switchDialogue(this.dialoguesTwo, this.currentDialogue + 1, this.currentDialogue)) {
        this.currentDialogue++;
      }
      else {
        this.showDialogue = false;
        DialogueManager.cleanup();
        this.endScene();
      }
    }
  }
}

LevelFour.prototype.stage = function() {
  this.blankSprite = game.add.sprite(0, 0, 'blank');
  this.inventory = game.add.sprite(954, 0, 'inventory');
  var x = 970;
  this.inventoryImages = {
    bear: game.add.sprite(x, 5, 'bear-inventory'),
    paper: game.add.sprite(x, 60, 'paper-inventory'),
    ring: game.add.sprite(x, 120, 'ring-inventory')
  };
  this.titleMusic.play('', 0, 1, true);
  DialogueManager.show();
  this.dialogues[0].stageBitmapText();
}

LevelFour.prototype.switchLayer = function(i) {
  return;
}

LevelFour.prototype.update = function() {
  if(!this.showDialogue && game.input.mousePointer.isDown && (!this.bearPlaced || !this.paperPlaced || !this.ringPlaced)) {
    if(this.bearRect.contains(game.input.x, game.input.y) && !this.bearPlaced) {
      this.inventoryImages['bear'].destroy();
      this.appendMusicString('bear');
      game.add.sprite(0, 0, 'blue4');
      this.bearPlaced = true;
      this.loadSecondDialogue();
    }

    if(this.paperRect.contains(game.input.x, game.input.y) && !this.paperPlaced) {
      this.inventoryImages['paper'].destroy();
      this.appendMusicString('paper');
      game.add.sprite(0, 0, 'grey4');
      this.paperPlaced = true;
      this.loadSecondDialogue();
    }

    if(this.ringRect.contains(game.input.x, game.input.y) && !this.ringPlaced) {
      this.inventoryImages['ring'].destroy();
      this.appendMusicString('ring');
      game.add.sprite(0, 0, 'yellow4');
      this.ringPlaced = true;
      this.loadSecondDialogue();
    }
  }
  else if(this.graphics && !this.showCredits) {
    this.graphics.clear();
    this.graphics.lineStyle(0);
    this.graphics.beginFill(0xffffff, this.percent / 100);
    this.graphics.drawRect(0, 0, 1024, 768);
    if(this.percent >= 100) {
      this.showCredits = true;
      game.add.bitmapText(100, 200, 'black', "Programming: Aaron McLeod");
      game.add.bitmapText(100, 300, 'black', "Audio: Jake Butineau");
      game.add.bitmapText(100, 400, 'black', "Art: Sarah El Sherbini");
      game.add.bitmapText(100, 500, 'black', "Game design, story: Tyler Akey");
    }
  }
}