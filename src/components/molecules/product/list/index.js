import React from 'react';
import PropTypes from 'prop-types';
import Row from '../../../atoms/grid/row';
import Column from '../../../atoms/grid/column';
import { getMessageLabel } from '../../../../messages/messages';

const Detail = ({ item }) => {
    return (<article className={'product product__small'}>
        <Row>
            <Column xs={12} lg={9}>
                <div style={{ display: 'inline-flex'}}> 
                    <a href={"/items/" + item.id}><img className={'product__image'} src={item.picture} alt={item.title} /></a>   
                    <div>
                        <h4 className={'product__price'}>{getMessageLabel(item.price.currency) + " " + item.price.amount}</h4>
                        <a href={"/items/" + item.id} className={'product__name'}>{item.title}</a>
                    </div>
                </div>
            </Column>
            <Column xs={12} lg={3}>
                <span className={'product__shipping'}>{item.free_shipping && getMessageLabel('freeShipping')}</span>
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