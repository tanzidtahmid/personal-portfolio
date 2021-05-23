import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Confetti from 'react-confetti'
import backgroundImage from '../../../images/top-banner.png'
import profile1 from '../../../images/profile1.png'
import profile from '../../../images/coding1 (1).jpg'
import profile2 from '../../../images/coding1 (2).jpg'
import profile3 from '../../../images/coding1 (3).jpg'
import Typical from 'react-typical'
import './Header.css'
import Navbar from '../Navbar/Navbar';
import { useHistory } from 'react-router';

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  const history = useHistory()
  // const { width, height } = {'100%', '100%'}
  const handleAboutMe = () => {
    history.push('/aboutMe')
  }
  return (
    <div style={{ backgroundColor: '#0a192f' }}>

      <Navbar></Navbar>

      {/* <div className='row px-3 py-5 header img-fluid' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Confetti
          width={'200px'}
          height={'600px'}
        />
        <div className='col-md-6 top-animation-container'>
          <Typical className='ml-5'
            steps={['Hello!', 1000, 'Hello I am Tanzid Mahamud & welcome to my portfolio', 500]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
        <div className='col-md-6' >
          <img className='img-fluid' data-aos="fade-left" style={{ height: '500px', width: '500px' }} src={profile} alt="" />
        </div> */}

      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className=' row d-flex'>
              <div className='col-md-6 d-flex justify-content-center align-items-center flex-column' data-aos="fade-down">
                <h1 className='header-text'>Hi, I am <span className='text-primary'>Tanzid Mahamud</span></h1>
                <p className='text-white p-4'>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
              </div>
              <div className='col-md-6'>
                {/* <div className='d-flex justify-content-center'>
                  <img style={{ height: '200px', width: '200px', padding: '20px' }} src={profile} alt="..." data-aos="fade-down" />
                  <img style={{ height: '200px', width: '200px', padding: '20px' }} src={profile2} alt="..." data-aos="fade-left" />
                </div> */}
                {/* <img style={{ height: '200px', width: '200px', display: 'block', padding: '20px', margin: 'auto' }} src={profile3} alt="..." data-aos="fade-right" /> */}
                <img className='img-fluid' data-aos="fade-left" style={{ height: '500px', width: '500px' }} src={profile1} alt="" />
              </div>
            </div>
          </div>
          <div class="carousel-item">
          <div className=' row d-flex'>
              <div className='col-md-6 d-flex justify-content-center align-items-center flex-column' data-aos="fade-down">
                <h1 className='header-text'>Hi, I am <span className='text-primary'>Tanzid Mahamud</span></h1>
                <ul className='text-white d-flex'><li className ='m-4'>Web Developer</li> <li  className ='m-4'>Programmer</li> </ul>
              </div>
              <div className='col-md-6'>
                <div className='d-flex justify-content-center'>
                  <img style={{ height: '250px', width: '250px', padding: '20px', borderRadius :'25px' }} src={profile} alt="..." data-aos="fade-down" />
                  <img style={{ height: '250px', width: '250px', padding: '20px', borderRadius :'25px' }} src={profile2} alt="..." data-aos="fade-left" />
                </div>
                <img style={{ height: '250px', width: '250px', display: 'block', padding: '20px', margin: 'auto', borderRadius :'25px' }} src={profile3} alt="..." data-aos="fade-right" />
              </div>
            </div>
          </div>
          <div class="carousel-item">
          <div className=' row d-flex'>
              <div className='col-md-6 d-flex justify-content-center align-items-center flex-column' data-aos="fade-down">
                <h1 className='header-text'>Hi, I am <span className='text-primary'>Tanzid Mahamud</span></h1>
                <p className='text-white p-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut impedit aspernatur dolorem magni perspiciatis expedita distinctio accusamus, magnam eum asperiores et quasi fuga.</p></div>
              <div className='col-md-6'>
                <div className='d-flex justify-content-center'>
                  <img style={{ height: '200px', width: '200px', padding: '20px' }} src={profile} alt="..." data-aos="fade-down" />
                  <img style={{ height: '200px', width: '200px', padding: '20px' }} src={profile2} alt="..." data-aos="fade-left" />
                </div>
                <img style={{ height: '200px', width: '200px', display: 'block', padding: '20px', margin: 'auto' }} src={profile3} alt="..." data-aos="fade-right" />
              </div>
            </div>
          </div>
        </div>
      </div>































      <div data-aos="fade-right" className=' ml-5 mt-5'>
        <button className=" btn btn-primary mr-4" onClick={handleAboutMe}>About Me</button>
        <a href="https://drive.google.com/u/0/uc?id=1--g5sHDHJysGBoVNUGtUD9VJrfnYq6RD&export=download" className='text-white'><button className=" btn btn-primary" >My Resume </button></a>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;