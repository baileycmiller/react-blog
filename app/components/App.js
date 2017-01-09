var React = require('react');
var Header = require('./Header');
var FirstPost = require('../posts/FirstPost');
var SecondPost = require('../posts/SecondPost');
var ThirdPost = require('../posts/ThirdPost');

import '../stylesheets/application.scss';

var App = React.createClass ({
  render: function() {
    return (
      <div className="app">
        <Header/>
        <div>
          <ThirdPost />
          <SecondPost />
          <FirstPost />
        </div>
      </div>
    );
  }
});

module.exports = App;
