const React = require('react');

class About extends React.Component {
    static willTransitionTo(transition, params, query, callback) {

    }
    render() {
        return (
            <div className="jumbotron">
                <h1>About Page</h1>
                <p>Blah, blah, blah, blah</p>
                <ul>
                    <li>bla blah</li>
                    <li>blab blah blah</li>
                    <li>bla blah</li>
                    <li>blab blah blah</li>
                    <li>bla blah</li>
                    <li>blab blah blah</li>
                </ul>
            </div>
        );
    }
}

module.exports = About;