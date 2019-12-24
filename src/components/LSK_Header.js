// Import Dependencies
import React from 'react';
import styled from '../../node_modules/styled-components';

// Import Components
import Clock from './Clock';

function LSK_Header() {

    const Line = styled.div`
        
    `

    return (
        <header>
            <div className="header-title-container">
                <img src='lambda_logo.png' alt="Lambda FirstAid" className="logo-icon" />
                <h1><span className='lambda-word'>Lambda</span> Survival Kit <span className='version'>(1.0.0)</span></h1>
                <Line className='line'></Line>
                <Clock />
            </div>
        </header>
    )
}

export default LSK_Header;