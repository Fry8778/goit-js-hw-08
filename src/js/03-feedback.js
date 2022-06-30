import throttle from 'lodash.throttle';
import '../css/03-feedback.css';
import '../css/common.css';
 
const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaSubmit, 1000));

populateTextarea();

function onFormSubmit(e) {
    e.preventDefault();

    e.currentTarget.reset();
    localStorage.removeItem('STORAGE_KEY');
}



function onTextareaInput(e) {
    const message = e.currentTarget.value;

    localStorage.setItem('STORAGE_KEY', message);
    localStorage.setItem('STORAGE_KEY', email )
}

function populateTextarea() {
    const saveMessage = localStorage.getItem('STORAGE_KEY');

    if (saveMessage) {
        refs.textarea.value = saveMessage; 
    }
        
}

