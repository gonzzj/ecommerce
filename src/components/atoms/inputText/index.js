import React from 'react';
import PropTypes from 'prop-types';

const InputText = props => {
	const { disabled, value, onChange, placeholder, classInput, onKeyDown } = props;

	return (
		<input type="text" name="fname" value={value} placeholder={placeholder} className={'input' + (classInput && ' ' + classInput)} disabled={disabled} onChange={onChange} onKeyDown={onKeyDown} />
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
