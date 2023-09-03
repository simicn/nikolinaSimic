import React from 'react';
import { useTranslation } from 'react-i18next'
import nina from './images/nina.jpg'


function Biografija() {
  const { t } = useTranslation();


  return (
    <div className="biografija">
      <img src={nina} alt="Moja slika" />
      <div className='mojCV'>

        <p>{t("Biografija")}</p>

      </div>

    </div>


  );
}

export default Biografija;
