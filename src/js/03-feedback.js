const throttle = require("lodash.throttle");


const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea')
};

refs.form.addEventListener('input', throttle((onEmailInput), 500));
refs.form.addEventListener('submit', onSubmitForm);

populteTextarea();

// Функція, яка зберігає стан форми у локальне сховище з використанням lodash.throttle
function onEmailInput() {
    const informations = {
        email: refs.input.value,
        message: refs.textarea.value
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(informations));
}

// Функція, яка зберігає дані у консоль після Submit та очищає поля вводу та локальне сховище
function onSubmitForm(evt) {
    evt.preventDefault();

    console.log(`saved email: ${refs.input.value}, message: ${refs.textarea.value}`);

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

// Функція, яка заповнює поля форми збереженими даними з локального сховища
function populteTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedMessage) {
        console.log('перезагр', savedMessage);
        
        refs.input.value = savedMessage.email;
        refs.textarea.value = savedMessage.message;
    }
}
