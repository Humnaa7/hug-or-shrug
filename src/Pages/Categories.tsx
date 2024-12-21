import { useState } from 'react';
import './Categories.css';
import logo from '../Assets/hug-or-shrug-logo.png';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

import blueCircle from '../Assets/blueCircle.png';
import redCircle from '../Assets/redCircle.png';
import blueThumb from '../Assets/blueThumb.png';
import redThumb from '../Assets/redThumb.png';
import Footer from '../Components/Footer';
import genres from '../Assets/genres.png';

function Categories() {

    return (
        <>
            <Header />

<div className='categoriesSection'>

<div className='categoriesThumb'>

<div className='categorisBlueThumb'>
<img src={blueCircle} className='categoriesBlueEllipse'/>
<img src={blueThumb} className='categoriesBlueOpinionsThumb'/>
<p className='categoriesBlueOpinionsP'>209</p>
</div>
<p className='categoriesP'>Categories</p>

<div className='categoriesRedThumb'>
<img src={redCircle} className='categoriesRedEllipse'/>
<img src={redThumb}
className='categoriesRedOpinionsThumb'/>
<p className='categoriesRedOpinionsP'>84</p>
</div>
</div>
<div className='genreLine'></div>
    <div className='categoriesGenre'>
        <img src={genres} className='genresImg'/>
        {/* <div className='genreSectionLines'>
        <div className='genreLineOne'>
            <div className='general-genre'>General</div>
            <div className='brands-genre'>Brands</div>
            <div className='experiences-genre'>Experiences</div>
            <div className='people-genre'>People</div>
        </div>
        <div className='genreLineTwo'>
<div className='things-genre'>Things</div>
<div className='places-genre'>Places</div>
<div className='foodAndDrink-genre'>Food and Drink</div>
        </div>
        <div className='genreLineThree'>
<div className='entertainment-genre'>Entertainment and Leisure</div>
<div className='lifestyle-genre'>Lifestyle and Habits</div>
        </div>
        </div> */}
    </div>
    </div>
    <Footer/>
</>
);
}

export default Categories;
