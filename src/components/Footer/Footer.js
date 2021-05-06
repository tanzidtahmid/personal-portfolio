import React from 'react';
import { useHistory } from 'react-router';

const Footer = () => {
    const history = useHistory()
    const handleChange = () =>{
        history.push('/contactWithMe')

    }
    return (
        <div className ='text-center'>
            <h5 className ='my-5 pt-5' style={{textAlign : 'center',color : '#64ffda'}}>Whats Next?</h5>
            <h1 className ='text-center color-white'>Get In Touch</h1>
            <p className ='text-center'>I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop a message. I'll try my best to get back to you!</p>

            <button onClick ={handleChange} className="btn btn-primary text-center">Say Hello</button>

        </div>
    );
};

export default Footer;