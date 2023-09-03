import React from 'react';
import Footer from '../Footer';
import cv from '../images/NikolinaSimicCV.pdf'
import { useTranslation } from 'react-i18next'


function Cv() {
  const {t} = useTranslation()
  console.log(window.location.origin + t("CVslika"))
  return (
    <div>
      <img className='cv-img' src={window.location.origin + t("CVslika")} alt="cv" />
      <div className='skiniCV'>
      <a href={cv} download className="lazno-dugme">{t("PreuzmiCV")}</a>
      </div>
      <Footer />
    </div >
  );
}

export default Cv;






