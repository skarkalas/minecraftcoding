Blockly.Blocks['minecraft_move_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move forward");
    this.appendValueInput("distance")
        .setCheck("Number")
        .appendField("by");
    this.appendDummyInput()
        .appendField("step(s)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("move forward");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_move_backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move backward");
    this.appendValueInput("distance")
        .setCheck("Number")
        .appendField("by");
    this.appendDummyInput()
        .appendField("step(s)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("move forward");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_player_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("player position");
    this.setOutput(true, "Array");
    this.setColour(270);
 this.setTooltip("player position");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_cursor_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("cursor position");
    this.setOutput(true, "Array");
    this.setColour(270);
 this.setTooltip("cursor position");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_move_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move left");
    this.appendValueInput("distance")
        .setCheck("Number")
        .appendField("by");
    this.appendDummyInput()
        .appendField("step(s)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("move left");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_move_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move right");
    this.appendValueInput("distance")
        .setCheck("Number")
        .appendField("by");
    this.appendDummyInput()
        .appendField("step(s)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("move right");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_move_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move up");
    this.appendValueInput("distance")
        .setCheck("Number")
        .appendField("by");
    this.appendDummyInput()
        .appendField("step(s)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("move up");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_move_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move down");
    this.appendValueInput("distance")
        .setCheck("Number")
        .appendField("by");
    this.appendDummyInput()
        .appendField("step(s)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("move down");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_turn_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn right by");
    this.appendEndRowInput()
        .appendField(new Blockly.FieldAngle(90), "degrees")
        .appendField("degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("turn right");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_turn_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn left by");
    this.appendEndRowInput()
        .appendField(new Blockly.FieldAngle(90), "degrees")
        .appendField("degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("turn left");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_turn_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn up by");
    this.appendEndRowInput()
        .appendField(new Blockly.FieldAngle(90), "degrees")
        .appendField("degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("turn up");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_turn_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn down by");
    this.appendEndRowInput()
        .appendField(new Blockly.FieldAngle(90), "degrees")
        .appendField("degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("turn down");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_select_grass'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("select grass")
        .appendField(new Blockly.FieldImage("http://127.0.0.1:5500/textures/grassInventory.png", 30, 30, { alt: "*", flipRtl: "FALSE" }));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("select grass");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_select_dirt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("select dirt")
        .appendField(new Blockly.FieldImage("http://127.0.0.1:5500/textures/dirtInventory.png", 30, 30, { alt: "*", flipRtl: "FALSE" }));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("select dirt");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_select_stone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("select stone")
        .appendField(new Blockly.FieldImage("http://127.0.0.1:5500/textures/stoneInventory.png", 30, 30, { alt: "*", flipRtl: "FALSE" }));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("select stone");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_select_wood'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("select wood")
        .appendField(new Blockly.FieldImage("http://127.0.0.1:5500/textures/wwoodInventory.png", 30, 30, { alt: "*", flipRtl: "FALSE" }));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("select wood");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_select_brick'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("select brick")
        .appendField(new Blockly.FieldImage("http://127.0.0.1:5500/textures/brickInventory.png", 30, 30, { alt: "*", flipRtl: "FALSE" }));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("select brick");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_create_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("create block at position");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x:");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y:");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("z:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("create block");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minecraft_destroy_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("destroy block at position");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x:");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y:");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("z:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("destroy block");
 this.setHelpUrl("");
  }
};