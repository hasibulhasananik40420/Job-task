import React from 'react';
import { BsFacebook, BsGithub, BsInstagram, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-5 pb-3">

            <span className='d-flex gap-3 justify-content-center'>
                <BsFacebook className='text'></BsFacebook>
                <BsWhatsapp></BsWhatsapp>
                <BsInstagram></BsInstagram>
                <BsGithub></BsGithub>
            </span>
            <div className="footer-copyright text-center py-3">© 2022 Copyright:
                <a href="#"> Hasibul Hasan</a>
            </div>
        </footer>
    );
};

export default Footer;