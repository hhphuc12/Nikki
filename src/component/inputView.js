import React, { Component } from 'react';

export default class InputView extends Component {
    render() {
        const {
            value,
            onChange,
            type,
            name,
            label,
            errorMessage
        } = this.props;

        return (
            <div class="form-group">
                <label>{label}</label>
                <div class="input-group">
                    <input
                        name={name}
                        type={type}
                        class="form-control login-input"
                        value={value}
                        onChange={onChange}
                    />
                </div>
                <p class="text-danger">{errorMessage || ''}</p>
            </div>
        );
    }
}

InputView.defaultProps = {
    value: '',
    onChange: () => {},
    type: 'text',
    name: 'no-name',
    label: '',
    errorMessage: null,
};