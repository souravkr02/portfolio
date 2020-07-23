import React from 'react';

const Footer = () => {
    const fDate = new Date().getFullYear();


    return (
        <>
            <footer className="w-100 bg-light text-center">
            
            <div class="contact-links">
                <a
                    href="https://facebook.com/imsouravkr/"
                    target="_srv"
                    class="btn contact-details">
                        <i class="fa fa-facebook-square"></i> Facebook</a
                >
                <a
                    id="profile-link"
                    href="https://github.com/souravkr02"
                    target="_srv"
                    class="btn contact-details"
                ><i class="fa fa-github"></i> GitHub</a>
                <a
                    id="profile-link"
                    href="https://www.instagram.com/iamsourav_kr/"
                    target="_srv"
                    class="btn contact-details"
                ><i class="fa fa-instagram"></i> Instagram</a>
                
                
                
                <a
                    href="https://www.linkedin.com/in/sourav-kr/"
                    target="_srv"
                    class="btn contact-details">
                        <i class="fa fa-linkedin"></i> LinkedIn</a
                >
                <a href="mailto:sourav.kumar@outlook.com" class="btn contact-details"
                ><i class="fas fa-at"></i> E-mail</a
                >
                <a
                    href="https://twitter.com/thisisSouravKr"
                    target="_srv"
                    class="btn contact-details"
                ><i class="fa fa-twitter"></i> Twitter</a
                >
                
                <a href="tel:+917870633889" class="btn contact-details"
                ><i class="fas fa-phone"></i> Phone </a
                >
            </div>
            <p><br />{fDate} © S O U R A V</p>


        </footer>
        </>
    );

};

export default Footer;