global.jQuery = require('jquery');
global.$ = global.jQuery;

const React = require('react');
const Home = require('./components/Home');
const About = require('./components/about/About');
const Header = require('./components/header/Header');
const Author = require('./components/author/Author');

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            route: '/'
        };

        this.onHashChange = this.onHashChange.bind(this);
    }

    onHashChange(event) {
        this.setState({ route: global.location.hash.substr(1) || '/' });
    }

    componentWillMount() {
        global.addEventListener('hashchange', this.onHashChange);
    }

    componentWillUnmount() {
        global.removeEventListener('hashchange', this.onHashChange);
    }

    getPage() {
        switch(this.props.route) {
            case '/authors':
                return <Author/>;
            case '/about':
                return <About />;
            default:
                return <Home />;
        }
    }

    render() {
        return (
            <Header>
                {this.getPage()}
            </Header>
        );
    }
}

React.render(<App/>, document.getElementById('app'));