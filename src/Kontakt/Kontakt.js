import React from 'react';
import SlanjeMejla from '../SlanjeMejla'
import Footer from '../Footer';
import { useTranslation } from 'react-i18next'

function Kontakt() {
    const {t} = useTranslation()

    return (
        <div>
        <div className='kon'>
            <p> <strong>{t("E-mail")}</strong> : nikolina__simic__@hotmail.com</p>
           
            <SlanjeMejla/>

        </div>
        <Footer/>
        </div>
    )
}
export default Kontakt

