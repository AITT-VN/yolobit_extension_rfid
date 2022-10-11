Blockly.Blocks['yolobit_rfid_detect'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "yolobit_rfid_detect",
        "message0": "RFID phát hiện thẻ mới %1 âm báo %2",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "field_checkbox",
            "name": "alarm",
            "checked": true
          }
        ],
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
  var checkbox_alarm = block.getFieldValue('alarm') === 'TRUE';
  // TODO: Assemble Python into code variable.
  if (checkbox_alarm) {
    var code = 'rfid.isDetected(alarm=True)';
  } else {
    var code = 'rfid.isDetected(alarm=False)';
  }
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['yolobit_rfid_readUID'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "yolobit_rfid_readUID",
        "message0": "RFID đọc UID của thẻ %1 âm báo %2",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "field_checkbox",
            "name": "alarm",
            "checked": true
          }
        ],
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
  var checkbox_alarm = block.getFieldValue('alarm') === 'TRUE';
  // TODO: Assemble Python into code variable.
  if (checkbox_alarm) {
    var code = 'rfid.readUID(alarm=True)';
  } else {
    var code = 'rfid.readUID(alarm=False)';
  }

  return [code, Blockly.Python.ORDER_NONE];
};
