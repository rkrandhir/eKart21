import React from 'react';
import Logo from './Logo';
import TopNav from './TopNav';

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <div className="spacer"></div>
            <TopNav />
        </div>
    )
}

export default Header;