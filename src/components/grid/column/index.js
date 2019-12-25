import React from 'react';
import PropTypes from 'prop-types';

const Column = props => {
    const { xs, children } = props;  

    const colXS = 'col-xs' + (xs && '-' + xs);

    return (
        <div className={colXS}>
            {children}
        </div>   
    )       
};

Column.defaultProps = {
    xs: '',
    sm: '',
    md: '',
    lg: ''
};

Column.propTypes = {
    children: PropTypes.node,
    xs: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string
};

export default Column;