import React from "react";
import './Header.css';
import logo from '../Assets/hug-or-shrug-logo.png';
import profileImg from '../Assets/profile_img.png';
import ProfileDropdown from "./ProfileDropdown";
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate(); 

    const handleNavigation = (path: string) => {
        navigate(path); 
    };
return(
    
<div className="container">
    <div className="headerContainer">
    <img className="logo" src={logo}
     alt="Logo" 
     onClick={() => handleNavigation('/mainlogin')} // Navigate to mainlogin
     style={{ cursor: 'pointer' }}
    />
    <nav className="menu">
        <ul className="menu">
            <li onClick={() => handleNavigation('/categories')}>Categories</li>
            <li onClick={() => handleNavigation('/main')}>Users</li>
            <li onClick={() => handleNavigation('/categories')}>Genres</li>
            <li onClick={() => handleNavigation('/more')}>Hugs/Shrugs</li>
        </ul>
    </nav>
    <button className="addBtn">ADD +</button>
    <img className="profileImage" src={profileImg}/>
<ProfileDropdown/>

</div>
</div>
)
}

export default Header;