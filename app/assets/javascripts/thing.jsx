/* jshint esnext: true */

var React = require('react');

module.exports = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tabId: 'a'};
  }

  handleClick(tabId, event) {
    event.preventDefault();
    console.log(tabId);
    this.setState({tabId: tabId});
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this.handleClick.bind(this, 'a')}>Tab A</a>
        <a href="#" onClick={this.handleClick.bind(this, 'b')}>Tab B</a>

        <p style={{background: (this.state.tabId == 'a' ? 'red' : 'yellow')}}>{this.state.tabId == 'a' ? 'a' : 'b'} {this.props.word}</p>
      </div>
    );
  }
};
