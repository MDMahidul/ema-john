import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <img src={Logo} alt="" />
            <div>   
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/order-review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;