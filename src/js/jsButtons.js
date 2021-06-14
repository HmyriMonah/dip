/* eslint-disable no-undef */

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

//open first form
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

const logicAndButton = document.getElementById('code-example__logic-operator-and');

logicAndButton.onclick = function () {
  alert(true && true); //true
  alert(true && false); //false
  alert(false && true); //false
  alert(false && false); //false
};

const logicOrButton = document.getElementById('code-example__logic-operator-or');

logicOrButton.onclick = function () {
  alert(true || true); //true
  alert(true || false); //true
  alert(false || true); //true
  alert(false || false); //false
};

const logicNotButton = document.getElementById('code-example__logic-operator-not');

logicNotButton.onclick = function () {
  alert(!true); //false
  alert(!false); //true
  alert(!1); //false
  alert(!0); //true
};

const logicIfButton = document.getElementById('code-example__logic-operators-if');

logicIfButton.onclick = function () {
  let example = prompt('Введите число от 0 до 20');
  if (example == 15 || example == 5) {
    alert('Вы ввели 5 или 15 ');
    1;
  }
  if (example < 15 && example > 5) {
    alert('Ваше число между 5 и 15 ');
  }
  if (!(example <= 15 && example >= 5)) {
    alert('Ваше число не находится между 5 и 15 ');
  }
};


const logicFirstInput = document.getElementById('logic-first-input');
const logicSecondInput = document.getElementById('logic-second-input');
const logicThirdInput = document.getElementById('logic-third-input');

const firstLogicError = document.getElementById('first-logic-error');
const seconLogicdError = document.getElementById('second-logic-error');
const thirdLogicError = document.getElementById('third-logic-error');



const logicTask = document.getElementById('code-example__logic-task');

logicTask.onclick = function () {
  let firstInputString = logicFirstInput.value;
  firstInputString = firstInputString.replace(/\s+/g, '');

  let checkedResult = checkLogicSign(firstInputString, '&');
  if (checkedResult.result === false) {
    errorColor(logicFirstInput);
    firstLogicError.innerHTML = checkedResult.message;
  } else {
    normalColor(logicFirstInput);
    firstLogicError.innerHTML = '';
  }


  let secondInputString = logicSecondInput.value;
  secondInputString = secondInputString.replace(/\s+/g, '');

  let secondCheckedResult = checkLogicSign(secondInputString, '!');
  if (secondCheckedResult.result === false) {
    errorColor(logicSecondInput);
    seconLogicdError.innerHTML = secondCheckedResult.message;
  } else {
    normalColor(logicSecondInput);
    seconLogicdError.innerHTML = '';
  }


  let thirdInputString = logicThirdInput.value;
  thirdInputString = thirdInputString.replace(/\s+/g, '');

  let thirdCheckedResult = checkLogicSign(thirdInputString, '|');
  if (thirdCheckedResult.result === false) {
    errorColor(logicThirdInput);
    thirdLogicError.innerHTML = thirdCheckedResult.message;
  } else {
    normalColor(logicThirdInput);
    thirdLogicError.innerHTML = '';
  }

};




function checkLogicSign(str, sign) {
  let correctString = [];
  let equalsCorrectCount;
  let inputString = str;
  if (str.length <= 1) {
    return {
      result: false,
      message: 'Нужно что-то написать',
    };
  }
  let openBracketsCount = inputString.match(/[\(\?\<]/g);
  if (openBracketsCount == null) {
    openBracketsCount = 0;
  } else {
    openBracketsCount = inputString.match(/[\(\?\<]/g).length;
  }
  let closeBracketsCount = inputString.match(/[\)\?\<]/g);
  if (closeBracketsCount == null) {
    closeBracketsCount = 0;
  } else {
    closeBracketsCount = inputString.match(/[\)\?\<]/g).length;
  }
  if(openBracketsCount!=closeBracketsCount) {
    return {
      result: false,
      message: 'не верное кол-во скобок',
    };
  }
  inputString=inputString.replace(/[{()}]/g, '');
  console.log(inputString);
  if (sign === '&') {
    correctString[0] = 'example>10&&example<20';
    correctString[1] = 'example<20&&example>10';
  } else {
    if (sign === '|') {
      correctString[0] = 'example==10||example==20';
      correctString[1] = 'example==20||example==10';
    } else {
      if (sign === '!') {
        correctString[0] = '!example<20&&example>10';
        correctString[1] = '!example>10&&example<20';
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
      return { result: false, message: 'Ошибка ' };
    } else {
      if (inputString[7] !== sign) {
        //console.log("Вы используете не тот оператор сравнения.");
        return { result: false, message: 'Ошибка' };
      } 
    }
  }
}

function logicOperatorsFirstInput(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    let elem = e.srcElement || e.target;
    let inputString = elem.value;
    inputString = inputString.replace(/\s+/g, '');
    let varible = inputString.substring(0, 7);
    let openBracketsCount = inputString.match(/[\(\?\<]/g);
    if (openBracketsCount == null) {
      openBracketsCount = 0;
    } else {
      openBracketsCount = inputString.match(/[\(\?\<]/g).length;
    }
    let closeBracketsCount = inputString.match(/[\)\?\<]/g);
    if (closeBracketsCount == null) {
      closeBracketsCount = 0;
    } else {
      closeBracketsCount = inputString.match(/[\)\?\<]/g).length;
    }
     console.log(checkLogicSign(inputString, '&'));
    if (!checkLogicSign(inputString, '&').result) {
      errorColor(logicFirstInput);
      firstLogicError.innerHTML = checkLogicSign(inputString, '&').message;
    } else {
      normalColor(logicFirstInput);
      firstLogicError.innerHTML = '';
    }
  }
}

function logicOperatorsSecondInput(e) {
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
    console.log(checkLogicSign(inputString, '!'));
    if (!checkLogicSign(inputString, '!').result) {
      errorColor(logicSecondInput);
      seconLogicdError.innerHTML = checkLogicSign(inputString, '&').message;
    } else {
      normalColor(logicSecondInput);
      seconLogicdError.innerHTML = '';
    }
  }
}

function logicOperatorsThirdInput(e) {
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
    console.log(checkLogicSign(inputString, '|'));
     if (!checkLogicSign(inputString, '|').result) {
      errorColor(logicThirdInput);
      thirdLogicError.innerHTML = checkLogicSign(inputString, '|').message;
    } else {
      normalColor(logicThirdInput);
      thirdLogicError.innerHTML = '';
    }
  }
}

