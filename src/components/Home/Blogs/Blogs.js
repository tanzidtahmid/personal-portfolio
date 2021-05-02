import React from 'react';
import blogpic1 from '../../../images/4.jpg';
import blogpic2 from '../../../images/5.jpg';
import blogpic3 from '../../../images/6.jpg';
import Blog from './Blog';

const Blogs = () => {
    const blogs = [
        {
            image : blogpic1,
            title : '5 way to learn programming effectivly',
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi molestiae exercitationem in!"
        },
        {
            image : blogpic2,
            title : 'For learning Javascript What should we know',
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi molestiae exercitationem in!"
        },
        {
            image : blogpic3,
            title : 'Right way to set up coumuter for programming',
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi molestiae exercitationem in!"
        },
    ]
    return (
        <div>
            <h4 class="text-center py-5">My Blogs</h4>
            <div className ='row text-center'>
                {
                    blogs.map(blog=><Blog blog = {blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;