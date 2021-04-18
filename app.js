const input = document.querySelector('#input');
const btn = document.querySelector('button.btn');

btn.onclick = function () {
  input.select();
  document.execCommand('copy');

  alert('Copied!');
};
