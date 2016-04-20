var KeyActions = require('../actions/KeyActions');

var Mapping = {
  65: "C0",
  66: "D0",
  67: "E0",
  68: "F0",
  69: "G0",
  70: "A0",
  71: "B0",
  72: "C1",
  73: "D1",
  74: "E1",
  75: "F1",
  76: "G1",
  77: "A1",
  78: "B1",
  79: "C2",
  80: "D2",
  81: "E2",
  82: "F2",
  83: "G2",
  84: "A2",
  85: "B2",
  86: "C3",
  87: "D3",
  88: "E3",
  89: "F3",
  90: "G3"
};

function keyPressed(event) {
  KeyActions.keyPressed(event.keyCode);
}

function keyDepressed(event) {
  KeyActions.keyDepressed(event.keyCode);
}

$(document).ready(function () {
  $(document).keyup(keyDepressed);
  $(document).keydown(keyPressed);
});
