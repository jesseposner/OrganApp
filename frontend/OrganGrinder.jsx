var React = require('react'),
    ReactDOM = require('react-dom'),
    Organ = require('./components/organ'),
    KeyListener = require('./util/key_listener');

var OrganGrinder = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Organ</h1>
        <Organ />
      </div>
    );
  }

});

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<OrganGrinder />, document.getElementById('root'));
});
