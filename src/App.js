import 'bulma/css/bulma.css'
import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Cv from './CV/Cv';
import Kontakt from './Kontakt/Kontakt';
import LanguageSelect from './LanguageSelector'
import './scss/style.scss'
import { useTranslation } from 'react-i18next'
import 'font-awesome/css/font-awesome.min.css';





function App() {
  const { t } = useTranslation()

  function PadajuciM() {
    const x = document.getElementsByClassName('padajuciMeni')
    if (x.length > 0) {
      const prviElement = x[0];


      if (prviElement.style.display === "block") {
        prviElement.style.display = "none";
      } else {
        prviElement.style.display = "block";
      }
     
    }
  }

  return (

    <Router>

      <div className='pozadina'>


        <div className="tabs is-large desktop-menu">
          <ul>
            <li className='li'><Link to="/" className="is-active">{t("Pocetna")}</Link></li>
            <li className='li'><Link to="/cv" className="is-active">{t("CV")}</Link></li>
            <li className='li'><Link to="/kontakt" className="is-active">{t("Kontakt")}</Link></li>
            <LanguageSelect />
          </ul>
        </div>



        <div className='navZaTel'>
          <button className='dugmeMenija' onClick={PadajuciM}>☰</button>
          <div className='padajuciMeni'>
            <ul>
              <li className='li'><Link to="/" className="is-active">{t("Pocetna")}</Link></li>
              <li className='li'><Link to="/cv" className="is-active">{t("CV")}</Link></li>
              <li className='li'><Link to="/kontakt" className="is-active">{t("Kontakt")}</Link></li>
              <LanguageSelect />
            </ul>
          </div>

        </div>





        <Switch>
          <Route path="/cv">
            <Cv />
          </Route>
          <Route path="/kontakt">
            <Kontakt />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router >


  )
}


export default App;
