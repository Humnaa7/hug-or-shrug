import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import DP from '../Assets/Ellipse 26.png'; 
import './Profile.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../Components/Footer';

function Profile() {
    
return (
<>
<Header/>
<div className='profileContainer'>

<div className='leftSection'>
    <div className='leftSectionContainer'>
    <img src={DP} className='DP' />
    <div className='leftSectionContent'>
        <p className='johnWilson'>John Wilson, 15</p>
        <p className='joined'>Joined 20/08/2024</p>
        <div className='profile-icons'>
        <i className={'fa-regular fa-user'} />
        <p>3</p>
        <i className={`fa-regular fa-heart`} />
        <p>10</p>
        </div>
    </div>
    </div>
   
<div className='followIconsContainer'>
    <button className='followBtn'>+Follow</button>
    <i className={`fa-regular fa-thumbs-up`} />
    <p>1</p>
    <i className={`fa-regular fa-thumbs-down`} />
    <p>1</p>
</div>

<div className='bioContainer'>
    <h1>Bio</h1>
    <p>I like to eat burgers</p>
    <p>08/08/2000</p>
    <p>UK</p>
    <p>Male</p>
</div>
</div>

<div className='rightSection'>

<div className='rightSectionContainer'>
    <div className='rectangleButtons'>
        <button className='generalBtn'>General</button>
        <button className='experiencesBtn'>Experiences</button>
    </div>
    <div className='rectangleOpinions'>
        <div className='opinionContainer'>
        <i className={`fa-regular fa-thumbs-up`} />
        <p>Shoes with slippery soles</p>
        
        </div>
        <button className='moreBtn'>More</button>
    </div>
</div>
<div className='rightSectionContainerTwo'>
    <div className='rectangleButtonsTwo'>
        <button className='placesBtn'>Places</button>
        <button className='peopleBtn'>People</button>
        <button className='generalBtnTwo'>General</button>
    </div>
    <div className='rectangleTwo'>
        <div className='opinionContainerTwo'>
        <i className={`fa-regular fa-thumbs-down`} />
        <p>Shoes with slippery soles</p>
        </div>
        <button className='moreBtnTwo'>More</button>
    </div>
</div>

</div>

</div>
<Footer/>
</>
);
}

export default Profile;
