import React from 'react';
import Header from '../../components/header';
import List from '../../components/list';
import Container from '../../components/container';
import Article from '../../components/product/list';
import Row from '../../components/grid/row';
import Column from '../../components/grid/column';

const ProductList = () => (
   <>
      <Header/>
      <main>
         <Container>
            <section className={'product'}>
               <Row>
                  <Column>
                     <List Component={Article}/>
                  </Column>
               </Row>
            </section>
         </Container>
      </main>
   </>
);

export default ProductList;