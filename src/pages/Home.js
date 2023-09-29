import React, { useEffect } from 'react'
import GetInTouch from '../components/GetInTouch';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    
    navigate('/adhelp-109445849938899595');

  }, [])
  
  return (

    <>
      <Navbar/>
      <Header />
      <GetStarted />
      <GetInTouch />
      <Footer/>
    </>

  )
}

export default Home