import React from 'react';
import PropTypes from 'prop-types';
import Row from '../../grid/row';
import Column from '../../grid/column';

const Detail = ({ item }) => (
    <article className={'product__list'}>
        <Row>
            <Column xs={'3'}>
                <img className={'product__image'} src="https://t3.ftcdn.net/jpg/02/12/43/28/240_F_212432820_Zf6CaVMwOXFIylDOEDqNqzURaYa7CHHc.jpg" alt="" />
            </Column>
            <Column xs={'6'}>
                <h4 className={'product__price'}>$ 3.444</h4>
                <p className={'product__name'}>Apple Ipod Touch</p>
            </Column>
            <Column xs={'3'}>
                <span className={'product__city'}>Capital Federal</span>
            </Column>
        </Row>
    </article>
);

Detail.propTypes = {
    item: PropTypes.object
};

Detail.defaultProps = {
	item: {}
};

export default Detail;