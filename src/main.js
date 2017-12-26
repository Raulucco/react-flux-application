global.jQuery = require('jquery');
global.$ = global.jQuery;

const React = require('react');
const Home = require('./components/Home');
const About = require('./components/about/About');
const Header = require('./components/header/withHeader');

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

    render() {
        return (
            <Header>
                {this.props.route === '/about' ? <About /> : <Home/>}
            </Header>
        );
    }
}

React.render(<App/>, document.getElementById('app'));