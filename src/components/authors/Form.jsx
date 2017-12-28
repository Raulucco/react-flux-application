const React = require('react');

class Form  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit({
            firstName: this.firstName.value,
            lastName: this.lastName.value
        });
    }

    render() {
        return (
            <form name={this.props.name} onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text"
                        name="firstName"
                        className="form-control"
                        ref={(input) => this.firstName = input}
                        defaultValue={this.props.author.firstName}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text"
                        name="lastName"
                        className="form-control"
                        ref={(input) => this.lastName = input}
                        defaultValue={this.props.author.lastName}
                    />
                </div>

                <div>
                    <button type="submit" className="btn btn-default">Save</button>
                </div>
            </form>
        );
    }
}

module.exports = Form;