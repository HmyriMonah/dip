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

const comparisonFirstInput = document.getElementById('comparison-first-input');
const comparisonSecondInput = document.getElementById('comparison-second-input');
const comparisonThirdInput = document.getElementById('comparison-third-input');

const firstError = document.getElementById('first-error');
const secondError = document.getElementById('second-error');
const thirdError = document.getElementById('third-error');

// function OnStart() {
//   let tableList = new Array();
//   let tr = document.getElementById('task-table').getElementsByTagName('tr');
//   for (let i = 0; i < tr.length; i++) {
//     let td = tr.item(i).getElementsByTagName('td');
//     tableList[i] = new Array();
//     for (let j = 0; j < td.length; j++) {
//       tableList[i][j] = td.item(j).innerText;

//       console.log(td.item(j).innerText);
//     }
//   }
//   let stringTest=tableList[1][1] +="ошибка";
// }

const conditionTask = document.getElementById('code-example__condition-task');

conditionTask.onclick = function () {
  let firstInputString = comparisonFirstInput.value;
  firstInputString = firstInputString.replace(/\s+/g, '');

  let checkedResult = checkSign(firstInputString, '=');
  if (checkedResult.result === false) {
    errorColor(comparisonFirstInput);
    firstError.innerHTML = checkedResult.message;
  } else {
    normalColor(comparisonFirstInput);
    firstError.innerHTML = '';
  }
  console.log(checkSign(firstInputString, '='));

  let secondInputString = comparisonSecondInput.value;
  secondInputString = secondInputString.replace(/\s+/g, '');

  let secondCheckedResult = checkSign(secondInputString, '<');
  if (secondCheckedResult.result === false) {
    errorColor(comparisonSecondInput);
    secondError.innerHTML = secondCheckedResult.message;
  } else {
    normalColor(comparisonSecondInput);
    secondError.innerHTML = '';
  }
  console.log(checkSign(secondInputString, '<'));

  let thirdInputString = comparisonThirdInput.value;
  thirdInputString = thirdInputString.replace(/\s+/g, '');

  let thirdCheckedResult = checkSign(thirdInputString, '>');
  if (thirdCheckedResult.result === false) {
    errorColor(comparisonThirdInput);
    thirdError.innerHTML = thirdCheckedResult.message;
  } else {
    normalColor(comparisonThirdInput);
    thirdError.innerHTML = '';
  }
  console.log(checkSign(thirdInputString, '>'));
};

function errorColor(id) {
  id.style.borderColor = '#FF0000';
  id.style.background = 'white';
}

function normalColor(id) {
  id.style.borderColor = 'green';
  id.style.background = '#03bf47';
}

function checkSign(str, sign) {
  let correctString = [];
  let equalsCorrectCount;
  let inputString = str;
  if (str.length <= 1) {
    return {
      result: false,
      message: 'Нужно что-то написать',
    };
  }
  if (str.length == 7) {
    return {
      result: false,
      message: 'Нужен оператор сравнения',
    };
  }
  if (sign === '=') {
    correctString[0] = 'example==25';
    correctString[1] = 'example===25';
    equalsCorrectCount = 3;
  } else {
    if (sign === '<') {
      correctString[0] = 'example<25';
      correctString[1] = 'example<=24';
      equalsCorrectCount = 0;
    } else {
      if (sign === '>') {
        correctString[0] = 'example>25';
        correctString[1] = 'example>24';
        equalsCorrectCount = 0;
      }
    }
  }
  inputString = inputString.replace(/\s+/g, '');
  let varible = inputString.substring(0, 7);
  let equalsCount = inputString.match(/[\=\?]/g);
  if (equalsCount == null) {
    equalsCount = 0;
  } else {
    equalsCount = inputString.match(/[\=\?\<]/g).length;
  }
  if (inputString == correctString[0] || inputString == correctString[1]) {
    //console.log('Всё верно');
    return { result: true, message: 'Всё верно' };
  } else {
    if (
      varible !== 'example' ||
      (inputString[7] !== '=' &&
        inputString[7] !== '!' &&
        inputString[7] !== '<' &&
        inputString[7] !== '>' &&
        inputString.length > 8)
    ) {
      //.log('Ошибка в названии переменной');
      return { result: false, message: 'Ошибка в названии переменной' };
    } else {
      if (inputString[7] !== sign) {
        //console.log("Вы используете не тот оператор сравнения.");
        return { result: false, message: 'Вы используете не тот оператор сравнения' };
      } else {
        if (equalsCount !== equalsCorrectCount) {
          //console.log('Не верное количетсво знаков "="');
          return { result: false, message: 'Не верное количетсво знаков "="' };
        } else {
          //console.log("После оператора сравнения нужно указать верный ответ - '25'");
          return {
            result: false,
            message: 'После оператора сравнения нужно указать верный ответ - "25"',
          };
        }
      }
    }
  }
}

function comparisonOperatorsFirstInput(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    let elem = e.srcElement || e.target;
    let inputString = elem.value;
    inputString = inputString.replace(/\s+/g, '');
    let varible = inputString.substring(0, 7);
    let equalsCount = inputString.match(/[\=\?\<]/g);
    if (equalsCount == null) {
      equalsCount = 0;
    } else {
      equalsCount = inputString.match(/[\=\?\<]/g).length;
    }
    let checkedResult = checkSign(inputString, '=');
    if (checkedResult.result === false) {
      errorColor(comparisonFirstInput);
      firstError.innerHTML = checkedResult.message;
    } else {
      normalColor(comparisonFirstInput);
      firstError.innerHTML = '';
    }
    console.log(checkSign(inputString, '='));
  }
}

function comparisonOperatorsSecondInput(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    let elem = e.srcElement || e.target;
    let inputString = elem.value;
    inputString = inputString.replace(/\s+/g, '');
    let varible = inputString.substring(0, 7);
    let equalsCount = inputString.match(/[\=\?\<]/g);
    if (equalsCount == null) {
      equalsCount = 0;
    } else {
      equalsCount = inputString.match(/[\=\?\<]/g).length;
    }
    if (checkSign(inputString, '<').result === false) {
      errorColor(comparisonSecondInput);
    } else {
      normalColor(comparisonSecondInput);
    }
    console.log(checkSign(inputString, '<'));
  }
}

function comparisonOperatorsThirdInput(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    let elem = e.srcElement || e.target;
    let inputString = elem.value;
    inputString = inputString.replace(/\s+/g, '');
    let varible = inputString.substring(0, 7);
    let equalsCount = inputString.match(/[\=\?\<]/g);
    if (equalsCount == null) {
      equalsCount = 0;
    } else {
      equalsCount = inputString.match(/[\=\?\<]/g).length;
    }
    if (checkSign(inputString, '>').result === false) {
      errorColor(comparisonThirdInput);
    } else {
      normalColor(comparisonThirdInput);
    }
    console.log(checkSign(inputString, '>'));
  }
}