var form = document.getElementById('form');
var title = document.getElementById('title');
var desc = document.getElementById('description');
var license = document.getElementById('license');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (title.value.trim() === '') {
        throwError(title, 'Title cannot be blank');
    } else {
        giveSuccess(title);
    }

    if (desc.value.trim() === '') {
        throwError(desc, 'Description cannot be blank');
    } else {
        giveSuccess(desc);
    }

    if (license.checked) {
        giveSuccess(license);
    }
    else {
        throwError(license, 'You must accept the license');
    }
});

function throwError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function giveSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
