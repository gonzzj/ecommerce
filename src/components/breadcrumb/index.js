import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = ({ items }) => (
    <div className={"breadcrumb"}>
        <a href="/" className={"breadcrumb__link"}>Electronicas</a>
        >
        <a href="/" className={"breadcrumb__link"}>Electronicas</a>
        {items.map(item => 
            <a href="/" className={"breadcrumb__link"}>{""}</a>
        )}
    </div>
);

Breadcrumb.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object)
};

Breadcrumb.defaultProps = {
	items: []
};

export default Breadcrumb;
