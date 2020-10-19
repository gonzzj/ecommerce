import React from 'react';
import Header from '../../components/molecules/header';
import Container from '../../components/atoms/container';
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