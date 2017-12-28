const React = require('react');
const PropTypes = require('prop-types');
const Text = require('../inputs/Text');
const {Prompt} = require('react-router');

class Form  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            needsToBeSaved: false,
            errors: {
                firstName: '',
                lastName: ''
            }
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.validateFirstName = this.validateName.bind(this, 'firstName');
        this.validateLastName = this.validateName.bind(this, 'lastName');
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.errors.firstName || this.state.errors.lastName) {
            return;
        }
        this.setState({needsToBeSaved: false});
        this.props.onSubmit({
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            id: this.props.author.id
        });
    }

    setRef(name, ref) {
        this[name] = ref;
    }

    validateName(name, event) {
        const control = this[name];
        if (!control.value && !this.state.errors[name]) {
            this.setState({
                errors: {
                    ...this.state.erros,
                    [name]: 'Value can not be empty'
                }
            });
        } else if (control.value && this.state.errors[name]) {
            this.setState({
                errors: {
                    ...this.state.erros,
                    [name]: ''
                }
            });
        }

        if (control.value) {
            this.setState({needsToBeSaved: true});
        }
    }

    render() {
        return (
            <form name={this.props.name} onSubmit={this.onSubmit}>
                <Text value={this.props.author.firstName}
                    name="firstName"
                    label="First Name:"
                    setRef={this.setRef.bind(this, 'firstName')}
                    onChange={this.validateFirstName}
                    error={this.state.errors.firstName}
                />
                <Text value={this.props.author.firstName}
                    name="last"
                    label="Last Name:"
                    setRef={this.setRef.bind(this, 'lastName')}
                    onChange={this.validateLastName}
                />

                <div>
                    <button type="submit" className="btn btn-default">Save</button>
                </div>
                <Prompt when={this.state.needsToBeSaved} message="blah blah blah blah" />
            </form>
        );
    }
}

module.exports = Form;