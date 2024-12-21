import React from 'react';
import logo from './logo.svg';
import './App.css';
import LogIn from './Pages/LogIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Pages/Profile';
import Footer from './Components/Footer';
import Header from './Components/Header';
import '@fortawesome/fontawesome-free';
import More from './Pages/More';
import HeaderTwo from './Components/HeaderTwo';
import LogInMain from './Pages/LogInMain';
import Main from './Pages/Main';
import LogInMainTwo from './Pages/LogInMainPage';
import LogInMainPage from './Pages/LogInMainPage';
import Categories from './Pages/Categories';
// import 'fort-awesome/css/font-awesome.min.css';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LogIn/>} />
        <Route path='/mainloginComponent' element={<LogInMain/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/footer' element={<Footer/>} />
        <Route path='/header' element={<Header/>} /> 
        <Route path='/headertwo' element={<HeaderTwo/>} /> 
        <Route path='/more' element={<More/>} />
        <Route path='/main' element={<Main/>} />
        <Route path='/mainlogin' element={<LogInMainPage/>} />
        <Route path='/Categories' element={<Categories/>} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
