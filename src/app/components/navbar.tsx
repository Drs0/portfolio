import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowRight } from '@fortawesome/free-solid-svg-icons';
function Navbar(props: any) {
    const handleClick = () => {
        props.setIsActive((current: boolean) => !current);
    };

    return (
        <nav className="prfl__nav-cntr">
            <div className="prfl__nav-burger" id="nav-burger" onClick={handleClick}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <ul className={props.isActive ? 'prfl__nav show' : 'prfl__nav'}>
                <li className="prfl__nav-item"><p>Home</p> <FontAwesomeIcon icon={faArrowRight} /></li>
                <li className="prfl__nav-item"><p>About</p> <FontAwesomeIcon icon={faArrowRight} /></li>
                <li className="prfl__nav-item"><p>Projects</p> <FontAwesomeIcon icon={faArrowRight} /></li>
                <li className="prfl__nav-item"><p>Contact</p> <FontAwesomeIcon icon={faArrowRight} /></li>
            </ul>
        </nav>
    );
}

export default Navbar;
