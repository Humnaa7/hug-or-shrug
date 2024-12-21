import { useState } from 'react'; 
import './LogIn.css';
import logo from '../Assets/hug-or-shrug-logo.png';
import { useNavigate } from 'react-router-dom';

function LogIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');

    const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();  // Prevent default form submission behavior
        let valid = true;

    // Validate email
    if (!email) {
        setEmailError('Email is required.');
        valid = false;
    } else {
        setEmailError('');
    }

    // Validate password
    if (!password) {
        setPasswordError('Password is required.');
        valid = false;
    } else {
        setPasswordError('');
    }

    if (valid) {
        navigate('/profile'); // Navigate to the Profile page
    }
    };
    
    return (
        <div className='loginContainer'>
            <div className='container-content'>
                <img className='logo' src={logo}/>
                <div className='login-content'>
<form>

        <label>Email or username
        <input className='form-input' type="email" placeholder='Enter your email'
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        />
        {emailError && <span className="error-message">{emailError}</span>}
        </label>

        <label>Password
        <input className='form-input' type="password" placeholder='Enter your password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <span className="error-message">{passwordError}</span>}
        </label>


        <button className='login-btn' onClick={handleLogin}>Log In</button>
        <button className='login-btn Signin-btn'>Sign in with Google</button>
        
        <p className='post-btn'>Don't have an account yet? <span>Sign up</span> </p>

</form>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
