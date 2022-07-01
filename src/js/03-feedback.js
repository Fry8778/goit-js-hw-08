import {throttle} from 'lodash';
import '../css/03-feedback.css';
import '../css/common.css';

let  formData = {};
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector ('.feedback-form input');

const onFormSubmit = (e) => {
    e.preventDefault();    
    form.reset();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
}

const onFormInput = (e) => {  
    formData[e.target.name]=e.target.value;     
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
   
}

const  populateTextarea = () => {   
    const valuesChanged = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!valuesChanged) {
      return;
    }
  
    if (valuesChanged['email']) {
      input.value = valuesChanged['email'];
    }
  
    if (valuesChanged['message']) {
      textarea.value = valuesChanged['message'];
    }
  
    formData = { ...valuesChanged };
  
};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 1000));

populateTextarea();