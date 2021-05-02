import React from 'react';
import Footer from '../../Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';

import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css'

const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Header></Header>
            <div className ='row' style = {{backgroundColor: 'tomato', color : 'white'}}>
                <div className ='col-md-1 ' >
                    <div className = 'fontAwesome mt-5 py-5 '>
                    <a style = {{color: 'white'}} href="https://github.com/tanzidtahmid"><FontAwesomeIcon icon={faGithub}   size = '2x'></FontAwesomeIcon></a>
                    <a  style = {{color: 'white'}} href="https://www.facebook.com/tanjid.mahamud"><FontAwesomeIcon icon={faFacebook}    size = '2x'></FontAwesomeIcon></a>
                    
                    <a  style = {{color: 'white'}} href="https://www.linkedin.com/in/tanjid-mahamud-043860206/"><FontAwesomeIcon icon={faLinkedin} size = '2x'></FontAwesomeIcon></a>
                </div>
                </div>
                <div className ='col-md-11'>
            <Projects></Projects>
            <Blogs></Blogs>
            <Footer></Footer>
            </div>
            </div>
        </div>
    );
};

export default Home;