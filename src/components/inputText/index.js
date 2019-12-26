import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputText = props => {
	const { disabled, value, placeholder, classInput, onKeyDown } = props;
	const [inputValue, setInputValue] = useState(value);

	const handleChange = e => {
		setInputValue(e.target.value);
	};

	return (
		<input type="text" name="fname" value={inputValue} placeholder={placeholder} className={'input' + (classInput && ' ' + classInput)} disabled={disabled} onChange={handleChange} onKeyDown={onKeyDown} />
	);
};

InputText.propTypes = {
	disabled: PropTypes.bool,
    value: PropTypes.string,
	placeholder: PropTypes.string,
    classInput: PropTypes.string,
	onKeyDown: PropTypes.func
};

InputText.defaultProps = {
	disabled: false,
	value: '',
    placeholder: '',
    classInput: ''
};

export default InputText;
