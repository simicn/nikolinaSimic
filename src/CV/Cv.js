import React from 'react';
import Footer from '../Footer';
import { useTranslation } from 'react-i18next'


function Cv() {
  const {t} = useTranslation()
 
  return (
    <div>
      <img className='cv-img' src={window.location.origin + t("CVslika")} alt="cv" />
      <div className='skiniCV'>
      <a href={window.location.origin + t("CVdocument")} download className="lazno-dugme">{t("PreuzmiCV")}</a>
      </div>
      <Footer />
    </div >
  );
}

export default Cv;






