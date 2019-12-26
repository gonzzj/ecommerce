import React from 'react';
import PropTypes from 'prop-types';
import Row from '../../grid/row';
import Column from '../../grid/column';
import Button from '../../button';

const Detail = ({ product }) => {
    console.log(product.item);
    return (<article className={'product product__big'}>
        <Row>
            <Column xs={'8'}>
                <img className={'product__image'} src={product.item.picture} alt={product.item.title}/>
            </Column>
            <Column xs={'4'}>
                <span className={'product__auxiliary'}>{product.item.condition + " - " + product.item.sold_quantity + " vendidos"}</span>
                <h2 className={'product__name'}>{product.item.title}</h2>
                <p className={'product__price'}>{product.item.price.currency + " " + product.item.price.amount}</p>
                <Button label={'Comprar'} classButton={'primary'} onClick={() => alert("Compraste el producto")}/>
            </Column>
        </Row>
        <Row>
            <Column xs={'12'}>
                <h3 className={'product__subtitle'}>Descripción del producto</h3>
                <p className={'product__description'}>{product.item.description}</p>
            </Column>
        </Row>
    </article>)
};

Detail.propTypes = {
    item: PropTypes.object
};

Detail.defaultProps = {
	item: {}
};

export default Detail;