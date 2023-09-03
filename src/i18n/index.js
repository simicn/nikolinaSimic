import i18n from 'i18next'; 
import{initReactI18next} from 'react-i18next';

import translationInRS from '../locales/rs/translation.json';
import translationInEN from '../locales/en/translation.json';


const resources={
    rs:{
        translation:translationInRS
    },
    en:{
        translation:translationInEN

    }
}


i18n
.use(initReactI18next)
.init({
  resources,
  lng: localStorage.getItem("lang"),
  debug:true,
  fallbackLng:"rs",
  interpolation:{escapeValue: false},
  ns:"translation",
  defaultNS: "translation"



});
export default i18n;

