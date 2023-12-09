import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useSelector } from 'react-redux';

const SendMail = () => {

        const allStatesData = useSelector(state => state)
        console.log(allStatesData);


        const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_hxt6ark', 'template_0g5uxdd', form.current, 'Kqji21Zb0xckJGvjk')
                .then((result) => {
                    console.log(result.text);
                    console.log('Message Sent');

                }, (error) => {
                    console.log(error.text);
                });
        }
        

        return (
            <div>
                <h2>HI</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        )
    
}

export default SendMail
