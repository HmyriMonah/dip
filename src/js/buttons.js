/* eslint-disable no-undef */
console.log('hello 1232321');

//open form buttons
const firstThemeOpenButton = document.getElementById('first-html-theme');
const secondThemeOpenButton = document.getElementById('second-html-theme');
const thirdThemeOpenButton = document.getElementById('third-html-theme');
const fourthThemeOpenButton = document.getElementById('fourth-html-theme');
const fifthThemeOpenButton = document.getElementById('fifth-html-theme');
const sixthThemeOpenButton = document.getElementById('sixth-html-theme');
const seventhThemeOpenButton = document.getElementById('seventh-html-theme');

const formsList = document.getElementsByClassName('theory-form');




//forms
const firstTheme = document.getElementById('first-theme-form');
const secondThemeForm = document.getElementById('second-theme-form');
const thirdThemeForm = document.getElementById('third-theme-form');
const fourthThemeForm = document.getElementById('fourth-theme-form');
const fifthThemeForm = document.getElementById('fifth-theme-form');
const sixthThemeForm = document.getElementById('sixth-theme-form');
const seventhThemeForm = document.getElementById('seventh-theme-form');


console.log(seventhThemeForm);

const content = document.getElementById('main-content');

const listNext = document.getElementsByClassName('next navigation'); //list next buttons

const listPrevious = document.getElementsByClassName('previous navigation'); //list Previous buttons

listNext[0].onclick = function () {
  firstTheme.classList.remove('theory-form-flex');
  secondThemeForm.classList.add('theory-form-flex');
};

listNext[1].onclick = function () {
  secondThemeForm.classList.remove('theory-form-flex');
  thirdThemeForm.classList.add('theory-form-flex');
};

listNext[2].onclick = function () {
  thirdThemeForm.classList.remove('theory-form-flex');
  fourthThemeForm.classList.add('theory-form-flex');
};

listNext[3].onclick = function () {
  fourthThemeForm.classList.remove('theory-form-flex');
  fifthThemeForm.classList.add('theory-form-flex');
};

listNext[4].onclick = function () {
  fifthThemeForm.classList.remove('theory-form-flex');
  sixthThemeForm.classList.add('theory-form-flex');
};

listNext[5].onclick = function () {
  sixthThemeForm.classList.remove('theory-form-flex');
  seventhThemeForm.classList.add('theory-form-flex');
};


listPrevious[0].onclick = function () {
  secondThemeForm.classList.remove('theory-form-flex');
  firstTheme.classList.add('theory-form-flex');
};

listPrevious[1].onclick = function () {
  thirdThemeForm.classList.remove('theory-form-flex');
  secondThemeForm.classList.add('theory-form-flex');
};

listPrevious[2].onclick = function () {
  fourthThemeForm.classList.remove('theory-form-flex');
  thirdThemeForm.classList.add('theory-form-flex');
};

listPrevious[3].onclick = function () {
  fifthThemeForm.classList.remove('theory-form-flex');
  fourthThemeForm.classList.add('theory-form-flex');
};

listPrevious[4].onclick = function () {
  sixthThemeForm.classList.remove('theory-form-flex');
  fifthThemeForm.classList.add('theory-form-flex');
};

listPrevious[5].onclick = function () {
  seventhThemeForm.classList.remove('theory-form-flex');
  sixthThemeForm.classList.add('theory-form-flex');
};



function closeForms(){
  Array.from(formsList).forEach(elem => {
    elem.classList.remove('theory-form-flex');
});
}

function showContent() {
  document.body.classList.remove('darkBackGround');
  content.classList.remove('content-hidden');
  closeForms();
}

//close theory form
document.onclick = function () {
  if (event.target.className == 'close' || event.target.className == 'closeForm navigation') {
    showContent();
  }
};

//open first dorm
firstThemeOpenButton.onclick = function () {
  firstTheme.classList.add('theory-form-flex');
  document.body.className = 'darkBackGround';
  content.className = 'content-hidden';
};

//open second dorm
secondThemeOpenButton.onclick = function () {
  secondThemeForm.classList.add('theory-form-flex');
  document.body.className = 'darkBackGround';
  content.className = 'content-hidden';
};

//open third dorm
thirdThemeOpenButton.onclick = function () {
  thirdThemeForm.classList.add('theory-form-flex');
  document.body.className = 'darkBackGround';
  content.className = 'content-hidden';
};

//open fourth dorm
fourthThemeOpenButton.onclick = function () {
  fourthThemeForm.classList.add('theory-form-flex');
  document.body.className = 'darkBackGround';
  content.className = 'content-hidden';
};

//open fourth dorm
fifthThemeOpenButton.onclick = function () {
  fifthThemeForm.classList.add('theory-form-flex');
  document.body.className = 'darkBackGround';
  content.className = 'content-hidden';
};

sixthThemeOpenButton.onclick = function () {
  sixthThemeForm.classList.add('theory-form-flex');
  document.body.className = 'darkBackGround';
  content.className = 'content-hidden';
};

seventhThemeOpenButton.onclick = function () {
  seventhThemeForm.classList.add('theory-form-flex');
  document.body.className = 'darkBackGround';
  content.className = 'content-hidden';
};