import React, { useState } from "react";
import i18n from './i18n';
import 'font-awesome/css/font-awesome.min.css';
import rsSlika from './images/rsZastava.png';
import zastavaA from './images/zastavaA.png';

const LanguageSelector = () => {

    /* eslint-disable */
    const [_, setSelectedLanguage] = useState(i18n.language);

    const chooseLanguage = (e) => {
        i18n.changeLanguage(e);
        setSelectedLanguage(e);
        localStorage.setItem("lang", e);
    }
    return (
        <div className="divL">
            <button className="buttonL" onClick={() => chooseLanguage("rs")}><img src={rsSlika} width="20px" height="20px" alt="rs"></img></button>
            <button className="buttonL" onClick={() => chooseLanguage("en")}><img src={zastavaA} width="20px" height="20px" alt="en"></img></button>
        </div>

    )


}
export default LanguageSelector