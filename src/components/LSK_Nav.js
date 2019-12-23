import React from 'react';

// Import Font Awesome Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5,
         faCss3Alt,
         faJsSquare} from '@fortawesome/free-brands-svg-icons';

function LSK_Nav() {

    console.log(faHtml5)
    return(
        <div className="topNav-container">
                <div className="topNav-Item HTML">
                    <FontAwesomeIcon icon={faHtml5} />
                    <h2>HTML</h2>
                </div>
                <div className='topNav-line'></div>
                <div className="topNav-Item CSS_Style">
                    <FontAwesomeIcon icon={faCss3Alt} />
                    <h2>CSS/UI</h2>
                </div>
                <div className='topNav-line'></div>
                <div className="topNav-Item javascript">
                    <FontAwesomeIcon icon={faJsSquare} />
                    <h2> Javscript</h2>
                </div>
                <div className='topNav-line'></div>
                <div className="topNav-Item lambda">
                    <img src="lambda_logo.png" alt="Lambda navigation" />
                    <h2>Lambda</h2>
                </div>
        </div>
    )
}

export default LSK_Nav;