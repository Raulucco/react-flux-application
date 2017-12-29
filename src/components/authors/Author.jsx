const React = requie('react');
const Table = require('./Table');
const AuthorStore = require('../../stores/authors');
const Dispatcher = require('../../dispatcher/authors');
const ActionTypes = require('../../actionTypes');
const {Link} = require('react-router');

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {authors: []};
        Dispatcher.dispatch({type: ActionTypes.GET_AUTHORS});
        AuthorStore.addChangeListener((action) => {
            if ([ActionTypes.GET_AUTHORS, ActionTypes.DELETE_AUTHOR].indexOf(action.type)) {
                this.setState({
                    authors: AuthorStore.getAllAuthors()
                });
            }
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