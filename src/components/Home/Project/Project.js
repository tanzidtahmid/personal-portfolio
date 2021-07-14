import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = ({ project }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <div data-aos="fade-right" className='col-md-4'>
            <div className='project-items py-5 mx-4'>
                <img className='img' src={project.image} alt="" />
                <h3>{project.name}</h3>


                <div>
                    <p>{project.discreption}</p>
                </div>
                <div>
                    <h6>Tecnology Used</h6>
                    <hr />
                    <ul className='tec-list'>
                        {
                            project.tecnology.map(tec => <li>{tec}</li>)
                        }
                    </ul>
                
                    <div className='links'>
                        <a className='mx-1 text-white' href={project.liveLink} target="_blank"><FontAwesomeIcon icon = {faExternalLinkAlt} size = '2x'></FontAwesomeIcon></a>
                        <a className='mx-1 text-white' href={project.clientSite} target="_blank"><FontAwesomeIcon icon = {faGithub} size = '2x'></FontAwesomeIcon></a>
                        <a className='mx-1 text-white' href={project.surverSite} target="_blank"><FontAwesomeIcon icon = {faGithub} size = '2x'></FontAwesomeIcon> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;