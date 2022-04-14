import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    if(user){
        navigate('/shop');
    }



    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    }
    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your password didn't match!");
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Sign up</h2>
                    <form onSubmit={handleCreateUser}>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Confirm Password</label>
                            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm password" id="" required />
                        </div>
                        <p>{error?.message}</p>
                        {
                            loading && <p>Loading ...</p>
                        }
                        <div>
                            <input className='form-submit' type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className='form-sign'>
                        <p>
                            Already have an account? <Link className='form-link' to="/login">Login here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;