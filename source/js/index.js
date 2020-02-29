import initPopups from './parts/popups';
import initSliders from './parts/sliders';
import handleFormSubmit from './parts/form';
import saveToLocalStorage from './parts/local';
import validEmail from './parts/valid';
import lazyLoad from './parts/lazyload';

$(document).ready(() => {
  initSliders();
  lazyLoad();
  initPopups();
  saveToLocalStorage();
  handleFormSubmit();
  validEmail();
});