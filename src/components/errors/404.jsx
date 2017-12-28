const React = require('react');
const {Link} = require(react-router);

class NotFound extends React.Component {
    render() {
        return (
            <div className="not-found">
                <h1>Not found</h1>
                <p>Blah, blah, blah, blah</p>
                <Link to="app" className="btn">Take to the begining</Link>
            </div>
        );
    }
}

module.exports = NotFound;