import React from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../Home/Navbar/Navbar'

const ContactWithMe = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_yj3hih7', 'template_lde9kwf', e.target, 'user_puTCd55278WjgwuyzYLnp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div style ={{backgroundColor : 'tomato'}}>
            <Navbar ></Navbar>
        
        <div className='d-flex justify-content-center' >
          
            <form className="contact-form pt-5" style ={{width : '400px'}} onSubmit={sendEmail}>
                <div class="mb-3">
                    <input type="text" required class="form-control" id="exampleFormControlInput1" name="user_name" placeholder="Enter Your Name" />
                </div>
                <div class="mb-3">
                    <input type="email" required name="user_email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <textarea class="form-control" required id="exampleFormControlTextarea1" placeholder ='Enter Your Text' name="message" rows="10"></textarea>
                </div>
                <div className = 'mb-3'>
                <input type="submit" className ='bg-primary text-white px-4 py-2 rounded' value="Send" />
                </div>
            </form>
        </div>
        </div>
    );
};

export default ContactWithMe;