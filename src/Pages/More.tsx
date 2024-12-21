import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import DP from '../Assets/Ellipse 26.png'; 
import './More.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../Components/Footer';
import pepsiImg from '../Assets/pepsiImg.png';

function More() {
    
return (
<>
<Header/>
<div className='profileIntro'>
    <img src={DP} className='DP'/>
    <div className='profileIntroAbout'>
    <p className='profileName'>John Wilson, 15</p>
    <div className='opinionStatement'>
    <i className='fa-regular fa-thumbs-up thumbIcon'/>
    <p>11</p>
    <i className='fa-regular fa-thumbs-down thumbIcon' />
    <p>8</p>
    </div>
    </div>
</div>
<div className='pepsiSection'>
    <img src={pepsiImg} className='pepsiBottleImg'/>
    <div className='pepsiSectionRight'>
    <div className='pepsiOpinion'>
        <h2>Pepsi</h2>
        <p>I don't like Pepsi because it tates too sweet and has a slightly flat aftertaste.</p>
    </div>
    <div className='pepsiLinks'>
        <a href='https://pepsi.co.uk'>https://pepsi.co.uk</a>
        <p>20/08/2024</p>
    </div>
    </div>
</div>
<div className='thumbIconSection'>
    <i className='fa-regular fa-thumbs-up'/>
    <p>1</p>
    <i className='fa-regular fa-thumbs-down'/>
    <p>2</p>
</div>
<button className="addBtn blueBtn">ADD +</button>

<Footer/>
</>
);
}

export default More;
