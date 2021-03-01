export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['li'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<li");
      this.appendValueInput("class")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendStatementInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</li>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#29C598");
   this.setTooltip("Create a list item");
   this.setHelpUrl("");
    }
  };

  Blocks['ul'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<ul");
      this.appendValueInput("class")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendStatementInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</ul>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#29C598");
   this.setTooltip("Create an unordered list");
   this.setHelpUrl("");
    }
  };

  Blocks['ol'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<ol");
      this.appendValueInput("class")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendStatementInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</ol>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#29C598");
   this.setTooltip("Create an ordered list");
   this.setHelpUrl("");
    }
  };

  Blocks['select'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<select");
      this.appendValueInput("class")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendStatementInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</select>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#29C598");
   this.setTooltip("Create a select box");
   this.setHelpUrl("");
    }
  };

  Blocks['option'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("<option ");
      this.appendValueInput("attributes")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(">");
      this.appendValueInput("content")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("</option>");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#29C598");
   this.setTooltip("Select option");
   this.setHelpUrl("");
    }
  };
}
