import React from "react";
import './HeaderTwo.css';
import logo from '../Assets/hug-or-shrug-logo.png';
import profileImg from '../Assets/profile_img.png';
import ProfileDropdown from "./ProfileDropdown";
import { useNavigate } from "react-router-dom";

function HeaderTwo(){
    const navigate = useNavigate(); // Initialize the navigate function

    const handleLoginClick = () => {
        navigate('/'); // Navigate to the `/` page
    };
return(
    
<div className="container">
    <div className="headerContainer">
    <img className="logo" src={logo}/>
    <nav className="menu">
        <ul className="menu">
            <li>Categories</li>
            <li>Users</li>
            <li>Hugs</li>
            <li>Shrugs</li>
        </ul>
    </nav>
    <button className="addBtn">ADD +</button>
    <button className="logInBtn" onClick={handleLoginClick}>Log In</button>
  

</div>
</div>
)
}

export default HeaderTwo;