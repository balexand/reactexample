var React = require('react'),
    Foo = require('./foo'),
    Bar = require('./bar');

document.addEventListener("DOMContentLoaded", function(event) {
  React.render(<Foo/>, document.querySelector('p'));
});

console.log(Bar());
