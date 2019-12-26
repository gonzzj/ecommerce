import React from 'react';
import PropTypes from 'prop-types';
import Row from '../../grid/row';
import Column from '../../grid/column';

const Detail = ({ item }) => {
    return (<article className={'product product__small'}>
        <Row>
            <Column xs={'12'} lg={'3'}>
                <a href={"/items/" + item.id}><img className={'product__image'} src={item.picture} alt={item.title} /></a>
            </Column>
            <Column xs={'12'} lg={'6'}>
                <h4 className={'product__price'}>{item.price.currency + " " + item.price.amount}</h4>
                <a href={"/items/" + item.id} className={'product__name'}>{item.title}</a>
            </Column>
            <Column xs={'12'} lg={'3'}>
                <span className={'product__shipping'}>{item.free_shipping && "¡Envio gratis!"}</span>
            </Column>
        </Row>
    </article>);
};

Detail.propTypes = {
    item: PropTypes.object
};

Detail.defaultProps = {
	item: {}
};

export default Detail;