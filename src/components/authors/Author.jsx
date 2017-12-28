const React = requie('react');
const AuthorApi = require('../../../api/author');
const Table = require('./Table');
const {Link} = require('react-router');

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        };
    }

    componentDidMount() {
        this.setState({
            authors: AuthorApi.getAllAuthors()
        });
    }

    render() {
        return (
            <div className="authors">
                <h1>Authors</h1>
                <Link to="new-author" className="btn btn-default">Add Author</Link>
                {this.state.authors.length && <Table authors={this.state.authors} />}
            </div>
        );
    }
}

module.exports = Authors;