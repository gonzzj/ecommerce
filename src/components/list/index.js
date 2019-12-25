import React from 'react';
import PropTypes from 'prop-types';

const List = props => {
    const { items, Component } = props;

    return (
        <ul>
            <li><Component /></li>
            <li><Component /></li>
            {items.map(item => 
                <li></li>
            )}
        </ul>
    )
};

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    Component: PropTypes.elementType
};

List.defaultProps = {
	items: []
};

export default List;