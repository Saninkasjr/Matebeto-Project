const form = document.getElementById('loginForm');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const email = document.getElementById('email');
      const password = document.getElementById('password');
      const password2 = document.getElementById('password2');

      if (!email.checkValidity()) {
        email.classList.add('is-invalid');
      } else {
        email.classList.remove('is-invalid');
      }

      if (!password.checkValidity()) {
        password.classList.add('is-invalid');
      } else {
        password.classList.remove('is-invalid');
      }

      if (!password2.checkValidity()) {
        password2.classList.add('is-invalid');
      } else {
        password2.classList.remove('is-invalid');
      }

      if (password.value !== password2.value) {
        password2.classList.add('is-invalid');
        password2.nextElementSibling.innerHTML = 'Passwords do not match.';
      } else {
        password2.classList.remove('is-invalid');
        password2.nextElementSibling.innerHTML = 'Please retype your password.';
      }

      if (form.checkValidity()) {
        // Form is valid, submit it
        // ...
      }
    });