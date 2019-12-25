import React from 'react';
import PropTypes from 'prop-types';

const Row = props => {
    const { children, align } = props;

    return (
        <div className={'row' + (align && ' ' + align)}>
            {children}
        </div>
    )
};

Row.defaultProps = {
	align: ''
};

Row.propTypes = {
	children: PropTypes.node
};

export default Row;