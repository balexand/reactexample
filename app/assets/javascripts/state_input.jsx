/* jshint esnext: true */

var React = require('react');

module.exports = class extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onWordChange(event.target.value);
  }

  render() {
    return <input ref="input" onChange={this.handleChange} />;
  }
};
