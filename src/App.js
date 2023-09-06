import 'bulma/css/bulma.css'
import React, { useState } from 'react';
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

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
          <button className='dugmeMenija' onClick={toggleMenu}>
            <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
          <div className={"padajuciMeni " + (menuOpen ? 'otvoren' : '')}>
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
