import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input[name="email"]');
const textareaEl = document.querySelector('textarea[name="message"]');

const formData = { 
    email: '', 
    message: '' 
};
const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('submit', onFormSubmit);
inputEl.addEventListener('input', onInputChange);
textareaEl.addEventListener('input', throttle(onTextareaChange, 500));

onPageReload();

function onInputChange(e) {
    formData.email = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


function onTextareaChange(e) {
  formData.message = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
};

function onPageReload() { 
    const parsedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (parsedFormData) { 
        inputEl.value = parsedFormData.email;
        textareaEl.value = parsedFormData.message;
        formData.email = parsedFormData.email;
        formData.message = parsedFormData.message;
    };
};