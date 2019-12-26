import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import List from '../../components/list';
import Container from '../../components/container';
import Article from '../../components/product/list';
import Row from '../../components/grid/row';
import Column from '../../components/grid/column';
import Breadcrumb from '../../components/breadcrumb';

const ProductList = () => {
   const [endReq, setEndReq] = useState(false);
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const fetchProducts = async () => {
         const urlParams = new URLSearchParams(window.location.search);
         const res = await fetch(`${process.env.REACT_APP_PATH_SERVICE}/api/items?q=${urlParams.get('search')}`);
         const data = await res.json();
         
         setEndReq(true);
         setProducts(data.items);
      }
      
      fetchProducts();
   }, []);
   
   return (
      <>
         <Header/>
         <main>
            <Container>
               <section className={'product__list'}>
                  <Row>
                     <Column>
                        <Breadcrumb/>
                     </Column>
                  </Row>
                  <Row>
                     <Column>
                        {endReq && (products.length > 0 
                           ? <List items={products} Component={Article}/>
                           : <span>No se encontraron productos</span>
                        )}
                     </Column>
                  </Row>
               </section>
            </Container>
         </main>
      </>
   );
};

export default ProductList;