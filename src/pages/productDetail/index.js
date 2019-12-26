import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import Container from '../../components/container';
import Detail from '../../components/product/detail';
import Row from '../../components/grid/row';
import Column from '../../components/grid/column';
import { isEmpty } from 'lodash';

const ProductDetail = ({match: { params: { id }}}) => {
   const [product, setProduct] = useState({});

   useEffect(() => {
      const fetchProduct = async () => {
         const res = await fetch(`${process.env.REACT_APP_PATH_SERVICE}/api/items/${id}`);
         const data = await res.json();
         
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
                     <Column xs={'12'}>
                        {!isEmpty(product) && (product.status !== 404 ? <Detail product={product}/> : <span>El código del producto no existe</span>)}
                     </Column>
                  </Row>
               </section>
            </Container>
         </main>
      </>
   );
};

export default ProductDetail;