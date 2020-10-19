import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
	const { disabled, label, onClick, classButton } = props;

	return (
		<button type="button" onClick={onClick} className={'button' + (classButton && ' ' + classButton)} disabled={disabled}>{label}</button>
	);
};

Button.propTypes = {
	disabled: PropTypes.bool,
	label: PropTypes.string,
    classButton: PropTypes.string,
	onClick: PropTypes.func
};

Button.defaultProps = {
	disabled: false,
	label: '',
    classButton: '',
	onClick: () => console.log("Trigger Event")
};

export default Button;
