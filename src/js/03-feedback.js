import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const formData = {}

const formEl = document.querySelector("form");
const emailEl = document.querySelector('input[name="email"]');
const textareaEl = document.querySelector('textarea[name="message"]');



formEl.addEventListener("submit", onFormSubmit);
textareaEl.addEventListener("input", throttle(onTextAreaChange, 500));
formEl.addEventListener("input", e => {
    formData[e.target.name] = e.target.value;
    const stringFormData = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, stringFormData);
});

onPageReload();

function onTextAreaChange(e){
    formData.message = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData.message));
}

  function onFormSubmit(e){
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    
  }

function onPageReload(){
    const parsedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(parsedFormData){
        emailEl.value = parsedFormData.email;
        textareaEl.value = parsedFormData.message;
        formData.email =  parsedFormData.email;
        formData.message = parsedFormData.message;
    };
};
