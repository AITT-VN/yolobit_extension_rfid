Blockly.Blocks['yolobit_rfid_detect'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "yolobit_rfid_detect",
        "message0": "RFID phát hiện thẻ",
        "colour": "#ae00ae",
        "output": "",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["yolobit_rfid_detect"] = function (block) {
  Blockly.Python.definitions_['import_rfid'] = "from yolobit_mfrc522 import RFID";
  Blockly.Python.definitions_['init_rfid'] = "rfid = RFID()";
  // TODO: Assemble Python into code variable.
  var code = 'rfid.isDetected()'
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['yolobit_rfid_readUID'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "yolobit_rfid_readUID",
        "message0": "RFID đọc UID của thẻ",
        "colour": "#ae00ae",
        "output": "",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["yolobit_rfid_readUID"] = function (block) {
  Blockly.Python.definitions_['import_rfid'] = "from yolobit_mfrc522 import RFID";
  Blockly.Python.definitions_['init_rfid'] = "rfid = RFID()";
  // TODO: Assemble Python into code variable.
  var code = 'rfid.readUID()'
  return [code, Blockly.Python.ORDER_NONE];
};
