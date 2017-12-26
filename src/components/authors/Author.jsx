const React = requie('react');
const AuthorApi = require('../../../api/author');

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        };
        this.createAuthorRow = this.createAuthorRow.bind(this);
    }

    createAuthorRow(author) {
        return (
            <tr key={author.id}>
                <td><a href={'#/author' + author.id}>{author.id}</a></td>
                <td>{author.firstName} {author.lastName}</td>
            </tr>
        );
    }

    componentWillMount() {
        this.setState({
            authors: AuthorApi.getAllAuthors()
        });
    }

    render() {
        return (
            <div className="authors">
                <h1>Authors</h1>
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.state.authors.map(this.createAuthorRow)}
                    </tbody>
                </table>
            </div>
        );
    }
}

module.exports = Authors;