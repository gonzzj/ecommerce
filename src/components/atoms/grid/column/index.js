import React from 'react';
import PropTypes from 'prop-types';

const Column = props => {
    const { xs, sm, md, lg, children, offset } = props;  

    const colXS = 'col-xs' + (xs ? '-' + xs : '');
    const colSM = 'col-sm' + (sm ? '-' + sm : '');
    const colMD = 'col-md' + (md ? '-' + md : '');
    const colLG = 'col-lg' + (lg ? '-' + lg : '');

    return (
        <>
            {offset && <div className={'col-xs-' + offset}></div>}
            <div className={[colXS, colSM, colMD, colLG].join(' ')}>
                {children}
            </div>   
        </>
    )       
};

Column.propTypes = {
    children: PropTypes.node,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    offset: PropTypes.number
};

export default Column;