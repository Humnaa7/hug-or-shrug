import React, { useState } from 'react';
import './ProfileDropdown.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';




const ProfileDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-dropdown">
      <div className="profile-container" onClick={toggleDropdown}>
  <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} arrow-icon`} />
</div>

      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>My H&S</li>
            <li>My Favourties</li>
            <li>Edit Profile</li>
            <li>Basic Questions</li>
            <li>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
