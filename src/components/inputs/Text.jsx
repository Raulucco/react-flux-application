const React = requie('react');
const PropTypes = require('prop-types');

class Input extends React.Component {
    static PropTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        setRef: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        error: PropTypes.string.isRequired
    }
    render() {
        const wrapperClass = `${this.props.error ? 'has-error': ''} form-group`;
        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <input type="text"
                        name={this.props.name}
                        className="form-control"
                        ref={this.props.setRef}
                        defaultValue={this.props.value}
                        onChange={this.props.onChange}
                    />
                    <div className="input">{this.props.error}</div>
                </div>
            </div>
        );
    }
}

module.exports = Input;