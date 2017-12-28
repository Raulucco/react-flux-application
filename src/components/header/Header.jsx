const React = require('react');
const {Link} = require(react-router);

function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-default" >
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><Link to="app" >Home</Link></li>
                        <li><Link to="about" >About</Link></li>
                        <li><Link to="authors" >Authors</Link></li>
                    </ul>
                </div>
            </nav>
            {this.props.children}
        </div>
    );
}

module.exports = Header;