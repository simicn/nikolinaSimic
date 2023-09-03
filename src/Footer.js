import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { useTranslation } from 'react-i18next'



function Footer() {
    const {t} = useTranslation()
    return (
        <footer>
            <div className='kontakt-inf'>
                <p>nikolina__simic__@hotmail.com</p>
                
            </div>
            <div className='copyright'>
                &copy; {new Date().getFullYear()} Nikolina Simić
                <a className='insta' href="https://www.instagram.com/simic_nikolina/">
                    <i className="fa fa-instagram fa-lg"></i>
                </a>
                <a className='git' href="https://github.com/simicn/">
                    <i className="fa fa-github fa-lg"></i>
                </a>
                <a  className='linkdin' href="https://www.linkedin.com/in/nikolina-simic-921655284/">
                    <i className="fa fa-linkedin fa-lg"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
