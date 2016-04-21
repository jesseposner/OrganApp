var React = require('react'),
    TONES = require('../constants/tones'),
    OrganKey = require('./organ_key');

var Organ = React.createClass({
  render: function() {
    var keyArr = [];
    for (var tone in TONES) {
      keyArr.push(<OrganKey key={tone} noteName={tone}/>);
    }

    return (
      <div>
        {keyArr}
      </div>
    );
  }

});

module.exports = Organ;
