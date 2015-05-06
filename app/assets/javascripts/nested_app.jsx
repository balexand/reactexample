/* jshint esnext: true */

var React = require('react'),
    StateInput = require('./state_input'),
    Thing = require('./thing');

module.exports = class extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleWordChange = this.handleWordChange.bind(this);
    this.state = {things: [{}, {}], word: ''};
  }

  handleAdd() {
    this.state.things.push({});
    this.setState({things: this.state.things});
  }

  handleRemove() {
    this.state.things.pop();
    this.setState({things: this.state.things});
  }

  handleWordChange(word) {
    this.setState({word: word});
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleRemove}>Remove</button>
        <br/>
        <br/>
        <StateInput onWordChange={this.handleWordChange} />
        <p>The word is {this.state.word}</p>

        {this.state.things.map((thing, index) => {
          return <Thing key={index} word={this.state.word} />;
        })}
      </div>
    );
  }
};
