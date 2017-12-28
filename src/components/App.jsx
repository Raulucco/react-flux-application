const React = require('react');
const {RouteHandler} = require('react-router');
const Header = require('./components/header/Header');

class App extends React.Component {
    render() {
        return (
            <Header>
                <div className="constainer-fluid">
                    <RouteHandler />
                </div>
            </Header>
        );
    }
}

module.exports = App;