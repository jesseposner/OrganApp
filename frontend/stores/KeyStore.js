var Store = require('flux/utils').Store,
    dispatcher = require('../dispatcher/Dispatcher.js');

var KeyStore = new Store(dispatcher);

var _currentKeys = [];

function addKey (keyName) {
  _currentKeys.push(keyName);
  KeyStore.__emitChange();
}

function removeKey(keyName) {
  for (var i = 0; i < _currentKeys.length; i++) {
    if (_currentKeys[i] === keyName) {
      _currentKeys.splice(i, 1);
      return;
    }
  }
}

KeyStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "ADD_KEY":
      addKey(payload.noteName);
      break;

    case "REMOVE_KEY":
      removeKey(payload.noteName);
      break;
  }
};
