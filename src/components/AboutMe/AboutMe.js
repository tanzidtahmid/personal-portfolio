import React from 'react';
import profile from '../../images/profile1.png'
import Navbar from '../Home/Navbar/Navbar';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className = 'row pt-5 mt-5'>
                <div className ='col-md-6'>
                    <img style={{ height: '200px', width: '200px' }} src={profile} alt="" />
                    <div>
                        <h4>I'm Tanzid Mahamud</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil incidunt quisquam vitae recusandae, fuga sapiente esse exercitationem, laudantium illo tempore harum. Minima, amet!</p>
                    </div>
                </div>
                <div  className ='col-md-6'>
                    <div>
                        <h3><b>MY SKILLES SET</b></h3>

                        <ul className = 'd-flex flex-wrap'>
                            <li className="listItems">HTML</li>
                            <li className="listItems">CSS</li>
                            <li className="listItems">Bootstrap</li>
                            <li className="listItems">Javascript</li>
                            <li className="listItems">ES6</li>
                            <li className="listItems">React.Js</li>
                            <li className="listItems">Node.Js</li>
                            <li className="listItems">Express.Js</li>
                            <li className="listItems">VS Code</li>
                            <li className="listItems">Firebase</li>
                            <li className="listItems">MongoDB</li>
                            <li className="listItems">C</li>
                            <li className="listItems">NPM</li>
                        </ul>
                    </div>
                    <div>
                        <h3><b>I WANT TO WORK WITH</b></h3>

                        <ul className = 'd-flex flex-wrap'>
                            <li className="listItems">Javascript</li>
                            <li className="listItems">ES6</li>
                            <li className="listItems">React.Js</li>
                            <li className="listItems">Node.Js</li>
                            <li className="listItems">Express.Js</li>
                        </ul>
                    </div>

                    <div>
                        <h3><b>I PREFER NOT TO WORK WITH</b></h3>

                        <ul className = 'd-flex flex-wrap'>
                            <li className="listItems">PHP</li>
                            <li className="listItems">MySQL</li>
                            <li className="listItems">jQuary</li>
                            <li className="listItems">Wordpress</li>

                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AboutMe;