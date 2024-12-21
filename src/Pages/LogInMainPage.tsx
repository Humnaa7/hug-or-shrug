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
import LogInMain from './LogInMain';

function LogInMainTwo() {
     
    return (
        <>
        <HeaderTwo/>
        <LogInMain/>
        </>
    );
}

export default LogInMainTwo;
