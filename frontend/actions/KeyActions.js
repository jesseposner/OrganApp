var dispatcher = require('../dispatcher/Dispatcher');

var KeyActions = {
  keyPressed: function (noteName) {
    dispatcher.dispatch({
      actionType: "ADD_KEY",
      noteName: noteName
    });
  },

  keyDepressed: function (noteName) {
    dispatcher.dispatch({
      actionType: "REMOVE_KEY",
      noteName: noteName
    });
  }
};

module.exports = KeyActions;
