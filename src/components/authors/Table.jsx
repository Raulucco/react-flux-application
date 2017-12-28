const React = requie('react');
const AuthorApi = require('../../../api/author');
const PropTypes = require('prop-types');

class Table extends React.Component {
    static propTypes = {
        authors: PropTypes.array.isRequired
    }
    createAuthorRow() {
        return (
            <tr key={author.id}>
                <td><Link to={'/author/' + author.id}>{author.id}</Link></td>
                <td>{author.firstName} {author.lastName}</td>
            </tr>
        );
    }
    render() {
        const author = this.props;
        return (
            <table className="table">
            <thead>
                    <th>ID</th>
                    <th>Name</th>
                </thead>
                <tbody>
                    {this.props.authors.map(this.createAuthorRow)}
                </tbody>
            </table>
        );
    }
}

module.exports = Table;