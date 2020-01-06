import React from 'react';
import styled from 'styled-components';

// Import Font Awesome Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5,
         faCss3Alt,
         faJsSquare} from '@fortawesome/free-brands-svg-icons';

function LSK_Nav({handleBookmarks}) {

    const Mask = styled.div`
        position: absolute;
        z-index: 5;
        left: 0;
        top: 63px;
        width: 95px;
        height: 72px;
    `

    return(
        <nav className="topNav-container">
                <div className="topNav-Item HTML" onClick={event => handleBookmarks(event)}>
                        <Mask className="mask HTML"></Mask>
                        <FontAwesomeIcon icon={faHtml5} 
                                        className="HTML"
                                        style={{
                                                    color: "#383651",
                                                    fontSize: "30px",
                                                    textAlign: "center"
                                                }}/>
                        <h2 className="HTML">HTML</h2>
                </div>
                <div className='topNav-line'></div>
                <div className="topNav-Item CSS_Style" onClick={event => handleBookmarks(event)} >
                    <Mask className="mask CSS_Style" style={{left: "96.5px"}}></Mask>
                    <FontAwesomeIcon icon={faCss3Alt} 
                                     className="CSS_Style"
                                     style={{
                                        color: "#383651",
                                        fontSize: "30px",
                                        textAlign: "center"
                                    }}/>
                    <h2 className="CSS_Style">CSS/UI</h2>
                </div>
                <div className='topNav-line'></div>
                <div className="topNav-Item javascript" onClick={event => handleBookmarks(event)} >
                    <Mask className="mask javascript" style={{left: "193px"}}></Mask>
                    <FontAwesomeIcon icon={faJsSquare} 
                                     className="javascript"
                                     style={{
                                        color: "#383651",
                                        fontSize: "30px",
                                        textAlign: "center"
                                    }}/>
                    <h2 className="javascript"> Javscript</h2>
                </div>
                <div className='topNav-line'></div>
                <div className="topNav-Item lambda" onClick={event => handleBookmarks(event)} >
                    <Mask className="mask lambda" style={{left: "289.5px"}}></Mask>
                    <img src="lambda_logo.png" alt="Lambda navigation" className="lambda"/>
                    <h2 className="lambda">Lambda</h2>
                </div>
        </nav>
    )
}

export default LSK_Nav;