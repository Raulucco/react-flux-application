const React = require('react');

function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-default" >
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><a href="#/" >Home</a></li>
                        <li><a href="#/about" >About</a></li>
                        <li><a href="#/authors" >Authors</a></li>
                    </ul>
                </div>
            </nav>
            {this.props.children}
        </div>
    );
}

module.exports = Header;