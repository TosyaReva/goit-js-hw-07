const invalidMsg = 'All form fields must be filled in';

const enterForm = document.querySelector('.login-form');

enterForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!email.length || !password.length) {
    return alert(invalidMsg);
  }

  const result = {
    email,
    password,
  };
  console.log(result);

  form.reset();
}
