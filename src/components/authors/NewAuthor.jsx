const React = require('react');
const {Redirect} = require('react-router');
const Toastr = require('toastr');
const {get} = require('lodash');
const Form = require('./Form');
const AuthorStore = require('../../stores/authors');
const Dispatcher = require('../../dispatcher/authors');
const ActionTypes = require('../../actionTypes');

class NewAuthor  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: AuthorStore.getAuthorById(get(this.props, 'match.params.id'))
        };
        Dispatcher.register((action) => {
            if (action.type === ActionTypes.GET_AUTHORS) {
                this.setState({
                    author: AuthorStore.getAuthorById(get(this.props, 'match.params.id'))
                });
            } else if ([ActionTypes.CREATE_AUTHOR, ActionTypes.UPDATE_AUTHOR].indexOf(action.type)) {
                this.setState({saved: true}, () => Toastr.success('Saved'));
            }
        });
    }

    handleSubmit(author) {
        Dispatcher.dispatch({
            type: author.id ? ActionTypes.UPDATE_AUTHOR : ActionTypes.CREATE_AUTHOR,
            payload: {
                author
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Add Author</h1>
                <Form author={this.state.author} onSubmit={this.handleSubmit}/>
                {
                    this.state.saved && <Redirect to="/authors" />
                }
            </div>
        );
    }
}

module.exports = NewAuthor;