import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../images/Logo.svg';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <nav className='header'>
            <img src={Logo} alt="" />
            <div>   
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/order-review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
                {user && <span>Welcome {user.dis}</span>}
            </div>
        </nav>
    );
};

export default Header;