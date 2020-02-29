import initPopups from './parts/popups';
import initSliders from './parts/sliders';
import handleFormSubmit from './parts/form';
import saveToLocalStorage from './parts/local';
import validEmail from './parts/valid';

$(document).ready(() => {
  initSliders();
  initPopups();
  saveToLocalStorage();
  handleFormSubmit();
  validEmail();
});