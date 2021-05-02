import React from 'react';
import QueueAnim from 'rc-queue-anim';
import ReactDom from 'react-dom';
import sinriseTution from '../../../images/sunrise tution.png';
import dhakarChaka from '../../../images/Dhakar Chaka.png';
import groceryShop from '../../../images/Grocery Shop.png';

import Project from '../Project/Project';


const Projects = () => {
    const projectsFakeData = [
        {
            name : 'Sunrise Tution',
            image : sinriseTution,
            liveLink : 'https://assignment-011.web.app/',
            clientSite : 'https://github.com/Porgramming-Hero-web-course/complete-website-client-tanzidtahmid',
            surverSite : 'https://github.com/Porgramming-Hero-web-course/complete-website-server-tanzidtahmid'

        },
        {
            name : 'Grocery Shop',
            image : groceryShop,
            liveLink : 'https://assignment-010.web.app/',
            clientSite : 'https://github.com/Porgramming-Hero-web-course/full-stack-client-tanzidtahmid',
            surverSite : 'https://github.com/Porgramming-Hero-web-course/full-stack-server-tanzidtahmid'

        },
        {
            name : 'Dhakar Chaka',
            image : dhakarChaka,
            liveLink : 'https://assignment-009.web.app/',
            clientSite : 'https://github.com/Porgramming-Hero-web-course/react-auth-tanzidtahmid',
            surverSite : ''
        },
      
    ]
    return (
        <div className =' py-5' style={{backgroundColor : 'tomato'}}>
            <h2  className ='text-center my-5 py-5'>My Projects</h2>
            <div className = ' row text-center'>
            {
                projectsFakeData.map(project => <Project project = {project}></Project> )
            }
            </div>
        </div>
    );
};

export default Projects;