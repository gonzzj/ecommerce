import React from 'react';
import PropTypes from 'prop-types';

const InputText = props => {
	const { disabled, onChange, value, placeholder, classInput } = props;

	return (
		<input type="text" name="fname" value={value} placeholder={placeholder} className={'input' + (classInput && ' ' + classInput)} disabled={disabled} onChange={onChange}/>
	);
};

InputText.propTypes = {
	disabled: PropTypes.bool,
    value: PropTypes.string,
	placeholder: PropTypes.string,
    classInput: PropTypes.string,
	onChange: PropTypes.func
};

InputText.defaultProps = {
	disabled: false,
	value: '',
    placeholder: '',
    classInput: '',
	onChange: () => console.log("Trigger Event")
};

export default InputText;
