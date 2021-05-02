import React from 'react';
import './Project.css'

const Project = ({project}) => {
    return (
        <div className ='py-5 col-md-4 box'>
            <div className = 'a'>
            <img className = 'img' style={{height : '200px', width : '300px'}} src={project.image} alt=""/>
            <h3>{project.name}</h3>
           
            <div className = 'row  links'>
            <a  className ='col-md-4 text-white' href={project.liveLink} target="_blank">Live Site</a>
            <a className ='col-md-4 text-white' href={project.clientSite} target="_blank">Client Site Code</a>
            <a className ='col-md-4 text-white' href={project.surverSite} target="_blank">Server Site Code</a>
            </div>
            </div>
        </div>
    );
};

export default Project;