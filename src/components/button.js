var React = require('react');

var Button = React.createClass({
  render: function() {
    return (
      <button className="btn btn-raised">
        {this.props.children}
      </button>
    )
  }
});

module.exports = Button;

