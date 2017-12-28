global.jQuery = require('jquery');
global.$ = global.jQuery;

const React = require('react');
const App = require('./components/App');
const Router = require('react-router');
const routes = require('./routes');

Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});
