import React from 'react';

// Import Font Awesome Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5,
         faCss3Alt,
         faJsSquare} from '@fortawesome/free-brands-svg-icons';

function LSK_Nav({handleBookmarks}) {

    return(
        <nav className="topNav-container">
                <div className="topNav-Item HTML" onClick={event => handleBookmarks(event)}>
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
                <div className="topNav-Item CSS_Style" onClick={event => handleBookmarks(event)}>
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
                <div className="topNav-Item javascript" onClick={event => handleBookmarks(event)}>
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
                <div className="topNav-Item lambda" onClick={event => handleBookmarks(event)}>
                    <img src="lambda_logo.png" alt="Lambda navigation" className="lambda"/>
                    <h2 className="lambda">Lambda</h2>
                </div>
        </nav>
    )
}

export default LSK_Nav;