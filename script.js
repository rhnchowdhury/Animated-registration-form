let clickLink = document.querySelector('.container');
let regLink = document.querySelector('.sign-link');
let logLink = document.querySelector('.login-link');

regLink.addEventListener('click', () => {
    clickLink.classList.add('active');
});

logLink.addEventListener('click', () => {
    clickLink.classList.remove('active');
});