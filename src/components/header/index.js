import React from 'react';
import Container from '../container';
import Row from '../grid/row';
import Column from '../grid/column';
import InputText from '../inputText/index';

const Header = () => (
    <header className={'header'}>
        <Container>
            <Row align={"middle-xs"}>
                <Column xs={'2'}>
                    <a href="/" className={'header__logo'}>Mercado Libre Argentina - Donde comprar y vender de todo</a>
                </Column>
                <Column xs={'10'}>
                    <InputText classInput={'header__search'} placeholder={'Buscar productos, marcas y más...'} />
                </Column>
            </Row>
        </Container>
    </header>
);

export default Header;