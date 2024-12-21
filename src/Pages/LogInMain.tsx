import { useState } from 'react'; 
import './LogInMain.css';
import logo from '../Assets/hug-or-shrug-logo.png';
import { useNavigate } from 'react-router-dom';
import HeaderTwo from '../Components/HeaderTwo';
import rectangle from '../Assets/rectangle.png';
import polygon from '../Assets/Polygon.png';
import shapeDefiner from '../Assets/shapeDefiner.png';
import blueHalfCircle from '../Assets/Ellipse 13.png';
import blueTriangle from '../Assets/Polygon 5.png';
import blueCircle from '../Assets/Ellipse 14.png';
import redCircle from '../Assets/Ellipse 15.png';
import redTriangle from '../Assets/Polygon 4.png';
import redHalfCircle from '../Assets/Ellipse 16.png';
import hugImg from '../Assets/HUG.png';
import shrugImg from '../Assets/SHRUG.png';
import thumbsUpImg from '../Assets/thumbsUp.png';
import thumbsDownImg from '../Assets/thumbsDown.png';
import searchIcon from '../Assets/searchIcon.png';

function LogInMain() {
     
    return (
        <>
        {/* <HeaderTwo/> */}
        <div className='elementsParent'>
        <img src={rectangle} className='rectangle'/>
        <img src={polygon} className='polygon' />
        <img src={shapeDefiner} className='shapeDefiner'/>
          <img src={blueHalfCircle} className='elements child-1'/>
          <img src={blueTriangle} className='elements child-2'/>
          <img src={blueCircle} className='elements child-3'/>
          <img src={redCircle} className='elements child-4'/>
          <img src={redTriangle} className='elements child-5'/>
          <img src={redHalfCircle} className='elements child-6'/>

          <img src={hugImg} className='topLayerElements img-1'/>
          <img src={shrugImg} className='topLayerElements img-2'/>
          <img src={thumbsUpImg} className='topLayerElements img-3'/>
          <img src={thumbsDownImg} className='topLayerElements img-4'/>
          <input type='text' placeholder='Email' className='topLayerElements img-5'/>
          <img src={searchIcon} className='topLayerElements img-6'/>
        </div>
        </>
    );
}

export default LogInMain;
