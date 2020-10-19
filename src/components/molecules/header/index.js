import React, { useState } from 'react';
import { getMessagePlaceholder } from '../../../messages/messages';
import Container from '../../atoms/container';
import Row from '../../atoms/grid/row';
import Column from '../../atoms/grid/column';
import InputText from '../../atoms/inputText';

const Header = () => {
    const urlParams = new URLSearchParams(window.location.search);

    const [searchValue, setSearchValue] = useState(urlParams.get('search') || "");
    
    const handleRedirect = () => {
        if (searchValue !== "") {
            window.location.href = "/items?search=" + searchValue;
        }
    }

    return (
        <header className={'header'}>
            <Container>
                <Row align={"middle-xs"}>
                    <Column xs={2} sm={2} md={1} lg={1} offset={1}>
                        <a href="/" className={'header__logo'}></a>
                    </Column>
                    <Column xs={10} sm={10} md={9} lg={9}>
                        <div className={'header__search'}>
                            <InputText value={searchValue} placeholder={getMessagePlaceholder("searchPlaceholder")} onChange={e => setSearchValue(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleRedirect()} />
                            <div className={"header__search--glass"} onClick={() => handleRedirect()}>
                                <span></span>
                            </div>
                        </div>
                    </Column>
                </Row>
            </Container>
        </header>
    );
};

export default Header;