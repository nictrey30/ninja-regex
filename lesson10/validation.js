// validation script here
// var reg2 = new RegExp(/[a-z]/, 'i');

let patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\d\w@-]{8,20}$/i,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

const form = document.querySelector('form');

const validate = (field, regex) => {
  if (regex.test(field.value)) {
    field.className = 'success';
  } else {
    field.className = 'error';
  }
};

form.addEventListener('keyup', (e) => {
  if (e.target.name === 'telephone') {
    validate(e.target, patterns.telephone);
  }
  if (e.target.name === 'username') {
    validate(e.target, patterns.username);
  }
  if (e.target.name === 'password') {
    validate(e.target, patterns.password);
  }
  if (e.target.name === 'slug') {
    validate(e.target, patterns.slug);
  }
  if (e.target.name === 'email') {
    validate(e.target, patterns.email);
  }
});
