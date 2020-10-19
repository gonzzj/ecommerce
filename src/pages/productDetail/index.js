import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import Header from '../../components/molecules/header';
import Container from '../../components/atoms/container';
import Detail from '../../components/molecules/product/detail';
import Row from '../../components/atoms/grid/row';
import Column from '../../components/atoms/grid/column';
import Breadcrumb from '../../components/atoms/breadcrumb';
import { isEmpty } from 'lodash';
import { getMessageLabel } from '../../messages/messages';

const ProductDetail = ({match: { params: { id }}}) => {
   const [endReq, setEndReq] = useState(false);
   const [product, setProduct] = useState({});
   const [breadcrumb, setBreadcrumb] = useState([]);

   useEffect(() => {
      const fetchProduct = async () => {
         const res = await fetch(`${process.env.REACT_APP_PATH_SERVICE}/api/items/${id}`);
         const data = await res.json();
         
         setEndReq(true);
         setProduct(data);
         setBreadcrumb(data.categories);
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
                     <Column offset={1}>
                        <Breadcrumb items={breadcrumb} />
                     </Column>
                  </Row>
                  <Row>
                     <Column xs={10} sm={10} md={10} lg={10} offset={1}>
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