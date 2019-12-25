import React from 'react';
import Header from '../../components/header';
import Container from '../../components/container';
import Detail from '../../components/product/detail';
import Row from '../../components/grid/row';
import Column from '../../components/grid/column';

const ProductDetail = () => (
   <>
      <Header/>
      <main>
         <Container>
            <section className={'product'}>
               <Row>
                  <Column xs={'12'}>
                     <Detail/>
                  </Column>
               </Row>
            </section>
         </Container>
      </main>
   </>
);

export default ProductDetail;