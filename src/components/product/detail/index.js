import React from 'react';
import PropTypes from 'prop-types';
import Row from '../../grid/row';
import Column from '../../grid/column';
import Button from '../../button';

const Detail = ({ item }) => (
    <article className={'product__detail'}>
        <Row>
            <Column xs={'8'}>
                <img className={'product__image'} src="https://t3.ftcdn.net/jpg/02/12/43/28/240_F_212432820_Zf6CaVMwOXFIylDOEDqNqzURaYa7CHHc.jpg" alt=""/>
            </Column>
            <Column xs={'4'}>
                <span className={'product__auxiliary'}>Nuevo - 244 vendidos</span>
                <h2 className={'product__name'}>Apple Ipod Touch</h2>
                <p className={'product__price'}>$ 3.444</p>
                <Button label={'Comprar'}/>
            </Column>
        </Row>
        <Row>
            <Column xs={'12'}>
                <h3 className={'product__subtitle'}>Descripción del producto</h3>
                <p className={'product__description'}>Lorem ipsum</p>
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