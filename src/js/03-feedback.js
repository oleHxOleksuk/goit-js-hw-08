const throttle = require('lodash.throttle');
const refs = {
  onInputData: document.querySelector('.feedback-form'),
};

refs.onInputData.addEventListener('input', throttle(handleInputData, 500));
window.addEventListener('load', updateOutputOnload);
refs.onInputData.addEventListener('submit', onSubmit);

function handleInputData(event) {
  event.preventDefault();
  const message = refs.onInputData.elements.message.value;
  const email = refs.onInputData.elements.email.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ message, email })
  );
}

function updateOutputOnload(event) {
  event.preventDefault();
  const OutputText = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ) || {
    email: '',
    message: '',
  };
  const { email, message } = OutputText;
  refs.onInputData.elements.email.value = email;
  refs.onInputData.elements.message.value = message;
}

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  console.log({ email: email.value, message: message.value });
  localStorage.removeItem('feedback-form-state');
  refs.onInputData.reset();
}
