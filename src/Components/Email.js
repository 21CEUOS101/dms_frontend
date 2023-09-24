import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email = () => {

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    
};