import React from 'react';
import PropTypes from 'prop-types';

const List = props => {
    const { items, Component } = props;

    return (
        <ul>
            {items.map(item => 
                <li key={item.id}><Component item={item}/></li>
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