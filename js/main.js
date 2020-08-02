const input = document.querySelector('.form__input');
const form = document.querySelector('.form');

form.onsubmit = function () {
  const arr = input.value.split('');
  let outputArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - 0 === NaN) {
      outputArr[i] = arr[i];
    } else {
      outputArr[i] = arr[i] - 0;
    }
  }
  console.log(outputArr);
}