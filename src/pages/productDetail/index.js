import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import Header from '../../components/header';
import Container from '../../components/container';
import Detail from '../../components/product/detail';
import Row from '../../components/grid/row';
import Column from '../../components/grid/column';
import Breadcrumb from '../../components/breadcrumb';
import { isEmpty } from 'lodash';
import { getMessageLabel } from '../../messages/messages';

const ProductDetail = ({match: { params: { id }}}) => {
   const [endReq, setEndReq] = useState(false);
   const [product, setProduct] = useState({});

   useEffect(() => {
      const fetchProduct = async () => {
         const res = await fetch(`${process.env.REACT_APP_PATH_SERVICE}/api/items/${id}`);
         const data = await res.json();
         
         console.log(data);
         setEndReq(true);
         setProduct(data);
      };

      fetchProduct();
   }, [id]);

   return (
      <>
         <Header/>
         <main>
            <Container>
               <section>
                  <Row>
                     <Column>
                        <Breadcrumb/>
                     </Column>
                  </Row>
                  <Row>
                     <Column xs={'12'}>
                        {endReq ? (!isEmpty(product) && (product.status !== 404 ? <Detail product={product}/> : <span>{getMessageLabel('productNotFound')}</span>)) 
                           : <ReactLoading className={"loading__spinner"} type={'spin'} color={'#999'} height={125} width={125} />}
                     </Column>
                  </Row>
               </section>
            </Container>
         </main>
      </>
   );
};

export default ProductDetail;