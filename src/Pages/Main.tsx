import { useState } from 'react';
import './Main.css';
import logo from '../Assets/hug-or-shrug-logo.png';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import LogInMain from './LogInMain';
import usersBackgroundRectangle from '../Assets/usersBackgroundRectangle.png';
import crossVector from '../Assets/crossVector.png';
import invertedTriangleVector from '../Assets/invertedTriangleVector.png';
import ladderVector from '../Assets/ladderVector.png';
import lessLadderyVector from '../Assets/lessLadderyVector.png';
import triangleVector from '../Assets/triangleVector.png';
import zigzagVector from '../Assets/zigzagVector.png';
import james from '../Assets/james.png';
import nick from '../Assets/nick.jpg';
import gustavo from '../Assets/gustavo.png';
import mark from '../Assets/mark.png';
import jesse from '../Assets/jesse.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import blueCircle from '../Assets/blueCircle.png';
import redCircle from '../Assets/redCircle.png';
import blueThumb from '../Assets/blueThumb.png';
import redThumb from '../Assets/redThumb.png';
import Footer from '../Components/Footer';

function Main() {

    return (
        <>
            <Header />
            <LogInMain />
            <div className='usersSection'>
                <h1 className='usersHeading'>USERS</h1>
                <img src={usersBackgroundRectangle} className='usersBackgroundRectangle' />
                <div className='usersVectors'>
                    <img src={ladderVector} className='vectors vector-1' />
                    <img src={lessLadderyVector} className='vectors vector-2' />
                    <img src={triangleVector} className='vectors vector-3' />
                    <img src={triangleVector} className='vectors vector-4' />
                    <img src={triangleVector} className='vectors vector-5' />
                    <img src={triangleVector} className='vectors vector-6' />
                    <img src={triangleVector} className='vectors vector-7' />
                    <img src={crossVector} className='vectors vector-8' />
                    <img src={crossVector} className='vectors vector-9' />
                    <img src={crossVector} className='vectors vector-10' />
                    <img src={crossVector} className='vectors vector-11' />
                    <img src={crossVector} className='vectors vector-12' />
                    <img src={crossVector} className='vectors vector-13' />
                    <img src={zigzagVector} className='vectors vector-14' />
                </div>
<div className='usersList'>
    <div className='users user-1'>
    <img src={james} className='userPic' />
    <p className='userName'>James Fred</p>
        <div className='userTeaser'>
            <i className='fa-regular fa-thumbs-up thumbIcon' />
             <p className='userPara'>9</p>
            <i className='fa-regular fa-thumbs-down thumbIcon userThumbIcon' />
            <p>1</p>
    </div>
    </div>
    <div className='users user-2'>
    <img src={nick} className='userPic nickPic' />
    <p className='userName'>Nick Falcon</p>
        <div className='userTeaser'>
            <i className='fa-regular fa-thumbs-up thumbIcon' />
             <p className='userPara'>0</p>
            <i className='fa-regular fa-thumbs-down thumbIcon userThumbIcon' />
            <p>0</p>
    </div>
    </div>
    <div className='users user-3'>
    <img src={gustavo} className='userPic' />
    <p className='userName'>Gustavo Curt</p>
        <div className='userTeaser'>
            <i className='fa-regular fa-thumbs-up thumbIcon' />
             <p className='userPara'>54</p>
            <i className='fa-regular fa-thumbs-down thumbIcon userThumbIcon' />
            <p>0</p>
    </div>
    </div>
    <div className='users user-4'>
    <img src={mark} className='userPic' />
    <p className='userName'>Mark Great</p>
        <div className='userTeaser'>
            <i className='fa-regular fa-thumbs-up thumbIcon' />
             <p className='userPara'>11</p>
            <i className='fa-regular fa-thumbs-down thumbIcon userThumbIcon' />
            <p>8</p>
    </div>
    </div>
    <div className='users user-5'>
    <img src={jesse} className='userPic' />
    <p className='userName'>Jesse Pink</p>
        <div className='userTeaser'>
            <i className='fa-regular fa-thumbs-up thumbIcon' />
             <p className='userPara'>1</p>
            <i className='fa-regular fa-thumbs-down thumbIcon userThumbIcon' />
            <p>4</p>
    </div>
    </div>
</div>
</div>
<div className='opinionsSections'>
<div className='opinionsSectionRectangle'>
        <div className='thumbsSection'>

            <div className='blueThumb'>
            <img src={blueCircle} className='blueCircleEllipse'/>
            <img src={blueThumb} className='blueOpinionsThumb'/>
            <p className='blueOpinionsP'>209</p>
            </div>
            <div className='redThumb'>
            <img src={redCircle} className='redCircleEllipse'/>
            <img src={redThumb}
            className='redOpinionsThumb'/>
            <p className='redOpinionsP'>84</p>
            </div>
        </div>
<div className='mainSection'>
        <div className='opinionGroupOne'>
        <div className="card general">
        <div className="category general-category">General</div>
        <div className="content">
          <div className="icon thumbs-down">
            <i className={`fa-regular fa-thumbs-down thumbPadding`} />
          </div>
          <div className="text">Shoes with slippery soles</div>
            <img src={mark} className='userImg'/>
          <div className="user">
            Mark Great, 15</div>
          <button className="more-btn red-btn">More</button>
        </div>
      </div>
        </div>
        <div className='opinionGroupTwo'>
        <div className="card lifestyle">
        <div className="category lifestyle-category">Lifestyle and Habits</div>
        <div className="content">
          <div className="icon thumbs-down">
            <i className={`fa-regular fa-thumbs-down thumbPadding`} />
          </div>
          <div className="text">Traffic Jams</div>
            <img src={mark} className='userImg'/>
          <div className="user">
            Mark Great, 15</div>
          <button className="more-btn red-btn">More</button>
        </div>
      </div>
        </div>
        <div className='opinionGroupThree'>
        <div className="card experiences">
        <div className="category experiences-category">Experiences</div>
        <div className="content">
          <div className="icon thumbs-up">
            <i className={`fa-regular fa-thumbs-up blueThumbPadding`} />
          </div>
          <div className="text">Airplanes</div>
            <img src={mark} className='userImg'/>
          <div className="user">
            Mark Great, 15</div>
          <button className="more-btn blue-btn">More</button>
        </div>
      </div>
        </div>
        <div className='opinionGroupFour'>
        <div className="card general">
        <div className="category general-category">General</div>
        <div className="content">
          <div className="icon thumbs-down">
            <i className={`fa-regular fa-thumbs-down thumbPadding`} />
          </div>
          <div className="text">Shoes with slippery soles</div>
            <img src={mark} className='userImg'/>
          <div className="user">
            Mark Great, 15</div>
          <button className="more-btn red-btn">More</button>
        </div>
      </div>
        </div>
        <div className='opinionGroupFive'>
        <div className="card lifestyle">
        <div className="category lifestyle-category">Lifestyle and Habits</div>
        <div className="content">
          <div className="icon thumbs-down">
            <i className={`fa-regular fa-thumbs-down thumbPadding`} />
          </div>
          <div className="text">Traffic Jams</div>
            <img src={mark} className='userImg'/>
          <div className="user">
            Mark Great, 15</div>
          <button className="more-btn red-btn">More</button>
        </div>
      </div>
        </div>
        <div className='opinionGroupSix'>
        <div className="card experiences">
        <div className="category experiences-category">Experiences</div>
        <div className="category general-category general-category-margin">General</div>
        <div className="content">
          <div className="icon thumbs-up">
            <i className={`fa-regular fa-thumbs-up blueThumbPadding`} />
          </div>
          <div className="text">Airplanes</div>
            <img src={mark} className='userImg'/>
          <div className="user">
            Mark Great, 15</div>
          <button className="more-btn blue-btn">More</button>
        </div>
      </div>
        </div>
        <div className='opinionGroupSeven'>
        <div className="card lifestyle">
        <div className="category lifestyle-category">Lifestyle and Habits</div>
        <div className="content">
          <div className="icon thumbs-down">
            <i className={`fa-regular fa-thumbs-down thumbPadding`} />
          </div>
          <div className="text">Traffic Jams</div>
            <img src={mark} className='userImg'/>
          <div className="user">
            Mark Great, 15</div>
          <button className="more-btn red-btn">More</button>
        </div>
      </div>
        </div>
        <div className='opinionGroupEight'>
        <div className="card experiences">
        <div className="category experiences-category">Experiences</div>
        <div className="content">
          <div className="icon thumbs-up">
            <i className={`fa-regular fa-thumbs-up blueThumbPadding`} />
          </div>
          <div className="text">Airplanes</div>
            <img src={mark} className='userImg'/>
          <div className="user">
            Mark Great, 15</div>
          <button className="more-btn blue-btn">More</button>
        </div>
      </div>
        </div>
        <button className="more-btn black-btn">More</button>
</div>
</div>
</div>

    <div className='genreSection'>
        <div className='genreSectionLines'>
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
        </div>
    </div>
    <Footer/>
</>
);
}

export default Main;
