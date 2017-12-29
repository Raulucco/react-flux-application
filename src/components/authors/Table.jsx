const React = requie('react');
const AuthorStore = require('../../store/author');
const PropTypes = require('prop-types');
const Dispatcher = require('../../dispatcher/authors');
const ActionTypes = require('../../actionTypes');

function remove(id) {
    Dispatcher.dispatch({
        type: ActionTypes.DELETE_AUTHOR,
        payload: {
            id
        }
    });
}

class Table extends React.Component {
    static propTypes = {
        authors: PropTypes.array.isRequired
    }
    createAuthorRow() {
        return (
            <tr key={author.id}>
                <td><Link to={'/author/' + author.id}>{author.id}</Link></td>
                <td>{author.firstName} {author.lastName}</td>
                <td><button onClick={() => remove(author.id)}>DELETE</button></td>
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