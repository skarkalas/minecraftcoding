javascript.javascriptGenerator.forBlock['minecraft_move_forward'] = function(block, generator) {
  var value_distance = generator.valueToCode(block, 'distance', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `Minecraft.moveForward(${value_distance})\n`;
  return code;
};

javascript.javascriptGenerator.forBlock['minecraft_move_backward'] = function(block, generator) {
  var value_distance = generator.valueToCode(block, 'distance', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `Minecraft.moveBackward(${value_distance})\n`;
  return code;
};

javascript.javascriptGenerator.forBlock['minecraft_player_position'] = function(block, generator) {
  // TODO: Assemble javascript into code variable.
  var code = `Minecraft.getPlayerPosition()\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['minecraft_cursor_position'] = function(block, generator) {
  // TODO: Assemble javascript into code variable.
  var code = `Minecraft.getCursorPosition()\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['minecraft_move_left'] = function(block, generator) {
  var value_distance = generator.valueToCode(block, 'distance', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `Minecraft.moveLeft(${value_distance})\n`;
  return code;
};

javascript.javascriptGenerator.forBlock['minecraft_move_right'] = function(block, generator) {
  var value_distance = generator.valueToCode(block, 'distance', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `Minecraft.moveRight(${value_distance})\n`;
  return code;
};

javascript.javascriptGenerator.forBlock['minecraft_move_up'] = function(block, generator) {
  var value_distance = generator.valueToCode(block, 'distance', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `Minecraft.moveUp(${value_distance})\n`;
  return code;
};

javascript.javascriptGenerator.forBlock['minecraft_move_down'] = function(block, generator) {
  var value_distance = generator.valueToCode(block, 'distance', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `Minecraft.moveDown(${value_distance})\n`;
  return code;
};

javascript.javascriptGenerator.forBlock['minecraft_turn_right'] = function(block, generator) {
  var angle_degrees = block.getFieldValue('degrees');
  // TODO: Assemble javascript into code variable.
  var code = `Minecraft.turnRight(${angle_degrees})\n`;
  return code;
};

javascript.javascriptGenerator.forBlock['minecraft_turn_left'] = function(block, generator) {
  var angle_degrees = block.getFieldValue('degrees');
  // TODO: Assemble javascript into code variable.
  var code = `Minecraft.turnLeft(${angle_degrees})\n`;
  return code;
};

javascript.javascriptGenerator.forBlock['minecraft_turn_up'] = function(block, generator) {
  var angle_degrees = block.getFieldValue('degrees');
  // TODO: Assemble javascript into code variable.
  var code = `Minecraft.turnUp(${angle_degrees})\n`;
  return code;
};

javascript.javascriptGenerator.forBlock['minecraft_turn_down'] = function(block, generator) {
  var angle_degrees = block.getFieldValue('degrees');
  // TODO: Assemble javascript into code variable.
  var code = `Minecraft.turnDown(${angle_degrees})\n`;
  return code;
};

javascript.javascriptGenerator.forBlock['minecraft_select_grass'] = function(block, generator) {
  // TODO: Assemble javascript into code variable.
  var code = `Minecraft.selectGrass()\n`;
  return code;
};

javascript.javascriptGenerator.forBlock['minecraft_select_dirt'] = function(block, generator) {
  // TODO: Assemble javascript into code variable.
  var code = `Minecraft.selectDirt()\n`;
  return code;
};

javascript.javascriptGenerator.forBlock['minecraft_select_stone'] = function(block, generator) {
  // TODO: Assemble javascript into code variable.
  var code = `Minecraft.selectStone()\n`;
  return code;
};

javascript.javascriptGenerator.forBlock['minecraft_select_wood'] = function(block, generator) {
  // TODO: Assemble javascript into code variable.
  var code = `Minecraft.selectWood()\n`;
  return code;
};

javascript.javascriptGenerator.forBlock['minecraft_select_brick'] = function(block, generator) {
  // TODO: Assemble javascript into code variable.
  var code = `Minecraft.selectBrick()\n`;
  return code;
};

javascript.javascriptGenerator.forBlock['minecraft_create_block'] = function(block, generator) {
  var value_x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
  var value_y = generator.valueToCode(block, 'y', javascript.Order.ATOMIC);
  var value_z = generator.valueToCode(block, 'z', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `Minecraft.createBlock(${value_x},${value_y},${value_z})\n`;
  return code;
};

javascript.javascriptGenerator.forBlock['minecraft_destroy_block'] = function(block, generator) {
  var value_x = generator.valueToCode(block, 'x', javascript.Order.ATOMIC);
  var value_y = generator.valueToCode(block, 'y', javascript.Order.ATOMIC);
  var value_z = generator.valueToCode(block, 'z', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `Minecraft.destroyBlock(${value_x},${value_y},${value_z})\n`;
  return code;
};