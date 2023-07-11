import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [error,setError]=useState('')
    const handleSignUp=event=>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);

        if(password !== confirm){
            setError('Your password did not matched !!!');
            return;
        }else if(password.length < 6){
            setError("Password must be at least 6 digits!");
            return;
        }
    }
    return (
      <div className="form-container">
        <h2 className="form-title">Sign Up</h2>
        <form action="" onSubmit={handleSignUp}>
          <div className="form-control">
            <label htmlFor="">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="">Password</label>
            <input type="password" name="password" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="">Confirm Password </label>
            <input type="password" name="confirm" id="" required />
          </div>
          <input className="btn-submit" type="submit" value="Sign Up" />
        </form>
        <p className='link-sec'>Already have an account? <Link className='link-text' to='/login'>Login</Link></p>
        <p className="text-error">{error}</p>
      </div>
    );
};

export default SignUp;