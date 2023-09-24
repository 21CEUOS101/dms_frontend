
import emailjs from '@emailjs/browser';

export const Email = (props) => {

    const SERVICE_ID = "service_m4kodr6";
    const TEMPLATE_ID = "template_2j3fi1b";
    const PUBLIC_KEY = "0G9dce03Iyibld8t2";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, props.data, PUBLIC_KEY);

};