import React from 'react';
import PropTypes from 'prop-types';

const Column = props => {
    const { xs, sm, md, lg, children } = props;  

    const colXS = 'col-xs' + (xs && '-' + xs);
    const colSM = 'col-sm' + (sm && '-' + sm);
    const colMD = 'col-md' + (md && '-' + md);
    const colLG = 'col-lg' + (lg && '-' + lg);

    return (
        <div className={[colXS, colSM, colMD, colLG].join(' ')}>
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