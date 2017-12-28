const React = require('react');
const {Link} = require(react-router);

class Home extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Home Page</h1>
                <p>Blah, blah, blah, blah</p>
                <Link to="about" className="btn btn-primary">About</Link>
            </div>
        );
    }
}

module.exports = Home;