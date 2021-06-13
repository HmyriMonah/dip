/* eslint-disable no-undef */
console.log('hello 1232321');

//open form buttons
const firstThemeOpenButton = document.getElementById('first-html-theme');
const secondThemeOpenButton = document.getElementById('second-html-theme');
const thirdThemeOpenButton = document.getElementById('third-html-theme');
const fourthThemeOpenButton = document.getElementById('fourth-html-theme');

const formsList = document.getElementsByClassName('theory-form');

//forms
const firstTheme = document.getElementById('first-theme-form');
const secondThemeForm = document.getElementById('second-theme-form');
const thirdThemeForm = document.getElementById('third-theme-form');
const fourthThemeForm = document.getElementById('fourth-theme-form');

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

function closeForms() {
  Array.from(formsList).forEach((elem) => {
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

const helloWorldButton = document.getElementById('code-example__HelloWorld');

helloWorldButton.onclick = function () {
  alert('Hello World!');
};

const numberButton = document.getElementById('code-example__numbers');

numberButton.onclick = function () {
  alert(8 + 1);
};

const strButton = document.getElementById('code-example__string');

strButton.onclick = function () {
  let world = 'мир.';
  alert(`Привет ${world}`);
  alert(`Сумма: ${9 + 1}`);
};

const boolButton = document.getElementById('code-example__bool');

boolButton.onclick = function () {
  alert(2 < 3);
};

const promptButton = document.getElementById('code-example__prompt');

promptButton.onclick = function () {
  let name = prompt('Введите имя', 'имя');
  alert(`Ваше имя ${name}`);
};

const confirmButton = document.getElementById('code-example__confirm');

confirmButton.onclick = function () {
  let quest = confirm('Вы изучаете js?');
  alert(quest);
};

const conditionButton = document.getElementById('code-example__condition');

conditionButton.onclick = function () {
  let example = prompt('2+2= ');
  if (example == 4) {
    alert('Это верно!');
  }
};

const elseConditionButton = document.getElementById('code-example__condition-else');

elseConditionButton.onclick = function () {
  let example = prompt('2+2= ');
  if (example == 4) {
    alert('Это верно!');
  } else {
    alert('Вы ошиблись.');
  }
};

const ifElseConditionButton = document.getElementById('code-example__condition-if-else');

ifElseConditionButton.onclick = function () {
  let example = prompt('2+2= ');
  if (example == 4) {
    alert('Это верно!');
  } else {
    if (example < 4) {
      alert('Слишком мало.');
    } else {
      if (example > 4) {
        alert('Слишком много.');
      }
    }
  }
};

function comparisonOperatorsFirstInput(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    let elem = e.srcElement || e.target;
    let inputString = elem.value;
    inputString = inputString.replace(/\s+/g, '');
    let varible = inputString.substring(0,7);
    let equalsCount = inputString.match(/[\=\?\<]/g);
    if(equalsCount == null) {
       equalsCount= 0 ;
    }else {
       equalsCount= inputString.match(/[\=\?\<]/g).length;
    }
    if (inputString === 'example==25' || inputString === 'example===25') {
      console.log("Всё верно");
      return true;
    }else {
      if(varible !== "example" || (inputString[7]!=="=" && inputString[7]!=="!" && inputString[7]!=="<" && inputString[7]!==">" && inputString.length>8)) {
        console.log("Ошибка в названии переменной");
      }else {
        if (equalsCount>3) {
          console.log("Для проверки достатчно 3 знаков =, (2===2).");
        }else {
          if(equalsCount<= 1) {
            console.log("Вы забыли знак равно ");
          }else {
            if(inputString[7]!=="=") {
              console.log("Вы используете не тот оператор сравнения, нужен '===' или '=='");
            }else {
              console.log("После оператора сравнения нужно указать верный ответ - '25'");
            }
          }
        }
      }
      return false;
    }
  }
}

function comparisonOperatorsSecondInput(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    let elem = e.srcElement || e.target;
    let inputString = elem.value;
    inputString = inputString.replace(/\s+/g, '');
    let varible = inputString.substring(0,7);
    let equalsCount = inputString.match(/[\=\?\<]/g);
    if(equalsCount == null) {
       equalsCount= 0 ;
    }else {
       equalsCount= inputString.match(/[\=\?\<]/g).length;
    }
    if (inputString === 'example<25' || inputString === 'example<=24') {
      console.log("Всё верно");
      return true;
    }else {
      if(varible !== "example" || (inputString[7]!=="=" && inputString[7]!=="!" && inputString[7]!=="<" && inputString[7]!==">" && inputString.length>8)) {
        console.log("Ошибка в названии переменной");
      }else {
        if (equalsCount>1) {
          console.log("Для проверки достатчно 1 знака =, (2>1), или можно написать без них .");
        }else {
          if(equalsCount<= 1) {
            console.log("Вы забыли знак равно ");
          }else {
            if(inputString[7]!=="=") {
              console.log("Вы используете не тот оператор сравнения, нужен '===' или '=='");
            }else {
              console.log("После оператора сравнения нужно указать верный ответ - '25'");
            }
          }
        }
      }
      return false;
    }
  }
}

function comparisonOperatorsThirdInput(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    let elem = e.srcElement || e.target;
    console.log(elem.value);
  }
}