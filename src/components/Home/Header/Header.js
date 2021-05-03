import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Confetti from 'react-confetti'
import backgroundImage from '../../../images/top-banner.png'
import profile from '../../../images/profile1.png'
import Typical from 'react-typical'
import './Header.css'
import Navbar from '../Navbar/Navbar';
import { useHistory } from 'react-router';

const Header = () => {
  useEffect(()=>{
    AOS.init({duration : 2000});
},[])
  const history = useHistory()
  // const { width, height } = {'100%', '100%'}
  const handleAboutMe = () =>{
      history.push('/aboutMe')
  }
  return (
    <div>
      
      <Navbar></Navbar>
    
      <div className='row px-3 py-5 header img-fluid' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Confetti 
          width={'200px'}
          height={'600px'}
        />
        <div className='col-md-6 top-animation-container'>
          <Typical className= 'ml-5'
            steps={['Hello!', 1000, 'Hello I am Tanzid Mahamud & welcome to my portfolio', 500]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
        <div className='col-md-6' >
          <img className='img-fluid'  data-aos="fade-left" style={{ height: '500px', width: '500px' }} src={profile} alt="" />
        </div>
        <div  data-aos="fade-right" className ='mb-5 ml-5 mt-5'>
          <button className=" btn btn-primary mr-4" onClick={handleAboutMe}>About Me</button>
          <a   href="https://drive.google.com/u/0/uc?id=1-vlIot3Rmb42QOfnjVm2VVDe10QEfiHi&export=download" className = 'text-white'><button className=" btn btn-primary" >My Resume </button></a>
          </div>
      </div>
    </div>
  );
};

export default Header;