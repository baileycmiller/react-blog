var React = require('react');

var array = ["Car", "Boat"];

function cycle(i) {
  if (array[i] == "Car") {
    return "Boat";
  }
  else {
    return "Car";
  }
}

var Display = React.createClass ({
  render: function () {
    return <p>{cycle(0)}</p>;
  }
});

module.exports = Display;
