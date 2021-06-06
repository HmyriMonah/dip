/* eslint-disable no-undef */
console.log('hello 1232321');

const firstThemeButton = document.getElementById('first-html-theme');
const secondThemeOpenButton = document.getElementById('second-html-theme');

const firstTheme = document.getElementById('first-theme-form');
const secondTheme = document.getElementById('second-theme-form');

const content = document.getElementById('main-content');

const listNext = document.getElementsByClassName('next navigation'); //list next buttons

const listPrevious = document.getElementsByClassName('previous navigation'); //list Previous buttons

listNext[0].onclick = function () {
  firstTheme.classList.remove('theory-form-flex');
  secondTheme.classList.add('theory-form-flex');
};

listPrevious[0].onclick = function () {
  secondTheme.classList.remove('theory-form-flex');
  firstTheme.classList.add('theory-form-flex');
};


function showContent() {
  document.body.classList.remove('darkBackGround');
  content.classList.remove('content-hidden');
  firstTheme.classList.remove('theory-form-flex');
  secondTheme.classList.remove('theory-form-flex');
}

document.onclick = function () {
  console.log(event.target.id);
  //close theory form
  if (event.target.className == 'close' || event.target.className == 'closeForm navigation') {
    showContent();
  }
};

firstThemeButton.onclick = function () {
  firstTheme.classList.add('theory-form-flex');
  document.body.className = 'darkBackGround';
  content.className = 'content-hidden';
};

secondThemeOpenButton.onclick = function () {
  secondTheme.classList.add('theory-form-flex');
  document.body.className = 'darkBackGround';
  content.className = 'content-hidden';
};