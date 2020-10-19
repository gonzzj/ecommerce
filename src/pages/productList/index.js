import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import Header from '../../components/molecules/header';
import List from '../../components/atoms/list';
import Container from '../../components/atoms/container';
import Article from '../../components/molecules/product/list';
import Row from '../../components/atoms/grid/row';
import Column from '../../components/atoms/grid/column';
import Breadcrumb from '../../components/atoms/breadcrumb';
import { getMessageLabel } from '../../messages/messages';

const ProductList = () => {
   const [endReq, setEndReq] = useState(false);
   const [products, setProducts] = useState([]);
   const [breadcrumb, setBreadcrumb] = useState([]);

   useEffect(() => {
      const fetchProducts = async () => {
         const urlParams = new URLSearchParams(window.location.search);
         const res = await fetch(`${process.env.REACT_APP_PATH_SERVICE}/api/items?q=${urlParams.get('search')}`);
         const data = await res.json();
         
         setEndReq(true);
         setProducts(data.items);
         setBreadcrumb(data.categories);
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
                     <Column offset={1} xs={10} sm={10} md={10} lg={10}>
                        {breadcrumb.length > 0 && <Breadcrumb items={breadcrumb} />}
                     </Column>
                  </Row>
                  <Row>
                     <Column offset={1} xs={10} sm={10} md={10} lg={10}>
                        {endReq ? (products.length > 0 
                           ? <List items={products} Component={Article}/>
                           : <span>{getMessageLabel('productsNotFound')}</span>
                        ): <ReactLoading className={"loading__spinner"} type={'spin'} color={'#999'} height={125} width={125} />}
                     </Column>
                  </Row>
               </section>
            </Container>
         </main>
      </>
   );
};

export default ProductList;