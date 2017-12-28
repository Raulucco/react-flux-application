const React = require('react');
const {Redirect} = require('react-router');
const Form = require('./Form');
const Toastr = require('toastr');
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

    componentWillMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            this.setState({
                author: AuthorApi.getAuthorById(this.props.match.params.id)
            });
        }
    }

    handleSubmit(author) {
        AuthorApi.saveAuthor(author);
        this.setState({saved: true}, () => Toastr.success('Saved'));
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