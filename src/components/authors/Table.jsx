const React = requie('react');
const AuthorApi = require('../../../api/author');

class Table extends React.Component {
    createAuthorRow() {
        return (
            <tr key={author.id}>
                <td><a href={'#/author' + author.id}>{author.id}</a></td>
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

Table.propTypes = {
    authors: React.PropTypes.array.isRequired
};

module.exports = Table;