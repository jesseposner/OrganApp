var Store = require('flux/utils').Store,
    dispatcher = require('../dispatcher/dispatcher.js');

var KeyStore = new Store(dispatcher);

var _currentKeys = [];

function addKey (keyName) {
  if (_currentKeys.indexOf(keyName) === -1) _currentKeys.push(keyName);

}

function removeKey(keyName) {
  for (var i = 0; i < _currentKeys.length; i++) {
    if (_currentKeys[i] === keyName) {
      _currentKeys.splice(i, 1);
      return;
    }
  }
}

KeyStore.getKeys = function () {
  return _currentKeys.slice();
};

KeyStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "ADD_KEY":
      addKey(payload.noteName);
      KeyStore.__emitChange();
      break;

    case "REMOVE_KEY":
      removeKey(payload.noteName);
      KeyStore.__emitChange();
      break;
  }
};

module.exports = KeyStore;
