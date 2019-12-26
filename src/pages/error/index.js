import React from 'react';
import Header from '../../components/header';
import Container from '../../components/container';
import { getMessageLabel } from '../../messages/messages';

const SBox = () => (
    <>
        <Header/>
        <Container>
            <h2>{getMessageLabel('error404')}</h2>
        </Container>
    </>
);

export default SBox;