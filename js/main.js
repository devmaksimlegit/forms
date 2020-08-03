const forms = document.querySelectorAll('.form');

forms.forEach(function (form) {
  form.onsubmit = function (event) {
    event.preventDefault();
    const inputs = this.querySelectorAll('.form__input--password');

    for (let input of inputs) {
      const letters = input.value.split('');
      let numsArr = [];
      let strsArr = [];
      for (let letter of letters) {
        if (isNaN(letter - 0)) {
          strsArr.push(letter);
        } else {
          numsArr.push(letter);
        }
      }
      if (numsArr.length < 5 || strsArr.length < 2) {
        input.classList.add('form__input--error');
      } else {
        input.classList.remove('form__input--error');
      }
    }
    let errorsArr = [];
    for (let input of inputs) {
      if (input.classList.contains('form__input--error')) {
        errorsArr.push(input);
      }
    }
    if (errorsArr.length > 0) {
      this.classList.add('form--error');
    } else {
      this.classList.remove('form--error');
      this.submit();
    }
  }
});