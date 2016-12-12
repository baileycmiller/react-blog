var React = require('react');
var Display = require('./display');
import './stylesheets/application.scss';

var App = React.createClass ({
  render: function() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>This is my app</h2>
        </div>
        <div className="App-intro">
          <Display />
        </div>
      </div>
    );
  }
});

module.exports = App;
