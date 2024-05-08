import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="site-name">
                <h1>SiteName</h1>
            </div>
            <nav>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
};

export default Header;
