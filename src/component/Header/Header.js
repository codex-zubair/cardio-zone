import React from 'react';
import './Header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div>
            <h1 className='header'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Cardio Zone</h1>
            <h4>Select Today's Task</h4>
        </div>
    );
};

export default Header;