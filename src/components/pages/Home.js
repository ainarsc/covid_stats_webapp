import React from 'react';
import styled from 'styled-components'
import {COLOR_BACKGROUND, COLOR_TEXT_DARK} from '../constants'
import {Header, HomeContent, Footer} from '../layout_components'

const Wrapper = styled.div`
    background-color: ${COLOR_BACKGROUND};
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    color: ${COLOR_TEXT_DARK};
`

const Home = () => {
    return (
        <Wrapper>
            <Header/>
            <HomeContent />
            <Footer/>
        </Wrapper>
    );
}

export default Home;
