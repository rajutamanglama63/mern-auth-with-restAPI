import React from 'react'
import { Link } from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';

const Header = () => {
    return (
        <nav className="nav-bar">
            <div className="container">
                <div className="nav-content">
                    <div className="brand">
                        <Link to="/"><h2>mernAuthApp</h2></Link>
                    </div>
                    <div className="navigator">
                        <AuthOptions />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
