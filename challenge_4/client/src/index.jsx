const ReactDOM = require('react-dom');
const React = require('react');
const App = require('./components/app.jsx');

const test = React.createElement('h1', null, 'Hello')

// ReactDOM.render(< App />, document.getElementById('app'))
ReactDOM.render(< App />, document.getElementById('app'))