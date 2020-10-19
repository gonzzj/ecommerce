import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = ({ items }) => (
    <div className={"breadcrumb"}>
        {items.map((item, itemKey) => (
                <span key={itemKey}>
                    <a href="#" className={"breadcrumb__link"}>{item}</a>
                    <p>{">"}</p>
                </span>
            )
        )}
    </div>
);

Breadcrumb.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string)
};

Breadcrumb.defaultProps = {
	items: []
};

export default Breadcrumb;
