
var ESC_CODE = 27;
var feedBackBtn = document.querySelector('.feedback');
var popup = document.querySelector('.popup');
var form = document.querySelector('.wright-us');
var close = document.querySelector('.form-close');
var nameField = form.querySelector('[name=name]');
var emailField = form.querySelector('[name=e-mail]');
var letterField = form.querySelector('[name=letter]');
var storageName = localStorage.getItem("userName");
var storageEmail = localStorage.getItem("userEmail");

function checkField(check, source, target) {
  if (check) {
    source.value = check;
    target.focus();
    return true;
  } else {
    source.focus();
    return false;
  }
}


feedBackBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  if (checkField(storageName, nameField, emailField)) {
    checkField(storageEmail, emailField, letterField);
  }
});

form.addEventListener('submit', function (evt) {
  if (!nameField.value || !emailField.value || !letterField.value){
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
    localStorage.setItem('userName', nameField.value);
    localStorage.setItem('userEmail', nameField.value);
  }
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_CODE) {
    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
    }
  }
});

