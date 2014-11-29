var React = require('react');

var AppBar = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function() {
    var title = this.props.title ? <h1>{this.props.title}</h1> : '';

    return (
      <nav className="toolbar">
        {title}
      </nav>
    )
  }
});

module.exports = AppBar;
