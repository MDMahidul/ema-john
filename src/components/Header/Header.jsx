import React from 'react';
import './Header.css';
import Logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <img src={Logo} alt="" />
            <div>   
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;