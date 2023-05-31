import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './components/headerBar';
import './components/skipToContent';
import './components/hero';
import './components/content';
import './components/restaurantDetail';
import './components/testimonial';
import './components/loader';
import './components/footerBar';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import App from './views/app';

import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.nav'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();

  const loader = document.querySelector('loader-component');

  loader.classList.add('loader-hidden');

  loader.addEventListener('transitionend', () => {
    document.body.removeChild(loader);
  });
});
