import React from 'react';

import './header.css';

const Header = () => {
    return(
        <div className="header d-flex">
            <h3>
                <a href="$">Star DB</a>
            </h3>
            <ul className="d-flex">
                <li><a href="google.com" >People</a></li>
                <li><a href="google.com">Planets</a></li>
                <li><a href="google.com">Starships</a></li>
            </ul>
        </div>
    );
};

export default Header;