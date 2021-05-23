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
            surverSite : 'https://github.com/Porgramming-Hero-web-course/complete-website-server-tanzidtahmid',
            tecnology : ['ReactJs','Boostrap','MatarialUI','HTML5','CSS3','Firebase','NodeJs','ExpressJs','MongoDb'],
            discreption : 'Sunrise Tution is a Tution website for students and teacher. It provide many courses for students. Students can enroll the courses. After finishing Courses, they can also give their Review'

        },
        {
            name : 'Grocery Shop',
            image : groceryShop,
            liveLink : 'https://assignment-010.web.app/',
            clientSite : 'https://github.com/Porgramming-Hero-web-course/full-stack-client-tanzidtahmid',
            surverSite : 'https://github.com/Porgramming-Hero-web-course/full-stack-server-tanzidtahmid',
            tecnology : ['ReactJs','Boostrap','MatarialUI','HTML5','CSS3','Firebase','NodeJs','ExpressJs','MongoDb'],
            discreption : 'Grocery Shop is a online Shop where a buyer can buy grocery products. It has an admin panal by which admins can add or delet their products. '

        },
        {
            name : 'Dhakar Chaka',
            image : dhakarChaka,
            liveLink : 'https://assignment-009.web.app/',
            clientSite : 'https://github.com/Porgramming-Hero-web-course/react-auth-tanzidtahmid',
            surverSite : '',
            tecnology : ['ReactJs','Boostrap','MatarialUI','HTML5','CSS3','Firebase'],
            discreption : 'Dhakar Chaka is a rideing website. User can use it for their transpotation. User can hair any kind of vichal which he wants. He can also select places where he wants to go'
        },
      
    ]
    return (
        <div className =' py-5' style={{backgroundColor : '#0a192f'}}>
            <h2  className ='text-center  py-5'>My Projects</h2>
            <div className = ' row text-center'>
            {
                projectsFakeData.map(project => <Project project = {project}></Project> )
            }
            </div>
        </div>
    );
};

export default Projects;