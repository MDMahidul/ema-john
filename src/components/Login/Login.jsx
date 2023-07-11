import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className="form-container">
        <h2 className="form-title">Login</h2>
        <form action="">
          <div className="form-control">
            <label htmlFor="">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="">Password</label>
            <input type="password" name="password" id="" required />
          </div>
          <input className="btn-submit" type="submit" value="Login" />
        </form>
        <p className="link-sec">
          New to ema-john?{" "}
          <Link className="link-text" to="/signup">
            Create New Account
          </Link>
        </p>
      </div>
    );
};

export default Login;