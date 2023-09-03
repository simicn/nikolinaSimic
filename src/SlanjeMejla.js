import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next'

function EmailButton() {
  const {t} = useTranslation()

  const sendEmail = () => {
    const email = "nikolina__simic__@hotmail.com";
    

    const mailtoLink = `mailto:${email}?`;
    window.location.href = mailtoLink;
  };

  return (
    <button className="btn btn-secondary" onClick={sendEmail}>{t("PosaljiMejl")}</button>
  );
}

export default EmailButton;
