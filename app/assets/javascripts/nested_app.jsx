/* jshint esnext: true */

var Immutable = require('immutable'),
    React = require('react'),
    StateInput = require('./state_input'),
    Thing = require('./thing');

module.exports = class extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleWordChange = this.handleWordChange.bind(this);
    this.state = {things: Immutable.List.of({}, {}), word: ''};
  }

  handleAdd() {
    this.setState({things: this.state.things.push({})});
  }

  handleRemove() {
    this.setState({things: this.state.things.pop()});
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
