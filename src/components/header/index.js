import React from 'react';
import { getMessageLabel, getMessagePlaceholder } from '../../messages/messages';
import Container from '../container';
import Row from '../grid/row';
import Column from '../grid/column';
import InputText from '../inputText/index';

const Header = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchValue = urlParams.get('search') ? urlParams.get('search') : "";
    
    const handleKey = e => {
        if (e.key === 'Enter') {
            window.location.href = "/items?search=" + e.target.value;
        }
    }

    return (
        <header className={'header'}>
            <Container>
                <Row align={"middle-xs"}>
                    <Column xs={'2'} sm={'3'} md={'2'} lg={'2'}>
                        <a href="/" className={'header__logo'}>{getMessageLabel("headerLogo")}</a>
                    </Column>
                    <Column xs={'10'} sm={'9'} md={'10'} lg={'10'}>
                        <InputText classInput={'header__search'} value={searchValue} placeholder={getMessagePlaceholder("searchPlaceholder")} onKeyDown={handleKey} />
                    </Column>
                </Row>
            </Container>
        </header>
    );
};

export default Header;