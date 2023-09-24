
import emailjs from '@emailjs/browser';

export const Email = (emailData) => {

    const SERVICE_ID = "service_m4kodr6";
    const TEMPLATE_ID = "template_tly2pwe";
    const PUBLIC_KEY = "0G9dce03Iyibld8t2";

    console.log(emailData);

    emailjs.send(SERVICE_ID, TEMPLATE_ID,emailData,PUBLIC_KEY).then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Email send error:", error);
      });

};