var React = require('react'),
    NestedApp = require('./nested_app');

document.addEventListener("DOMContentLoaded", function(event) {
  React.render(<NestedApp/>, document.querySelector('#container'));
});
