import React, {useState} from 'react';
import "../css/Login.css";
import { Divider } from '@mui/material';
import { Link, Route, Switch } from 'react-router-dom';
import BasicMenu from '../components/BasicMenu';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={(event => setEmail(event.target.value))}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" onChange={(event => setPassword(event.target.value))}/>
                    </div>

                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By continuing, you agree to Mikalan's <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088" >Amazon Clone's Conditions of Use</a> and <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice</a>.
                </p>

                <BasicMenu />
            </div>
            <Divider>New to Amazon?</Divider>
            <Link to="/register" className='login__registerButton'>Create your Amazon Account</Link>
        </div>

        
    )
}


export default Login;