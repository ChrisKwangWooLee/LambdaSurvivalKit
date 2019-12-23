import React from 'react';
import styled from '../../node_modules/styled-components';

function LSK_Header() {

    const Line = styled.div`
        width: 100%;
        border: 2px solid red;
    `

    return (
        <header>
            <div className="header-title-container">
                <img src='lambda_logo.png' alt="Lambda FirstAid" className="logo-icon" />
                <h1><span className='lambda-word'>Lambda</span> Survival Kit <span className='version'>(1.0.0)</span></h1>
            </div>
            <Line className='line'></Line>
            <div className="clock-container"></div>
        </header>
    )
}

export default LSK_Header;