import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons'
import { faFontAwsome } from '@fortawesome/free-brands-svg-icons';

const LastFooter = () => {
    return (
        <div style = {{textAlign : 'center'}}>
            <p>Designed & Built by <span><a href="">Tanzid Mahamud </a></span></p>
            <p> <FontAwesomeIcon icon = {faStar}></FontAwesomeIcon> star & <FontAwesomeIcon icon = {faCodeBranch}> </FontAwesomeIcon> Froks by Me </p>
        </div>
    );
};

export default LastFooter;