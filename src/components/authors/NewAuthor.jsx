const React = require('react');
const Form = require('./Form');
const AuthorApi = require('../../../api/author');

class NewAuthor  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: {
                firstName: '',
                lastName: ''
            }
        };
    }

    handleSubmit(author) {
        AuthorApi.saveAuthor(author);
    }
    render() {
        return (
            <div>
                <h1>Add Author</h1>
                <Form author={this.state.author} onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

module.exports = NewAuthor;