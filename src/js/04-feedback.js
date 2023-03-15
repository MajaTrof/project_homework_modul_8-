import throttle from "../node_modules/lodash.throttle";

const STORAGE_KEY = "feedback-msg";

const refs = {
	form: document.querySelector(".feedback-form-2"),
	textarea: document.querySelector(".feedback-form-2 textarea"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(evt) {
	evt.preventDefault();

	console.log("Відправляємо форму");
	evt.currentTarget.reset();
	localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
	const message = evt.target.value;

	localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
	const savedMessage = localStorage.getItem(STORAGE_KEY);

	if (savedMessage) {
		refs.textarea.value = savedMessage;
	}
}
