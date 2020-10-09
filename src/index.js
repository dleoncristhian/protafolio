import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Text from './componentes/Text.js'
import Imagen from './componentes/Imagen.js'
import Button from './componentes/Button.js'
import Scss from './componentes/Scss.js'
import Header from './componentes/Header.js'
import Presentacion from './componentes/Presentacion.js'
import Portafolio from './componentes/Portafolio.js'
import Resumen from './componentes/Resumen.js'
import AboutMe from './componentes/AboutMe.js'
import Testimonio from './componentes/Testimonio.js'
import Servicios from './componentes/Servicios.js'
import Blogs from './componentes/Blogs.js'
import Contacto from './componentes/Contacto.js'
import Footer from './componentes/Footer.js'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Presentacion />
    <Portafolio />
    <Resumen />
    <AboutMe />
    <Testimonio />
    <Servicios />
    <Blogs />
    <Contacto />
    <Footer />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
