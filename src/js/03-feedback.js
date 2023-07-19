import throttle from "lodash.throttle";
const formEL = document.querySelector(".feedback-form")
const FORM_KEY = `feedback-form-state`;
handlerFillForm();
function onFormInput(evt) {
    let formInfo = localStorage.getItem(FORM_KEY);
    formInfo = formInfo ? JSON.parse(formInfo) : {};
    formInfo[evt.target.name] = evt.target.value;
    localStorage.setItem(FORM_KEY, JSON.stringify(formInfo));
}

function handlerFillForm() {
    let savedInfo = localStorage.getItem(FORM_KEY);
    if (savedInfo) {
        savedInfo = JSON.parse(savedInfo)
    
    Object.entries(savedInfo).forEach(([key, text]) => {
        formEL.elements[key].value = text || '';
    });
        }
}
function onFormSubmit(evt) {
    evt.preventDefault();
    const { elements: { email, message } } = evt.currentTarget;
    if (email.value === '' || message.value === '') {
        return alert(`fill all the fields`)
    }
    else {
        let formData = JSON.parse(localStorage.getItem(FORM_KEY));
        console.log(formData)
        evt.currentTarget.reset();
        localStorage.removeItem(FORM_KEY);
        formData = {};
    }
}
     formEL.addEventListener("input", throttle(onFormInput, 500)) 
formEL.addEventListener('submit', onFormSubmit);
