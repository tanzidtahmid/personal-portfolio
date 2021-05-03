import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Blog = ({blog}) => {
    useEffect(()=>{
        AOS.init({duration : 2000});
    },[])

    return (
        <div data-aos="fade-left" className ='col-md-4'>
            <img className ='img-fluid' style ={{height :'300px', width: '350px', borderRadius : '10px'}} src={blog.image} alt=""/>
            <div className ='pl-5 pr-3' style ={{width : '350px', textAlign :'center'}}>
            <h5>{blog.title}</h5>
            <p>{blog.description}</p>
            <button className="btn btn-primary">Read Now</button>
        </div>
        </div>
    );
};

export default Blog;