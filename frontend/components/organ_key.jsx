var React = require('react'),
    Note = require('../util/note'),
    TONES = require('../constants/tones'),
    KeyStore = require('../stores/key_store');

function getKeyStoreState() {
  return {
    currentKeys: KeyStore.getKeys()
  };
}

var OrganKey = React.createClass({

  getInitialState: function() {
    return getKeyStoreState();
  },

  componentDidMount: function() {
    this.note = new Note(TONES[this.props.noteName]);
    this.removeToken = KeyStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.removeToken();
  },

  _onChange: function () {
    this.setState(getKeyStoreState());
    if (this.state.currentKeys.indexOf(this.props.noteName) !== -1) {
      this.note.start();
    } else {
      this.note.stop();
    }
  },

  render: function() {
    return (
      <div className="keys" />
    );
  }

});

module.exports = OrganKey;
